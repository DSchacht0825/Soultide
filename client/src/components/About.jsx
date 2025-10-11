import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Welcome to Soul Tide Therapy</h2>
            <p className="about-intro">
              A safe, supportive space where healing begins and personal growth flourishes.
            </p>
            <p>
              At Soul Tide Therapy, we believe that everyone deserves compassionate,
              evidence-based care tailored to their unique needs. Our approach combines
              modern therapeutic techniques with genuine human connection to help you
              navigate life's challenges.
            </p>
            <p>
              Whether you're facing anxiety, depression, relationship issues, or simply
              seeking personal growth, we're here to support you on your journey toward
              wellness and self-discovery.
            </p>
            <div className="about-values">
              <div className="value-item">
                <h3>Compassionate Care</h3>
                <p>Every client is treated with empathy, respect, and understanding.</p>
              </div>
              <div className="value-item">
                <h3>Evidence-Based</h3>
                <p>We use proven therapeutic methods backed by research and clinical experience.</p>
              </div>
              <div className="value-item">
                <h3>Client-Centered</h3>
                <p>Your goals, values, and needs guide every step of your therapeutic journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
