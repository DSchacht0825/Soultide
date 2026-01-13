import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import BookingWidget from './BookingWidget';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleBooking = () => {
    setIsBookingOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <img src={logo} alt="Soul Tide Therapy" className="logo" />
            </div>

            <button
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
                <li><a onClick={() => scrollToSection('about')}>About</a></li>
                <li><a onClick={() => scrollToSection('careers')}>Careers</a></li>
                <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                <li className="book-now-item">
                  <button className="btn-book-now" onClick={handleBooking}>
                    Book Now
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <BookingWidget
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default Header;
