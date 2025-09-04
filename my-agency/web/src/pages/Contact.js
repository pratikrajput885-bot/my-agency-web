import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, we’ll contact you soon!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Contact Us 📩</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <input style={{ margin: "10px 0", padding: "10px", fontSize: "16px" }}
          type="text" name="name" placeholder="Your Name" value={form.name}
          onChange={handleChange} required />
        <input style={{ margin: "10px 0", padding: "10px", fontSize: "16px" }}
          type="email" name="email" placeholder="Your Email" value={form.email}
          onChange={handleChange} required />
        <textarea style={{ margin: "10px 0", padding: "10px", fontSize: "16px" }}
          name="message" placeholder="Your Message" value={form.message}
          onChange={handleChange} required />
        <button style={{ padding: "10px", background: "#222", color: "white", border: "none", cursor: "pointer" }}
          type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
