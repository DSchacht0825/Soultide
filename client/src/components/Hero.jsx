import React, { useState } from 'react';
import heroImage from '../assets/images/heroimage.jpg';
import BookingWidget from './BookingWidget';
import './Hero.css';

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-image-container">
          <img src={heroImage} alt="Soul Tide Therapy" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">Find Your Path to Healing</h1>
            <p className="hero-subtitle">
              Compassionate, professional therapy to help you navigate life's challenges
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleBooking}>
                Book a Session
              </button>
              <button
                className="btn btn-outline"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingWidget
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default Hero;
