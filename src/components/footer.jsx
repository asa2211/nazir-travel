// src/components/Footer.jsx
import React from 'react';
import { routes } from '../router/routes';
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sayt Haqida */}
        <div className="footer-section about">
          <h3>Nazir travel</h3>
          <p>
            Your trusted travel agency for unforgettable adventures. Explore the world with us!
          </p>
        </div>

        {/* Navigatsiya Havolalari */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
          {
                routes.filter((route)=>route.name).map((route,index)=><li key={index}><NavLink to={route.url}>{route.name}</NavLink></li>)
            }
          </ul>
        </div>

        {/* Aloqa Ma'lumotlari */}
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p><strong>Phone:</strong> +998 99 123 45 67</p>
          <p><strong>Email:</strong> info@nazir-travel.com</p>
          <p><strong>Address:</strong> 123 Travel St, Tashkent, Uzbekistan</p>
        </div>

        {/* Ijtimoiy Tarmoqlar */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Nazir travel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;