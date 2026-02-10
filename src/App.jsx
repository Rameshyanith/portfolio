import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="bg-gray-950 text-white font-sans selection:bg-cyan-500 selection:text-white min-h-screen">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
