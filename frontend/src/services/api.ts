import axios from "axios";

const API_URL = "http://localhost:5000/api/messages/";

export const fetchMessages = async () => {
  try {
    const response = await axios.get(API_URL, { withCredentials: true });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error fetching messages:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const sendMessage = async (message: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await axios.post(API_URL, message, {
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
