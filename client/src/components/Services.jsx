import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Individual Therapy',
      description: 'One-on-one sessions tailored to your personal needs, focusing on anxiety, depression, trauma, and personal growth.',
      features: ['50-minute sessions', 'Personalized treatment plans', 'Evidence-based approaches']
    },
    {
      title: 'Couples Therapy',
      description: 'Strengthen your relationship through improved communication, conflict resolution, and emotional connection.',
      features: ['Joint sessions', 'Communication skills', 'Relationship building']
    },
    {
      title: 'Family Therapy',
      description: 'Navigate family dynamics and improve relationships between family members through guided therapeutic support.',
      features: ['Family sessions', 'Conflict mediation', 'Healthy boundaries']
    },
    {
      title: 'Online Therapy',
      description: 'Access quality therapy from the comfort of your home through secure video sessions.',
      features: ['Flexible scheduling', 'Secure platform', 'Same quality care']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p className="services-intro">
            Comprehensive mental health support tailored to meet you where you are
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
