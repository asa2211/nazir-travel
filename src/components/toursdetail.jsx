// src/components/TourDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tourPackages } from '../data';


function TourDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = tourPackages.find((t) => t.id === parseInt(id));

  if (!tour) {
    return <div>Tour not found!</div>;
  }

  const handleOrderClick = () => {
    navigate(`/order/steps/${id}`);
  };

  return (
    <section className="tour-detail">
      <div className="tour-header">
        <img src={tour.img} alt={tour.name} className="tour-image" />
        <div className="tour-info">
          <h1 className="tour-title">{tour.name}</h1>
          <p className="tour-location">Location: {tour.location}</p>
          <p className="tour-price">Price: ${tour.price}</p>
          <button className="order-button" onClick={handleOrderClick}>
            Book Now
          </button>
        </div>
      </div>
      <div className="tour-description">
        <h2>About This Tour</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
}

export default TourDetail;