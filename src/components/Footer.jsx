import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="social-links">
                    <a href="https://github.com/normsoklim" target="github" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="mailto:your@email.com">
                        <FaEnvelope />
                    </a>
                </div>
                <p className="copyright">
                    &copy; {currentYear}Norm Soklim. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;