import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCommentDots,
	faPaperPlane,
	faTimes,
	faRobot,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/chatWidget.css";

const API_BASE_URL =
	process.env.REACT_APP_AGENT_API_URL || "http://localhost:8000/api/chat";

const SUGGESTED_PROMPTS = [
	"What is Mothish's current role at Oracle?",
	"Tell me about his robotics and computer vision background.",
	"What awards and patents has he received?",
	"What tech stack did he use at Clothing Tech?",
];

const getOrCreateSessionId = () => {
	let sid = sessionStorage.getItem("mr_portfolio_chat_session");
	if (!sid) {
		sid = "session_" + Date.now() + "_" + Math.random().toString(36).substring(2, 9);
		sessionStorage.setItem("mr_portfolio_chat_session", sid);
	}
	return sid;
};

const ChatWidget = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			role: "model",
			content:
				"Hi there! I'm Mothish's AI Portfolio Assistant. Ask me anything about his work experience at Oracle and Clothing Tech, robotics projects, education, awards, or technical skills!",
		},
	]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [remainingMessages, setRemainingMessages] = useState(null);
	const [errorMessage, setErrorMessage] = useState(null);

	const messagesEndRef = useRef(null);
	const inputRef = useRef(null);
	const sessionIdRef = useRef(getOrCreateSessionId());

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		if (isOpen) {
			scrollToBottom();
			inputRef.current?.focus();
		}
	}, [isOpen, messages, isLoading]);

	const sendMessage = async (textToSend) => {
		const messageText = (textToSend || input).trim();
		if (!messageText || isLoading) return;

		setErrorMessage(null);
		const userMsg = { role: "user", content: messageText };
		const nextMessages = [...messages, userMsg];
		setMessages(nextMessages);
		setInput("");
		setIsLoading(true);

		try {
			// Convert to API schema history (excluding the very first welcome message)
			const historyForApi = nextMessages
				.slice(1, -1)
				.map((m) => ({ role: m.role, content: m.content }));

			const response = await fetch(API_BASE_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					session_id: sessionIdRef.current,
					message: messageText,
					history: historyForApi,
				}),
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(
					errorData.detail || `Server error (${response.status})`
				);
			}

			const data = await response.json();
			setMessages((prev) => [
				...prev,
				{ role: "model", content: data.reply },
			]);
			if (typeof data.remaining_messages === "number") {
				setRemainingMessages(data.remaining_messages);
			}
		} catch (err) {
			console.error("Chat error:", err);
			setErrorMessage(
				"Unable to connect to the AI agent service. Please ensure the backend is running, or reach out to Mothish directly at mothish.2997@gmail.com."
			);
			setMessages((prev) => [
				...prev,
				{
					role: "model",
					content:
						"I'm temporarily having trouble reaching the AI backend. Feel free to contact Mothish directly at mothish.2997@gmail.com or connect on LinkedIn!",
				},
			]);
		} finally {
			setIsLoading(false);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	};

	const clearChat = () => {
		sessionIdRef.current = "session_" + Date.now() + "_" + Math.random().toString(36).substring(2, 9);
		sessionStorage.setItem("mr_portfolio_chat_session", sessionIdRef.current);
		setMessages([
			{
				role: "model",
				content:
					"Chat cleared! How can I help you learn about Mothish's work?",
			},
		]);
		setRemainingMessages(null);
		setErrorMessage(null);
	};

	return (
		<div className="chat-widget-root">
			{/* Floating Open/Close Button */}
			<button
				className={`chat-launcher-btn ${isOpen ? "open" : ""}`}
				onClick={() => setIsOpen((prev) => !prev)}
				aria-label={isOpen ? "Close AI chat" : "Open AI assistant chat"}
				title="Chat with Mothish's AI Agent"
			>
				{isOpen ? (
					<FontAwesomeIcon icon={faTimes} className="chat-launcher-icon" />
				) : (
					<div className="chat-launcher-inner">
						<FontAwesomeIcon icon={faCommentDots} className="chat-launcher-icon" />
						<span className="chat-badge-pulse" />
					</div>
				)}
			</button>

			{/* Floating Chat Modal */}
			{isOpen && (
				<div className="chat-window" role="dialog" aria-modal="true">
					{/* Header */}
					<div className="chat-header">
						<div className="chat-header-info">
							<div className="chat-avatar">
								<FontAwesomeIcon icon={faRobot} />
							</div>
							<div>
								<div className="chat-title">Mothish's AI Representative</div>
								<div className="chat-subtitle">
									{remainingMessages !== null
										? `${remainingMessages} messages remaining in session`
										: "Grounded in verified experience & projects"}
								</div>
							</div>
						</div>
						<div className="chat-header-actions">
							<button
								className="chat-action-btn"
								onClick={clearChat}
								title="Reset conversation"
								aria-label="Reset conversation"
							>
								<FontAwesomeIcon icon={faTrash} />
							</button>
							<button
								className="chat-action-btn"
								onClick={() => setIsOpen(false)}
								title="Close chat"
								aria-label="Close chat"
							>
								<FontAwesomeIcon icon={faTimes} />
							</button>
						</div>
					</div>

					{/* Message Container */}
					<div className="chat-messages">
						{messages.map((msg, index) => (
							<div
								key={index}
								className={`chat-message-row ${
									msg.role === "user" ? "user-row" : "model-row"
								}`}
							>
								{msg.role === "model" && (
									<div className="message-avatar">
										<FontAwesomeIcon icon={faRobot} />
									</div>
								)}
								<div
									className={`chat-bubble ${
										msg.role === "user" ? "user-bubble" : "model-bubble"
									}`}
								>
									{msg.content}
								</div>
							</div>
						))}

						{/* Typing Indicator */}
						{isLoading && (
							<div className="chat-message-row model-row">
								<div className="message-avatar">
									<FontAwesomeIcon icon={faRobot} />
								</div>
								<div className="chat-bubble model-bubble typing-bubble">
									<span className="typing-dot" />
									<span className="typing-dot" />
									<span className="typing-dot" />
								</div>
							</div>
						)}

						{/* Suggested prompt chips (shown when only welcome message exists) */}
						{messages.length === 1 && !isLoading && (
							<div className="chat-suggestions">
								<div className="suggestions-label">Popular Questions:</div>
								<div className="suggestions-list">
									{SUGGESTED_PROMPTS.map((prompt, i) => (
										<button
											key={i}
											className="suggestion-chip"
											onClick={() => sendMessage(prompt)}
										>
											{prompt}
										</button>
									))}
								</div>
							</div>
						)}

						{errorMessage && (
							<div className="chat-error-notice">{errorMessage}</div>
						)}

						<div ref={messagesEndRef} />
					</div>

					{/* Input Bar */}
					<div className="chat-input-bar">
						<textarea
							ref={inputRef}
							className="chat-input"
							rows={1}
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKeyDown}
							placeholder="Ask about Mothish's career or projects..."
							maxLength={600}
							disabled={isLoading}
						/>
						<button
							className="chat-send-btn"
							onClick={() => sendMessage()}
							disabled={!input.trim() || isLoading}
							aria-label="Send question"
							title="Send"
						>
							<FontAwesomeIcon icon={faPaperPlane} />
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ChatWidget;
