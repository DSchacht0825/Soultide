import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Services.css';

const Services = () => {
  const headingRef = useScrollAnimation('slide-in-left');
  const card1Ref = useScrollAnimation('slide-in-left', 0.1);
  const card2Ref = useScrollAnimation('scale-in', 0.1);
  const card3Ref = useScrollAnimation('slide-in-right', 0.1);
  const card4Ref = useScrollAnimation('scale-in', 0.1);
  const emdrHeadingRef = useScrollAnimation('slide-in-left');
  const emdrIntroRef = useScrollAnimation('slide-in-right');

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
    },
    {
      title: 'EMDR Therapy',
      description: 'Eye Movement Desensitization and Reprocessing — an evidence-based therapy that helps the brain process difficult memories so they no longer carry the same emotional intensity.',
      features: ['Trauma processing', 'Anxiety & stress relief', 'Evidence-based approach', 'Lasting results']
    }
  ];

  const emdrDetails = [
    {
      title: 'What Is EMDR?',
      content: 'EMDR stands for Eye Movement Desensitization and Reprocessing. It is an evidence-based therapy originally developed to treat trauma and distressing life experiences. EMDR helps the brain process difficult memories that may feel "stuck," so they no longer carry the same emotional charge or intensity.'
    },
    {
      title: 'How Trauma Affects the Brain',
      content: 'When something overwhelming happens, the brain may not fully process the experience. Instead, the memory can become stored with strong emotions, body sensations, and beliefs about yourself (such as "I\'m not safe" or "I\'m not good enough"). These unprocessed memories can be triggered in the present, even when the danger is no longer there.'
    },
    {
      title: 'How EMDR Works',
      content: 'During EMDR, you will briefly focus on a memory while engaging in bilateral stimulation (such as guided eye movements, tapping, or tones). This stimulation helps both sides of the brain communicate, allowing the memory to be reprocessed in a more adaptive way. Rather than reliving the trauma, EMDR allows the memory to move from a place of emotional reactivity to one of perspective, integration, and resolution.'
    }
  ];

  const emdrHelps = [
    'Childhood trauma or neglect',
    'Single-incident trauma (accidents, medical events, loss)',
    'Anxiety, panic, or chronic stress',
    'Negative self-beliefs and shame',
    'Relationship patterns linked to past experiences'
  ];

  const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];

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

        {/* EMDR Detailed Section */}
        <div className="emdr-section">
          <div className="emdr-header">
            <h3 ref={emdrHeadingRef}>Understanding EMDR Therapy</h3>
            <p className="emdr-intro" ref={emdrIntroRef}>
              Our team is trained in EMDR therapy, offering this powerful evidence-based approach
              to help you process and heal from difficult experiences.
            </p>
          </div>

          <div className="emdr-cards">
            {emdrDetails.map((detail, index) => (
              <div key={index} className="emdr-card">
                <h4>{detail.title}</h4>
                <p>{detail.content}</p>
              </div>
            ))}
          </div>

          <div className="emdr-helps">
            <h4>What EMDR Can Help With</h4>
            <ul className="emdr-helps-list">
              {emdrHelps.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
