import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const Services = () => {
  const headingRef = useScrollAnimation('slide-in-left');
  const card1Ref = useScrollAnimation('slide-in-left', 0.1);
  const card2Ref = useScrollAnimation('scale-in', 0.1);
  const card3Ref = useScrollAnimation('slide-in-right', 0.1);
  const services = [
    {
      title: 'Facility-Based Behavioral Health',
      description: 'Delivering in-facility psychotherapy that enhances residents\' quality of life and proactively reduces rehospitalization rates through early intervention and coordinated care.',
      features: ['Skilled Nursing Facilities (SNFs)', 'Assisted Living Communities (ALFs)', 'Home Health organizations', 'Early intervention & coordinated care']
    },
    {
      title: 'Outpatient Clinical Services',
      description: 'In partnership with Dr. Jeffrey Raunig in Carlsbad, providing individualized, evidence-based care for clients of all ages seeking emotional balance and personal growth.',
      features: ['Individual therapy', 'Couples & family therapy', 'Evidence-based approaches', 'All ages welcome']
    },
    {
      title: 'Telehealth Therapy',
      description: 'Offering accessible, HIPAA-compliant virtual care across California, ensuring clients receive consistent, compassionate support wherever they are.',
      features: ['Accessible statewide', 'HIPAA-compliant platform', 'Flexible scheduling', 'Same quality care']
    }
  ];

  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 ref={headingRef}>Our Services</h2>
          <p className="services-intro">
            Comprehensive mental health support tailored to meet you where you are
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} ref={cardRefs[index]} className="service-card">
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
