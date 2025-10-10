import React, { useEffect } from 'react';
import './BookingWidget.css';

const BookingWidget = ({ isOpen, onClose }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleProceedToBooking = () => {
    window.open('https://ashley-sellers.clientsecure.me', '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="booking-widget-overlay" onClick={onClose}>
      <div className="booking-widget-container" onClick={(e) => e.stopPropagation()}>
        <div className="booking-widget-header">
          <h2>Schedule Your Appointment</h2>
          <button
            className="booking-widget-close"
            onClick={onClose}
            aria-label="Close booking"
          >
            ×
          </button>
        </div>
        <div className="booking-widget-content">
          <div className="booking-info">
            <div className="booking-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3>You'll be redirected to our secure booking system</h3>
            <p>
              Our booking system is powered by Simple Practice, a secure HIPAA-compliant platform.
              You'll be able to:
            </p>
            <ul className="booking-features">
              <li>View available appointment times</li>
              <li>Select a time that works best for you</li>
              <li>Complete your booking securely</li>
              <li>Receive confirmation via email</li>
            </ul>
            <div className="booking-actions">
              <button className="btn btn-primary btn-large" onClick={handleProceedToBooking}>
                Continue to Booking
              </button>
              <button className="btn btn-outline btn-large" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
