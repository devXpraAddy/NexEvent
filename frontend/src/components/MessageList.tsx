import React, { useEffect, useState } from "react";
import { fetchMessages } from "../services/api";

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const MessageList: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const messages = await fetchMessages();
        setMessages(messages);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch messages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <h3>{message.subject}</h3>
            <p>{message.message}</p>
            <p>
              <strong>{message.name}</strong> - {message.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
