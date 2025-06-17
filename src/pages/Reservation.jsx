import { useState } from 'react';
import { motion } from 'framer-motion';

const Reservation = () => {
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    experience: 'tasting',
    specialRequests: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const timeSlots = [
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const experiences = [
    {
      id: 'tasting',
      name: 'Seasonal Tasting Menu',
      description: 'A 12-course journey through our seasonal ingredients',
      price: '2,800 DKK',
      duration: '3-4 hours'
    },
    {
      id: 'vegetable',
      name: 'Vegetable Menu',
      description: 'Plant-focused tasting menu celebrating seasonal vegetables',
      price: '2,400 DKK',
      duration: '3 hours'
    },
    {
      id: 'wine',
      name: 'Wine Pairing Experience',
      description: 'Tasting menu with carefully selected wine pairings',
      price: '3,600 DKK',
      duration: '4 hours'
    },
    {
      id: 'chef',
      name: 'Chef\'s Table',
      description: 'Exclusive counter seating with kitchen interaction',
      price: '3,200 DKK',
      duration: '4 hours'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="noma-reservation-success">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="noma-success-content"
          >
            <div className="noma-success-icon">✓</div>
            <h1 className="noma-success-title">Reservation Confirmed</h1>
            <p className="noma-success-message">
              Thank you for your reservation request. We'll confirm your booking 
              within 24 hours and send you all the details via email.
            </p>
            <div className="noma-success-details">
              <div className="noma-success-detail">
                <strong>Date:</strong> {reservationData.date}
              </div>
              <div className="noma-success-detail">
                <strong>Time:</strong> {reservationData.time}
              </div>
              <div className="noma-success-detail">
                <strong>Guests:</strong> {reservationData.guests}
              </div>
              <div className="noma-success-detail">
                <strong>Experience:</strong> {experiences.find(exp => exp.id === reservationData.experience)?.name}
              </div>
            </div>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setReservationData({
                  date: '', time: '', guests: '2', name: '', email: '', 
                  phone: '', experience: 'tasting', specialRequests: ''
                });
              }}
              className="noma-success-button"
            >
              Make Another Reservation
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="noma-reservation-page">
      {/* Hero Section */}
      <section className="noma-reservation-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="noma-reservation-hero-content"
          >
            <h1 className="noma-reservation-title">Reserve Your Table</h1>
            <p className="noma-reservation-subtitle">
              Embark on a culinary journey that celebrates the seasons, 
              fermentation, and the finest ingredients from land and sea.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="noma-reservation-progress">
        <div className="container">
          <div className="noma-progress-bar">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`noma-progress-step ${currentStep >= step ? 'active' : ''}`}
              >
                <div className="noma-progress-circle">{step}</div>
                <span className="noma-progress-label">
                  {step === 1 ? 'Experience' : step === 2 ? 'Details' : 'Confirmation'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="noma-reservation-form-section">
        <div className="container">
          <form onSubmit={handleSubmit} className="noma-reservation-form">
            
            {/* Step 1: Experience Selection */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="noma-form-step"
              >
                <h2 className="noma-step-title">Choose Your Experience</h2>
                <div className="noma-experiences-grid">
                  {experiences.map((experience) => (
                    <div
                      key={experience.id}
                      className={`noma-experience-card ${
                        reservationData.experience === experience.id ? 'selected' : ''
                      }`}
                      onClick={() => setReservationData({
                        ...reservationData,
                        experience: experience.id
                      })}
                    >
                      <h3 className="noma-experience-name">{experience.name}</h3>
                      <p className="noma-experience-description">{experience.description}</p>
                      <div className="noma-experience-details">
                        <span className="noma-experience-price">{experience.price}</span>
                        <span className="noma-experience-duration">{experience.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="noma-form-row">
                  <div className="noma-form-group">
                    <label className="noma-form-label">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={reservationData.date}
                      onChange={handleInputChange}
                      className="noma-form-input"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className="noma-form-group">
                    <label className="noma-form-label">Time</label>
                    <select
                      name="time"
                      value={reservationData.time}
                      onChange={handleInputChange}
                      className="noma-form-select"
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div className="noma-form-group">
                    <label className="noma-form-label">Guests</label>
                    <select
                      name="guests"
                      value={reservationData.guests}
                      onChange={handleInputChange}
                      className="noma-form-select"
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button type="button" onClick={nextStep} className="noma-form-next">
                  Continue
                </button>
              </motion.div>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="noma-form-step"
              >
                <h2 className="noma-step-title">Your Details</h2>
                
                <div className="noma-form-row">
                  <div className="noma-form-group">
                    <label className="noma-form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={reservationData.name}
                      onChange={handleInputChange}
                      className="noma-form-input"
                      required
                    />
                  </div>

                  <div className="noma-form-group">
                    <label className="noma-form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={reservationData.email}
                      onChange={handleInputChange}
                      className="noma-form-input"
                      required
                    />
                  </div>
                </div>

                <div className="noma-form-group">
                  <label className="noma-form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={reservationData.phone}
                    onChange={handleInputChange}
                    className="noma-form-input"
                    required
                  />
                </div>

                <div className="noma-form-group">
                  <label className="noma-form-label">Special Requests or Dietary Requirements</label>
                  <textarea
                    name="specialRequests"
                    value={reservationData.specialRequests}
                    onChange={handleInputChange}
                    className="noma-form-textarea"
                    rows="4"
                    placeholder="Please let us know about any allergies, dietary restrictions, or special occasions..."
                  ></textarea>
                </div>

                <div className="noma-form-buttons">
                  <button type="button" onClick={prevStep} className="noma-form-back">
                    Back
                  </button>
                  <button type="button" onClick={nextStep} className="noma-form-next">
                    Review
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="noma-form-step"
              >
                <h2 className="noma-step-title">Confirm Your Reservation</h2>
                
                <div className="noma-reservation-summary">
                  <div className="noma-summary-section">
                    <h3>Experience Details</h3>
                    <div className="noma-summary-item">
                      <strong>{experiences.find(exp => exp.id === reservationData.experience)?.name}</strong>
                      <p>{experiences.find(exp => exp.id === reservationData.experience)?.description}</p>
                      <span className="noma-summary-price">
                        {experiences.find(exp => exp.id === reservationData.experience)?.price} per person
                      </span>
                    </div>
                  </div>

                  <div className="noma-summary-section">
                    <h3>Reservation Details</h3>
                    <div className="noma-summary-grid">
                      <div className="noma-summary-item">
                        <strong>Date:</strong> {reservationData.date}
                      </div>
                      <div className="noma-summary-item">
                        <strong>Time:</strong> {reservationData.time}
                      </div>
                      <div className="noma-summary-item">
                        <strong>Guests:</strong> {reservationData.guests}
                      </div>
                      <div className="noma-summary-item">
                        <strong>Name:</strong> {reservationData.name}
                      </div>
                    </div>
                  </div>

                  {reservationData.specialRequests && (
                    <div className="noma-summary-section">
                      <h3>Special Requests</h3>
                      <p>{reservationData.specialRequests}</p>
                    </div>
                  )}

                  <div className="noma-summary-total">
                    <div className="noma-total-line">
                      <span>Estimated Total:</span>
                      <strong>
                        {(parseInt(experiences.find(exp => exp.id === reservationData.experience)?.price.replace(/[^\d]/g, '')) * parseInt(reservationData.guests)).toLocaleString()} DKK
                      </strong>
                    </div>
                    <p className="noma-total-note">
                      Final pricing may vary based on wine pairings and additional selections
                    </p>
                  </div>
                </div>

                <div className="noma-form-buttons">
                  <button type="button" onClick={prevStep} className="noma-form-back">
                    Back
                  </button>
                  <button type="submit" className="noma-form-submit">
                    Confirm Reservation
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>

      {/* Information Section */}
      <section className="noma-reservation-info">
        <div className="container">
          <div className="noma-info-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="noma-info-card"
            >
              <h3>Cancellation Policy</h3>
              <p>
                Reservations can be cancelled up to 48 hours in advance. 
                Cancellations within 48 hours will incur a charge of 50% of the menu price.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="noma-info-card"
            >
              <h3>Dress Code</h3>
              <p>
                We encourage smart casual attire. While we don't require formal wear, 
                we ask that guests dress appropriately for the occasion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="noma-info-card"
            >
              <h3>Dietary Requirements</h3>
              <p>
                We accommodate most dietary restrictions with advance notice. 
                Please inform us of any allergies or preferences when booking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation; 