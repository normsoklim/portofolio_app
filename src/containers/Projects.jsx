// src/components/Projects.jsx
import { motion } from "framer-motion";
import { projects } from "../constants/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <section id="projects" className="section-container projects-section">
            <motion.div
                className="container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">🚀 My Projects</h2>
                    <div className="section-divider"></div>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            {/* Project Image */}
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>

                            {/* Project Content */}
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                {/* Technologies */}
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
