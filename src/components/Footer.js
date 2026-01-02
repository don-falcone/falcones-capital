import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-cols">
          <div className="footer-about">
            <Link to="/" className="logo">
              <img src={logo} alt="Falcones Capital" className="logo-img" />
              <span>Falcones Capital</span>
            </Link>
            <p>Built by traders for traders. Access simulated trading capital up to $300,000.</p>
            <div className="socials">
              <a href="#"><i className="fab fa-discord"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-menu">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/challenges">Buy Challenge</Link></li>
              <li><Link to="/trading-rules">Trading Rules</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Risk Disclosure</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4>Support</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="mailto:support@falcones-capital.com">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 Falcones Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
