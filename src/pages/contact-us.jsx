// src/components/ContactUs.jsx
import React from 'react';

function ContactUs() {
  return (
    <section className="contact-us">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-container">
        {/* Kontakt Ma'lumotlari */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Phone:</strong> +998 99 123 45 67</p>
          <p><strong>Email:</strong> info@travelx.com</p>
          <p><strong>Address:</strong> 123 Travel St, Tashkent, Uzbekistan</p>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>

        {/* Kontakt Formasi */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" rows="5"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Karta Qo‘shildi */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.848194316295!2d69.27972881527862!3d41.31115197927181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2b7f4b7e27%3A0x7e5f9f6e5b8e8f8e!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1677654321890!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactUs;