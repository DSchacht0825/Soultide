import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Careers.css';

const Careers = () => {
  const headingRef = useScrollAnimation('slide-in-left');
  const introRef = useScrollAnimation('slide-in-right');
  const contentRef = useScrollAnimation('scale-in');

  return (
    <section id="careers" className="careers">
      <div className="container">
        <div className="careers-content">
          <div className="careers-text">
            <h2 ref={headingRef}>Join Our Team</h2>
            <p className="careers-intro" ref={introRef}>
              Be part of a growing practice dedicated to compassionate, integrated mental health care.
            </p>
            <div className="careers-details" ref={contentRef}>
              <p>
                Soul Tide Therapy is expanding, and we're looking for passionate mental health
                professionals to join our team. We're currently hiring <strong>licensed clinicians</strong> and
                <strong> associate therapists</strong> who share our commitment to bridging compassion
                with clinical excellence.
              </p>
              <p>
                If you're driven by a desire to make a meaningful impact in integrated behavioral
                health and want to work in a supportive, growth-oriented environment, we'd love
                to hear from you.
              </p>
              <div className="careers-cta">
                <h3>Ready to Apply?</h3>
                <p>
                  Send your resume and a brief introduction to{' '}
                  <a href="mailto:info@soultidetherapy.com" className="email-link">
                    info@soultidetherapy.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
