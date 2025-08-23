import { motion } from 'framer-motion';
import { experiences } from '../constants/experiences';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <motion.div
                className="container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Experience</h2>
                    <div className="section-divider"></div>
                </div>

                {/* Timeline */}
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="experience-date">{exp.date}</div>
                            <div className="experience-content">
                                <h3>{exp.position}</h3>
                                <h4>{exp.company}</h4>
                                <ul className="experience-description">
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <div className="experience-tech">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
