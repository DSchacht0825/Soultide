import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const headingRef = useScrollAnimation('slide-in-left');
  const introRef = useScrollAnimation('slide-in-right');
  const quoteRef = useScrollAnimation('scale-in');

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 ref={headingRef}>Our Vision & Mission</h2>
            <p className="about-intro" ref={introRef}>
              Bridging compassion and clinical excellence to integrate behavioral health into every stage of care.
            </p>
            <p>
              Soul Tide Therapy was founded with a mission to bridge the gap between traditional
              psychotherapy and integrated healthcare systems. We believe healing is not simply
              the absence of illness, but the presence of connection, dignity, and purpose.
            </p>
            <p>
              Our vision is to transform how behavioral health is viewed and delivered — making
              emotional wellness a cornerstone of every care plan. We provide care that is both
              compassionate and structured, creating a space where empathy, accountability, and
              growth coexist to help individuals rediscover resilience and balance.
            </p>
            <div className="about-quote" ref={quoteRef}>
              <p>"Healing requires both empathy and structure — it's about being seen, supported, and understood."</p>
            </div>
            <div className="about-values">
              <div className="value-item fade-in-up stagger-1">
                <h3>Compassionate & Structured</h3>
                <p>We combine empathy with evidence-based approaches to create meaningful therapeutic outcomes.</p>
              </div>
              <div className="value-item fade-in-up stagger-2">
                <h3>Integrated Care</h3>
                <p>Behavioral health support seamlessly woven into medical and post-acute care systems.</p>
              </div>
              <div className="value-item fade-in-up stagger-3">
                <h3>Client-Centered</h3>
                <p>Meeting clients where they are in their journey, with individualized care plans designed for their unique needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
