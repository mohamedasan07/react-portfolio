import { useState } from "react";
import { Mail, MessageSquare, Send, User } from "lucide-react";

import SectionHeading from "./SectionHeading";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you for contacting me, " + formData.name + "!");
    setConfirmation(`Thanks, ${formData.name}! Your message was received.`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section section--dark contact">
      <div className="container contact__grid">
        <div className="contact__intro animate-up">
          <SectionHeading
            align="left"
            eyebrow="Get in touch"
            title="Contact Me"
            description="Have a project or opportunity? Let's talk!"
          />

          <div className="contact__hint">
            <MessageSquare size={19} aria-hidden="true" />
            <span>
              Tell me about your idea, role or project — I&apos;d love to hear
              about it.
            </span>
          </div>
        </div>

        <form className="contact-form animate-up" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <div className="field__control">
              <User size={18} aria-hidden="true" />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <div className="field__control">
              <Mail size={18} aria-hidden="true" />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <div className="field__control field__control--textarea">
              <MessageSquare size={18} aria-hidden="true" />
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn--primary contact-form__submit">
            <Send size={18} aria-hidden="true" /> Send Message
          </button>

          <p className="contact-form__status" role="status">
            {confirmation}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
