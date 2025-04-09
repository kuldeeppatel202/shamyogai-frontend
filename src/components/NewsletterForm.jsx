import React, { useState } from "react";
import axios from "axios";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/subscribe", { email });
      setMessage("✅ Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("❌ Error subscribing:", error);
      setMessage("❌ Subscription failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="p-2 border rounded w-full"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Subscribe
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default NewsletterForm;
