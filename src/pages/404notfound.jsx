// src/components/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <section className="not-found">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Page Not Found</h2>
      <p className="error-message">
        Oops! It seems like the page you're looking for doesn't exist or has been moved.
      </p>
      <button className="home-button" onClick={handleGoHome}>
        Go Back Home
      </button>
    </section>
  );
}

export default NotFound;