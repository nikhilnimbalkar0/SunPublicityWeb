import React, { useState } from "react";

export default function ContactSection({
  office = "Rajiv Gandhi Nagar, Goa",
  phone = "+91 9545454454",
  email = "sunadvertise@gmail.com",
  onSubmit,
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
    } else if (email) {
      const subject = encodeURIComponent("New inquiry from website");
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left side - Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Need to advertise your brand or rent a billboard?  
            We’re here to help you find the best spot for maximum visibility.
          </p>

          <ul className="space-y-4">
            <li>
              📍 <strong>Office:</strong> {office}
            </li>
            <li>
              📞 <strong>Phone:</strong> {phone}
            </li>
            <li>
              ✉️ <strong>Email:</strong> {email}
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Follow our work</h3>
            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              <a
                href="https://www.facebook.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 hover:bg-gray-700 transition"
              >
                <span>📘</span>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 hover:bg-gray-700 transition"
              >
                <span>📸</span>
                <span>Instagram</span>
              </a>
              <a
                href="https://accounts.google.com/ServiceLogin?service=youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 hover:bg-gray-700 transition"
              >
                <span>▶️</span>
                <span>YouTube</span>
              </a>
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 hover:bg-gray-700 transition"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              name="message"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
