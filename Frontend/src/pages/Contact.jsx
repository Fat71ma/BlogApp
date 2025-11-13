export default function Contact() {
  return (
    <section className="section max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-3">Contact Us</h1>
      <p className="text-primary/80 mb-10">
        Have feedback, questions, or ideas? We'd love to hear from you.
      </p>

      <form className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
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
            className="w-full border border-accent/40 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-primary inline-block bg-accent text-light font-semibold px-6 py-2 rounded-md hover:bg-secondary transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}