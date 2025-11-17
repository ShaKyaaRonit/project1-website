import React from "react";

const Contact = () => {
  const sendMessage = () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill the form.");
      return;
    }

    alert("Message sent!");

    document.getElementById("contactForm").reset();
  };

  return (
    <div className="mt-50 max-w-lg mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
      <h2 className="text-4xl uppercase font-semibold">Contact</h2>

      <form id="contactForm" className="flex flex-col space-y-5 mt-5">
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg border border-gray-400"
        />

        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg border border-gray-400"
        />

        <textarea
          id="message"
          rows="4"
          placeholder="Your Message"
          className="p-3 rounded-lg border border-gray-400"
        ></textarea>

        <button
          type="button"
          onClick={sendMessage}
          className="bg-gray-700 text-white py-3 rounded-full font-semibold hover:bg-black transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
