import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <nav>
          <div className="wrapper">
            <div className="nav-wrapper">
              <Link to="/" className="logo">
                <img src={logo} alt="Falcones Capital" className="logo-img" />
                <span>Falcones Capital</span>
              </Link>
              <ul className="menu">
                <li><Link to="/" className={isActive('/')}>Home</Link></li>
                <li><Link to="/challenges" className={isActive('/challenges')}>Challenges</Link></li>
                <li><Link to="/trading-rules" className={isActive('/trading-rules')}>Trading Rules</Link></li>
                <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>
                <li><Link to="/faq" className={isActive('/faq')}>FAQs</Link></li>
                <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
              </ul>
              <div className="nav-buttons">
                <a href="https://app.falcones-capital.com/login" className="button border-btn">Dashboard</a>
                <a href="https://app.falcones-capital.com/register" className="button blue-btn">Sign Up</a>
              </div>
              <button className="hamburger" onClick={() => setMenuOpen(true)}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="side-menu-top">
          <Link to="/" className="logo">
            <img src={logo} alt="Falcones Capital" className="logo-img" />
            <span>Falcones Capital</span>
          </Link>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="side-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/challenges">Challenges</Link></li>
          <li><Link to="/trading-rules">Trading Rules</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="side-buttons">
          <a href="https://app.falcones-capital.com/login" className="button border-btn wide-btn">Dashboard</a>
          <a href="https://app.falcones-capital.com/register" className="button blue-btn wide-btn">Sign Up</a>
        </div>
      </div>
    </>
  );
}

export default Header;
