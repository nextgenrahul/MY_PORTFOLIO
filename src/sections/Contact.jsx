import { useRef, useState, useCallback } from "react";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }, [form]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://my-portfolio-backend-ecru.vercel.app/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.status === "success") {
        setForm({ name: "", email: "", message: "" });
        alert("Message saved to Google Sheet successfully!");
      } else {
        console.error(result.message);
        alert("Failed to save message.");
      }
    } catch (error) {
      console.error("Google Sheets Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center min-h-screen px-5 md:px-10"
    >
      <div className="w-full max-w-3xl">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="mt-16 flex justify-center w-full">
          <div className="w-full card-border rounded-xl p-10 relative">

            {/* Loading Bar with Text */}
            {loading && (
              <div className="absolute top-0 left-0 w-full flex items-center justify-center flex-col">
                <div className="w-full h-1 bg-blue-500 animate-pulse" />
                <p className="text-sm text-blue-500 mt-1 font-medium">Loading...</p>
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-7"
            >
              <div>
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What’s your good name?"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What’s your email address?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="w-full">
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">
                    {loading ? "Sending..." : "Send Message"}
                  </p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
