import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './containers/Hero';
import About from './containers/About';
import Experience from './containers/Experience';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import Footer from './components/Footer';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <Router>
            <div className={`app ${darkMode ? 'dark' : 'light'}`}>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <AnimatePresence>
                    <main className="main-content">
                        <Hero />
                        <About />
                        <Experience />
                        <Projects />
                        <Contact />
                    </main>
                </AnimatePresence>
                <Footer />
            </div>
        </Router>


    );

}
export default App;