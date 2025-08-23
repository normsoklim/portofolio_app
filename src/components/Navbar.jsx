import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = ({ darkMode, setDarkMode }) => {
    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Experience', path: '#experience' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <span>Portfolio</span>
                </Link>

                <ul className="nav-links">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a href={link.path}>{link.name}</a>
                        </motion.li>
                    ))}
                </ul>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="theme-toggle"
                >
                    {darkMode ? <FiSun /> : <FiMoon />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;