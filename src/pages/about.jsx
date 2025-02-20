import React from 'react';
import img from '@i/img1.jpg'
function About() {
  return (
    <section className="about">
      <h2 className="about-title">About Us</h2>
      <div className="about-container">
        <div className="about-text">
          <h3>Welcome to Nazir travel</h3>
          <p>
          Nazir travel is your trusted partner in exploring the world. With years of experience in the travel industry, we specialize in creating unforgettable journeys tailored to your needs. Whether it’s a relaxing beach getaway or an adventurous mountain trek, we’ve got you covered.
          </p>
          <p>
            Our mission is to provide exceptional service, affordable prices, and a seamless booking experience. Join thousands of happy travelers who have discovered the world with us!
          </p>
        </div>
        <div className="about-image">
          <img
            src={img}
            alt="TravelX Team"
            className="image"
          />
        </div>
      </div>
      <div className="about-stats">
        <div className="stat-item">
          <h4>10+</h4>
          <p>Years of Experience</p>
        </div>
        <div className="stat-item">
          <h4>50K+</h4>
          <p>Happy Travelers</p>
        </div>
        <div className="stat-item">
          <h4>100+</h4>
          <p>Destinations</p>
        </div>
      </div>
    </section>
  );
}

export default About;