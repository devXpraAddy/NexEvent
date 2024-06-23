import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { sendMessage } from "../services/api";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await sendMessage({ name, email, subject, message }); // passing the form data to sendMessage function which is in services/api.ts
      toast.success(res.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="contact container">
      <div className="banner">
        <div className="item">
          <h4>Address</h4>
          <p>Any where, Any City, 4521</p>
        </div>
        <div className="item">
          <h4>Call Us</h4>
          <p>Call Us: +91-999-999-9999</p>
        </div>
        <div className="item">
          <h4>Mail Us</h4>
          <p>zk@gmail.com</p>
        </div>
      </div>
      <div className="banner">
        <div className="item">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14283.132050344523!2d80.9452853!3d26.8465108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0cf8b5539b%3A0x7f74feac6b7b2c52!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1596445722606!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              rows={10}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
