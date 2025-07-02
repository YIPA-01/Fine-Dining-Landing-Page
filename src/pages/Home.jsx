import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Professional SVG Icons - Simplified for Noma style
const FineDiningIcon = () => (
  <svg className="noma-feature-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-5.51-5.51z"/>
  </svg>
);

const ChefIcon = () => (
  <svg className="noma-feature-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.5 1.5c-1.4 0-2.6.6-3.5 1.5-.4-.4-.9-.7-1.5-.8C6.1 1.9 5 2.9 5 4.2c0 .8.4 1.5 1 1.9-.6.9-1 2-1 3.1 0 3.3 2.7 6 6 6s6-2.7 6-6c0-1.1-.4-2.2-1-3.1.6-.4 1-1.1 1-1.9 0-1.3-1.1-2.3-2.5-2c-.6.1-1.1.4-1.5.8-.9-.9-2.1-1.5-3.5-1.5zm0 2c1.9 0 3.5 1.6 3.5 3.5S14.4 10.5 12.5 10.5 9 8.9 9 7s1.6-3.5 3.5-3.5zM6 16v6h2v-4h8v4h2v-6H6z"/>
  </svg>
);

const WineIcon = () => (
  <svg className="noma-feature-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 3v6c0 2.97 2.16 5.43 5 5.91V19H9v2h6v-2h-2v-4.09c2.84-.48 5-2.94 5-5.91V3H6zm2 2h8v4c0 2.21-1.79 4-4 4s-4-1.79-4-4V5z"/>
  </svg>
);

const StarIcon = () => (
  <svg className="noma-feature-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const CandleIcon = () => (
  <svg className="noma-feature-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.5 4c0-1.1.9-2 2-2s2 .9 2 2c0 .8-.4 1.5-1 1.9v.6c.6.4 1 1.1 1 1.9v1.1c2.3.8 4 3 4 5.5 0 3.3-2.7 6-6 6s-6-2.7-6-6c0-2.5 1.7-4.7 4-5.5V8.4c0-.8.4-1.5 1-1.9v-.6c-.6-.4-1-1.1-1-1.9zm2.5 2.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"/>
  </svg>
);

const MusicIcon = () => (
  <svg className="noma-feature-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
);

const ChampagneIcon = () => (
  <svg className="noma-feature-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.5 7L5.5 5l-.71.71L6.79 7.5H7.5zm8.5 0h.71l2-1.79L17.5 5l-2 2H15.5zm-4-4c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2zM6 9v2c0 2.97 2.16 5.43 5 5.91V19H9v2h6v-2h-2v-2.09c2.84-.48 5-2.94 5-5.91V9H6zm2 2h8v1c0 2.21-1.79 4-4 4s-4-1.79-4-4v-1z"/>
  </svg>
);

const DishIcon = () => (
  <svg className="noma-feature-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const Home = () => {
  const diningFeatures = [
    {
      icon: <FineDiningIcon />,
      title: 'Fine Dining',
      description: 'Exquisite culinary experiences crafted by master chefs',
    },
    {
      icon: <ChefIcon />,
      title: 'Expert Chefs',
      description: 'Award-winning chefs with years of culinary expertise',
    },
    {
      icon: <WineIcon />,
      title: 'Premium Wine',
      description: 'Carefully curated wine selection from around the world',
    },
    {
      icon: <StarIcon />,
      title: 'Michelin Quality',
      description: 'Restaurant-quality dishes with attention to every detail',
    },
    {
      icon: <CandleIcon />,
      title: 'Romantic Ambiance',
      description: 'Perfect atmosphere for special occasions and dates',
    },
    {
      icon: <MusicIcon />,
      title: 'Live Music',
      description: 'Enjoy live performances while you dine',
    },
    {
      icon: <ChampagneIcon />,
      title: 'Champagne Service',
      description: 'Celebrate with our premium champagne collection',
    },
    {
      icon: <DishIcon />,
      title: 'Signature Dishes',
      description: 'Unique recipes that define our culinary identity',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="noma-hero"
        style={{
          backgroundImage: 'url("/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg")',
        }}
      >
        <div className="noma-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="noma-hero-title"
          >
            la cuchina de mama
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="noma-hero-subtitle"
          >
            Experience the finest dining with our carefully crafted menu inspired by nature and tradition
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Link to="/reservation" className="noma-btn noma-btn-primary">
              Book a Table
            </Link>
            <Link to="/menu" className="noma-btn noma-btn-secondary">
              View Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="noma-features">
        <div className="container">
          <h2 className="noma-section-title" style={{ color: 'white', marginBottom: '6rem' }}>
            Why Choose Us
          </h2>
          
          <div className="noma-features-grid noma-scroll">
            {/* First set of items */}
            {diningFeatures.map((feature, index) => (
              <div key={`first-${index}`} className="noma-feature-card">
                {feature.icon}
                <h3 className="noma-feature-title">{feature.title}</h3>
                <p className="noma-feature-description">{feature.description}</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {diningFeatures.map((feature, index) => (
              <div key={`second-${index}`} className="noma-feature-card">
                {feature.icon}
                <h3 className="noma-feature-title">{feature.title}</h3>
                <p className="noma-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="noma-cta">
        <div className="container">
          <h2 className="noma-cta-title">Ready to Experience Fine Dining?</h2>
          <p className="noma-cta-subtitle">
            Book your table now and enjoy an unforgettable culinary journey crafted with passion and precision
          </p>
          <Link to="/reservation" className="noma-btn noma-btn-dark">
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 