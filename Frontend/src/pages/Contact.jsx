import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState({
    visible: false,
    text: "",
    isError: false,
  });

  const showToast = (text, isError = false) => {
    setToast({ visible: true, text, isError });
    setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mldveadv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (response.ok) {
      setName("");
      setEmail("");
      setMessage("");
      showToast("Message sent successfully!");
    } else {
      showToast("Failed to send message", true);
    }
  };

  return (
    <>
      {toast.visible && (
        <div
          className={`fixed bottom-6 right-6 px-4 py-3 rounded-md text-white shadow-lg ${
            toast.isError ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {toast.text}
        </div>
      )}
      <section className="section max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-3">Contact Us</h1>
        <p className="text-primary/80 mb-10">
          Have feedback, questions, or ideas? We'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-accent/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-accent/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-accent/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary inline-block bg-accent text-light font-semibold px-6 py-2 rounded-md hover:bg-secondary transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
