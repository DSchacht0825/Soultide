import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SchemaMarkup from './components/SchemaMarkup';
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
