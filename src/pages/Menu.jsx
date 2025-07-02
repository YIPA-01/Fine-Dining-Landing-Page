import { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const menuCategories = [
    'All',
    'Appetizers',
    'Mains',
    'Desserts',
    'Beverages',
    'Seasonal'
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Forest Floor Mushroom Consommé',
      category: 'Appetizers',
      description: 'Wild mushroom broth with fermented herbs and pine essence',
      ingredients: ['wild mushrooms', 'fermented herbs', 'pine oil', 'sea salt'],
      price: 'DKK 185',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&crop=center',
      seasonal: true
    },
    {
      id: 2,
      name: 'Cured Ocean Trout with Elderflower',
      category: 'Appetizers',
      description: 'House-cured trout with elderflower vinegar and wild greens',
      ingredients: ['ocean trout', 'elderflower vinegar', 'wild greens', 'sea buckthorn'],
      price: 'DKK 225',
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop&crop=center',
      seasonal: false
    },
    {
      id: 3,
      name: 'Aged Beef with Mushroom Garum',
      category: 'Mains',
      description: 'Dry-aged beef with fermented mushroom sauce and roasted vegetables',
      ingredients: ['aged beef', 'mushroom garum', 'root vegetables', 'wild herbs'],
      price: 'DKK 485',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop&crop=center',
      seasonal: false
    },
    {
      id: 4,
      name: 'Vegetable Garden Composition',
      category: 'Mains',
      description: 'Seasonal vegetables with fermented plant juices and edible flowers',
      ingredients: ['seasonal vegetables', 'plant juices', 'edible flowers', 'herb oil'],
      price: 'DKK 385',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&crop=center',
      seasonal: true
    },
    {
      id: 5,
      name: 'Wild Rose and Honey Parfait',
      category: 'Desserts',
      description: 'Frozen parfait with wild rose petals and raw honey',
      ingredients: ['wild rose', 'raw honey', 'cream', 'rose vinegar'],
      price: 'DKK 165',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop&crop=center',
      seasonal: true
    },
    {
      id: 6,
      name: 'Fermented Fruit and Grain',
      category: 'Desserts',
      description: 'Naturally fermented fruits with ancient grains and cultured cream',
      ingredients: ['fermented fruits', 'ancient grains', 'cultured cream', 'bee pollen'],
      price: 'DKK 145',
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop&crop=center',
      seasonal: false
    },
    {
      id: 7,
      name: 'Pine and Juniper Elixir',
      category: 'Beverages',
      description: 'House-made elixir with pine needles and juniper berries',
      ingredients: ['pine needles', 'juniper berries', 'spring water', 'wild honey'],
      price: 'DKK 95',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&crop=center',
      seasonal: true
    },

    {
      id: 9,
      name: 'Autumn Harvest Tasting',
      category: 'Seasonal',
      description: 'Seven-course exploration of autumn flavors and preservation techniques',
      ingredients: ['seasonal produce', 'fermented elements', 'wild ingredients', 'preserved items'],
      price: 'DKK 1,250',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center',
      seasonal: true
    },
    {
      id: 10,
      name: 'Spring Awakening Menu',
      category: 'Seasonal',
      description: 'Five-course celebration of spring\'s first wild ingredients',
      ingredients: ['spring shoots', 'wild flowers', 'young herbs', 'fresh saps'],
      price: 'DKK 950',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&crop=center',
      seasonal: true
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  return (
    <div className="noma-menu-page">
      {/* Header Section */}
      <section className="noma-menu-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="noma-menu-title"
          >
            Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="noma-menu-subtitle"
          >
            Our menu celebrates the seasons with ingredients foraged, fermented, and transformed 
            through time-honored techniques and modern innovation.
          </motion.p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="noma-menu-filters">
        <div className="container">
          <div className="noma-filter-grid">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`noma-filter-btn ${activeFilter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="noma-menu-grid-section">
        <div className="container">
          <motion.div 
            className="noma-menu-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="noma-menu-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="noma-menu-card-image">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="noma-menu-item-image"
                    loading="lazy"
                  />
                  {item.seasonal && (
                    <span className="noma-seasonal-badge">Seasonal</span>
                  )}
                </div>
                
                <div className="noma-menu-card-content">
                  <h3 className="noma-menu-item-title">{item.name}</h3>
                  <p className="noma-menu-item-description">{item.description}</p>
                  
                  <div className="noma-menu-ingredients">
                    {item.ingredients.map((ingredient, idx) => (
                      <span key={idx} className="noma-ingredient-tag">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                  
                  <div className="noma-menu-item-footer">
                    <span className="noma-menu-price">{item.price}</span>
                    <span className="noma-menu-category">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tasting Menu Section */}
      <section className="noma-tasting-section">
        <div className="container">
          <h2 className="noma-section-title">Tasting Experiences</h2>
          <div className="noma-tasting-grid">
            <div className="noma-tasting-card">
              <h3 className="noma-tasting-title">The Full Experience</h3>
              <p className="noma-tasting-description">
                A 12-course journey through our complete culinary philosophy, 
                featuring fermentation, foraging, and seasonal transformation.
              </p>
              <div className="noma-tasting-details">
                <span className="noma-tasting-price">DKK 2,500</span>
                <span className="noma-tasting-duration">3.5 hours</span>
              </div>
            </div>
            
            <div className="noma-tasting-card">
              <h3 className="noma-tasting-title">Vegetable Tasting</h3>
              <p className="noma-tasting-description">
                An 8-course exploration of vegetables in their most elevated forms, 
                showcasing the beauty of plant-based cuisine.
              </p>
              <div className="noma-tasting-details">
                <span className="noma-tasting-price">DKK 1,800</span>
                <span className="noma-tasting-duration">2.5 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Pairing Section */}
      <section className="noma-wine-section">
        <div className="container">
          <h2 className="noma-section-title">Wine & Beverage Pairings</h2>
          <p className="noma-wine-description">
            Our sommelier has carefully selected natural wines, fermented beverages, 
            and house-made elixirs to complement each dish in perfect harmony.
          </p>
          <div className="noma-wine-options">
            <div className="noma-wine-option">
              <h4>Classic Wine Pairing</h4>
              <span>DKK 1,200</span>
            </div>
            <div className="noma-wine-option">
              <h4>Natural Wine Selection</h4>
              <span>DKK 1,500</span>
            </div>
            <div className="noma-wine-option">
              <h4>Non-Alcoholic Pairing</h4>
              <span>DKK 650</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu; 