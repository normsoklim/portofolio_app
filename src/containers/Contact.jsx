import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import axios from "axios";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post("http://localhost:5000/api/contact", form);
            setLoading(false);
            setSuccess(true);
            setForm({ name: "", email: "", message: "" });

            setTimeout(() => setSuccess(false), 4000);
        } catch (err) {
            setLoading(false);
            console.error(err);
            alert("❌ Failed to send message. Please try again.");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <motion.div
                className="contact-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                {/* Left - Info */}
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2>Let’s Connect</h2>
                    <p>Feel free to reach out for collaboration, questions, or just to say hello.</p>

                    <div className="info-items">
                        <div className="info-item">
                            <FiMail className="info-icon" />
                            <a href="mailto:soklim106@email.com">soklim106@email.com</a>
                        </div>
                        <div className="info-item">
                            <FiPhone className="info-icon" />
                            <a href="tel:+855716199627">+855 (716) 199-627</a>
                        </div>
                        <div className="info-item">
                            <FiMapPin className="info-icon" />
                            <span>Phnom Penh, Cambodia</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right - Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="contact-form"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {["name", "email", "message"].map((field) => (
                        <div className="form-group" key={field}>
                            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            {field !== "message" ? (
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    name={field}
                                    value={form[field]}
                                    onChange={handleChange}
                                    required
                                />
                            ) : (
                                <textarea
                                    name="message"
                                    rows="5"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            )}
                        </div>
                    ))}

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                        className="submit-btn"
                    >
                        {loading
                            ? "Sending..."
                            : success
                                ? <span><FiCheckCircle /> Sent Successfully</span>
                                : <span><FiSend /> Send Message</span>
                        }
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default Contact;
