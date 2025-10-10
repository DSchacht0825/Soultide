import React, { useState } from 'react';
import BookingWidget from './BookingWidget';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, submitting, success, error
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xgvnnnep', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-header">
            <h2>Get In Touch</h2>
            <p className="contact-intro">
              Ready to begin your journey? Schedule your appointment or reach out with questions
            </p>
          </div>
          <div className="booking-callout">
            <h3>Book Your Appointment Online</h3>
            <p>Schedule your session securely through our online booking system</p>
            <button className="btn btn-primary btn-booking" onClick={handleBooking}>
              Schedule an Appointment
            </button>
          </div>
          <div className="contact-form-container">
            <h3 className="form-title">Have Questions? Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="form-message success-message">
                Thank you for reaching out! We will get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-message error-message">
                Oops! There was an error sending your message. Please try again or email us directly.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                  disabled={submitStatus === 'submitting'}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitStatus === 'submitting'}
              >
                {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
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

export default Contact;
