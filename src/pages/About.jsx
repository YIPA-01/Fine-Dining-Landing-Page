import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Reda Yahyani',
      title: 'Chef & Creative Director',
      location: 'Morocco / Denmark',
      description: 'Born in Morocco and trained across Europe, Reda brings a unique perspective to Nordic cuisine, blending traditional techniques with innovative approaches to fermentation and foraging.'
    },
    {
      name: 'Lena Henriksen',
      title: 'Head of Operations',
      location: 'Denmark',
      description: 'With over a decade in fine dining management, Lena ensures every aspect of the restaurant runs with precision and warmth.'
    },
    {
      name: 'Thomas Nielsen',
      title: 'Fermentation Specialist',
      location: 'Denmark',
      description: 'Our resident scientist of flavor, Thomas leads our fermentation lab where we develop the unique ingredients that define our cuisine.'
    },
    {
      name: 'Sofia Andersson',
      title: 'Foraging Coordinator',
      location: 'Sweden / Denmark',
      description: 'Sofia connects us to the wild, sourcing the finest seasonal ingredients from forests, shores, and fields across Scandinavia.'
    }
  ];

  return (
    <div className="noma-about-page">
      {/* Hero Section - Clean and Minimal */}
      <section className="noma-about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="noma-about-hero-content"
          >
            <h1 className="noma-about-main-title">
              taste the seasons
            </h1>
            <p className="noma-about-welcome">
              welcome to our world of flavor
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Noma Projects Style */}
      <section className="noma-story-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="noma-story-content"
          >
            <p className="noma-story-intro">
              Everything we do starts by stepping into nature, and everything we share is produced by hand in our kitchen right here in Copenhagen.
            </p>
            <p className="noma-story-intro">
              We make it a point never to repeat ourselves.
            </p>
            <p className="noma-story-intro">
              Because we like to <strong>Try New Things</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Came to Be Section */}
      <section className="noma-origin-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="noma-origin-content"
          >
            <h2 className="noma-origin-title">how we came to be</h2>
            <div className="noma-origin-text">
              <p>
                Building on years of culinary innovation, Restaurant Reda was founded in 2018 to share ingredients from the past, present, and sometimes even future of Nordic cuisine: a place in Copenhagen where the team has an endless fascination with the idea that there is always more deliciousness out there, just waiting to be uncovered.
              </p>
              <p>
                While giving our guests new experiences to savor fills us with excitement, it's only part of what we do. Through our seasonal menus, fermentation laboratory, and foraging expeditions, Restaurant Reda hopes to generate the kind of knowledge and inspiration that helped us to realize that food just might be the most important thing we have.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - Clean Cards */}
      <section className="noma-philosophy-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="noma-philosophy-title"
          >
            our approach
          </motion.h2>
          
          <div className="noma-philosophy-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="noma-philosophy-card"
            >
              <h3>fermentation</h3>
              <p>Our laboratory transforms simple ingredients through time and patience, creating complex flavors that define our cuisine.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="noma-philosophy-card"
            >
              <h3>foraging</h3>
              <p>We step into nature to discover wild ingredients, bringing the essence of Scandinavian forests and shores to our kitchen.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="noma-philosophy-card"
            >
              <h3>seasonality</h3>
              <p>We honor the natural rhythm of seasons, crafting menus that celebrate the peak moments of each ingredient.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="noma-philosophy-card"
            >
              <h3>innovation</h3>
              <p>Tradition meets creativity as we push boundaries while respecting the fundamental principles of great cooking.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Noma Projects Style */}
      <section className="noma-team-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="noma-team-title"
          >
            our team
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="noma-team-description"
          >
            We're a closely knit team. We make everything we serve by hand in our kitchen, collaborating closely with local producers, foragers, and an extended family of friends who share our passion for exceptional food.
          </motion.p>
          
          <div className="noma-team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="noma-team-member"
              >
                <div className="noma-member-avatar">
                  <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="noma-member-info">
                  <h3 className="noma-member-name">{member.name}</h3>
                  <p className="noma-member-title">{member.title}</p>
                  <p className="noma-member-location">{member.location}</p>
                  <p className="noma-member-description">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Simple and Clean */}
      <section className="noma-values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="noma-values-content"
          >
            <h2 className="noma-values-title">what drives us</h2>
            <div className="noma-values-text">
              <p>
                We believe in the power of simplicity, the beauty of natural flavors, and the importance of connecting people through food. Every dish we create is a conversation between tradition and innovation, between the wild and the refined.
              </p>
              <p>
                Our commitment extends beyond the plate to our community, our environment, and our craft. We source responsibly, cook with intention, and serve with genuine hospitality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Noma Style */}
      <section className="noma-about-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="noma-cta-content"
          >
            <h2 className="noma-cta-title">experience our story</h2>
            <p className="noma-cta-description">
              Join us for a culinary journey that celebrates the seasons, honors tradition, and embraces the unexpected.
            </p>
            <div className="noma-cta-buttons">
              <Link to="/reservation" className="noma-btn noma-btn-primary">
                make a reservation
              </Link>
              <Link to="/menu" className="noma-btn noma-btn-secondary">
                explore our menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 