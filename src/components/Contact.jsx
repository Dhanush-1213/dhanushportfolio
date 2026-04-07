import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const [revealRef, isVisible] = useReveal();
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setStatus("success");
      form.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    }, () => {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div ref={revealRef} className={`contact-container reveal-content ${isVisible ? "active" : ""}`}>
        <div className="contact-content">
          <h2 className="contact-heading">Drop a Message</h2>
          <div className="contact-line"></div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input name="from_name" type="text" placeholder="Full Name" className="contact-input" required />
            <input name="from_email" type="email" placeholder="Email" className="contact-input" required />
            <textarea name="message" placeholder="Message" rows="6" className="contact-textarea" required />
            <button type="submit" className="contact-button" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>
            {status === "success" && <p style={{ color: "#10b981", marginTop: "1rem" }}>Success!</p>}
          </form>
          <div className="contact-icons">
            <a href="https://github.com/Dhanush-1213" target="_blank" className="contact-icon github"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/dhanush-k-pes1312/" target="_blank" className="contact-icon linkedin"><FaLinkedinIn /></a>
            <a href="mailto:dhanushk9972@gmail.com" className="contact-icon email"><FaEnvelope /></a>
            <a href="https://x.com/Dhanushk9972" target="_blank" className="contact-icon twitter"><FaXTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
