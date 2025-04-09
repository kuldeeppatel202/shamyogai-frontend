import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">🧘‍♂️ Shamyog<span>AI</span></div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Classes</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <button className="contact-btn">Contact Us</button>
      </nav>

      <header className="hero-section">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="tagline">✨ Yoga for Everyone</p>
          <h1>Discover Inner Peace and Strength with <span>ShamyogAI</span></h1>
          <p className="subtext">A personalized AI wellness companion guiding you on your spiritual and physical journey.</p>
          <div className="hero-buttons">
            <button className="btn primary">🌿 Get Started</button>
            <button className="btn secondary">📅 Book Now</button>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/yoga1.jpg" alt="Yoga" />
        </motion.div>
      </header>

      <section className="mission-section">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          We're passionate about guiding you to holistic well-being.
        </motion.h2>
      </section>

      <section className="newsletter-section">
        <motion.div 
          className="newsletter-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>💌 Join Our Wellness Tribe</h3>
          <p>Get updates, exclusive sessions, and mindful living tips from ShamyogAI</p>
          <form action="http://localhost:5000/subscribe" method="POST" className="newsletter-form">
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
