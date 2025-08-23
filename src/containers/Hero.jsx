import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-text"
                >
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Norm Soklim</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        <TypeAnimation
                            sequence={[
                                'Frontend Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'Full Stack Engineer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className="hero-description">
                        I build exceptional digital experiences with modern technologies.
                    </p>
                    <div className="hero-cta">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cta-button"
                        >
                            Contact Me
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="secondary-button"
                        >
                            View Projects
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero-image"
                >
                    <img src="src/assets/Chibi.png" alt="Profile" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;