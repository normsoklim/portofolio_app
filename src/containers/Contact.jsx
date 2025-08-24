import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        try {
            const res = await fetch("https://my-express-backend-xznr.onrender.com/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            setSuccess(data.msg);
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setSuccess("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Contact Info */}
                <div className="contact-info">
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                    <div className="info-items">
                        <div className="info-item">
                            <span className="info-icon">📧</span>
                            <a href="mailto:soklim106@gmail.com">soklim106@gmail.com</a>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">📞</span>
                            <a href="tel:+855716299627">+855 716299627</a>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">📍</span>
                            Phnom Penh, Cambodia
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            required
                        />
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {success && <p className="text-green-600 text-center mt-2">{success}</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
