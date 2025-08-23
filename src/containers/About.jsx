import { motion } from 'framer-motion';
import { skills } from '../constants/skills';

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.div
                className="container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Section Header */}
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        className="section-divider"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                {/* About Content */}
                <div className="about-content">
                    {/* Text */}
                    <motion.div
                        className="about-text"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            I'm a passionate developer with expertise in building modern web applications.
                            I specialize in creating responsive and user-friendly interfaces.
                        </p>
                        <p>
                            Since 2018, I've worked with multiple technologies and frameworks to deliver
                            high-quality projects and continuously improve my skills.
                        </p>
                        <p>
                            Outside coding, I enjoy hiking, reading tech blogs, and contributing to
                            open-source projects.
                        </p>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        className="skills-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>My Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="skill-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="icon-container">
                                        <img src={skill.icon} alt={skill.name} className="skill-icon" loading="lazy" />
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
