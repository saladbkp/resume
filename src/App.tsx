import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CTF from './components/CTF';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Experience Section */}
        <Experience />
        
        {/* CTF Section */}
        <CTF />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 border-t border-gray-800 py-8"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Hong Rui Yi. Built with React, TypeScript, and Framer Motion.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
