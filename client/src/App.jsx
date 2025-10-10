import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Soultide Therapy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
