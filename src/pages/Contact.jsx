import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      title: 'Location',
      details: [
        'Strandgade 93',
        '1401 Copenhagen K',
        'Denmark'
      ],
      icon: '📍'
    },
    {
      title: 'Reservations',
      details: [
        '+45 32 96 32 97',
        'reservations@restaurantreda.dk',
        'Open Tue-Sat'
      ],
      icon: '📞'
    },
    {
      title: 'Hours',
      details: [
        'Dinner: 18:00 - 24:00',
        'Closed Sunday & Monday',
        'Last seating: 21:30'
      ],
      icon: '🕐'
    },
    {
      title: 'Private Events',
      details: [
        'events@restaurantreda.dk',
        '+45 32 96 32 98',
        'Capacity: 12-40 guests'
      ],
      icon: '🎉'
    }
  ];

  return (
    <div className="noma-contact-page">
      {/* Hero Section */}
      <section className="noma-contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="noma-contact-hero-content"
          >
            <h1 className="noma-contact-title">Get in Touch</h1>
            <p className="noma-contact-subtitle">
              We'd love to hear from you. Whether you have questions about our menu, 
              want to make a reservation, or are interested in private dining, 
              we're here to help create your perfect culinary experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="noma-contact-info-section">
        <div className="container">
          <div className="noma-contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="noma-contact-info-card"
              >
                <div className="noma-contact-info-icon">{info.icon}</div>
                <h3 className="noma-contact-info-title">{info.title}</h3>
                <div className="noma-contact-info-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="noma-contact-form-section">
        <div className="container">
          <div className="noma-contact-form-container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="noma-contact-form-text"
            >
              <h2 className="noma-contact-form-title">Send us a Message</h2>
              <p className="noma-contact-form-description">
                Have a question or special request? We're always happy to discuss 
                how we can make your dining experience exceptional. Our team will 
                respond within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="noma-contact-form-wrapper"
            >
              {isSubmitted ? (
                <div className="noma-contact-success">
                  <div className="noma-contact-success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="noma-contact-form">
                  <div className="noma-form-group">
                    <label htmlFor="name" className="noma-form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="noma-form-input"
                      required
                    />
                  </div>

                  <div className="noma-form-group">
                    <label htmlFor="email" className="noma-form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="noma-form-input"
                      required
                    />
                  </div>

                  <div className="noma-form-group">
                    <label htmlFor="subject" className="noma-form-label">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="noma-form-select"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="private-event">Private Event</option>
                      <option value="dietary">Dietary Requirements</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="noma-form-group">
                    <label htmlFor="message" className="noma-form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="noma-form-textarea"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="noma-form-submit">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="noma-contact-map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="noma-contact-map-content"
          >
            <h2 className="noma-section-title">Find Us</h2>
            <p className="noma-contact-map-description">
              Located in the heart of Copenhagen, Restaurant Reda offers an intimate 
              dining experience in a beautifully restored historic building.
            </p>
            
            <div className="noma-contact-map-placeholder">
              <div className="noma-map-overlay">
                <div className="noma-map-pin">📍</div>
                <div className="noma-map-info">
                  <h4>Restaurant Reda</h4>
                  <p>Strandgade 93, Copenhagen</p>
                </div>
              </div>
            </div>

            <div className="noma-contact-directions">
              <div className="noma-direction-item">
                <strong>By Metro:</strong> Kongens Nytorv Station (5 min walk)
              </div>
              <div className="noma-direction-item">
                <strong>By Bus:</strong> Lines 1A, 2A, 26 to Holmens Kirke
              </div>
              <div className="noma-direction-item">
                <strong>Parking:</strong> Limited street parking available
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="noma-contact-newsletter">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="noma-newsletter-content"
          >
            <h2 className="noma-newsletter-title">Stay Connected</h2>
            <p className="noma-newsletter-description">
              Subscribe to our newsletter for exclusive updates on seasonal menus, 
              special events, and culinary insights from our kitchen.
            </p>
            <div className="noma-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="noma-newsletter-input"
              />
              <button className="noma-newsletter-button">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 