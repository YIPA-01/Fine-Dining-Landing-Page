import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl text-black font-bold">la cuchina de mama</h3>
            <p className="text-gray-400">
              Experience the finest dining with our carefully crafted menu and exceptional service.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg text-black font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="text-gray-400 hover:text-white">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg text-black font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 mayhem street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@lacuchinademama.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg text-black font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: 10:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} la cuchina de mama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 