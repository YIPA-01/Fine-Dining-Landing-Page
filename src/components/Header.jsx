import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="noma-header">
        <nav className="noma-nav">
          <Link to="/" className="noma-logo">
          Restaurant Reda
          </Link>
          
          <ul className="noma-nav-links">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`noma-nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="noma-hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      
      {/* Mobile menu */}
      <div className={`noma-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="noma-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="/reservation"
          className="noma-mobile-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Reservations
        </Link>
      </div>
    </>
  );
};

export default Header; 