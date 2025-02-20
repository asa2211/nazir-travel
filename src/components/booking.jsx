// src/components/OrderSteps.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourPackages } from '../data';

function OrderSteps() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = tourPackages.find((t) => t.id === parseInt(id));
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    persons: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && formData.name && formData.email && formData.phone) {
      setStep(2);
    } else if (step === 2 && formData.date && formData.persons) {
      setStep(3);
    } else if (step === 3) {
      alert('Order confirmed! Details: ' + JSON.stringify({ ...formData, tour }));
      navigate('/');
    } else {
      alert('Please fill all fields');
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  if (!tour) {
    return <div>Tour not found!</div>;
  }

  return (
    <section className="order-steps">
      <h2 className="step-title">
        Step {step} of 3: {step === 1 ? 'Personal Information' : step === 2 ? 'Travel Details' : 'Confirm Booking'}
      </h2>
      <div className="form-container">
        {step === 1 && (
          <>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="form-group">
              <label htmlFor="date">Travel Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="persons">Number of Persons</label>
              <input
                type="number"
                id="persons"
                name="persons"
                value={formData.persons}
                onChange={handleChange}
                min="1"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <div className="summary">
            <h3>Tour: {tour.name}</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Travel Date:</strong> {formData.date}</p>
            <p><strong>Persons:</strong> {formData.persons}</p>
            <p><strong>Total Price:</strong> ${tour.price * formData.persons}</p>
          </div>
        )}

        <div className="button-group">
          {step > 1 && (
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
          )}
          <button className="next-button" onClick={handleNext}>
          {step === 3 ? 'Confirm Booking' : 'Next'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default OrderSteps;