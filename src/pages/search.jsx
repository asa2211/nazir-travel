import React, { useState } from "react";
import { tourPackages } from "../data";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayResults, setDisplayResults] = useState(false);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const navigate = useNavigate();
  const handleTourClick = (id) => {
    navigate(`/product/${id}`);
  };
  const handleSearch = () => {
    if (searchTerm.length >= 3) {
      const results = tourPackages.filter((tour) =>
        tour.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPackages(results);
      setDisplayResults(true);
    } else {
      setFilteredPackages([]);
      setDisplayResults(false);
    }
  };

  return (
    <div className="p-4">
      <div className="search">
      <input
        type="text"
        placeholder="Enter at least 3 letters to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
      />
      <button
        onClick={handleSearch}
        className="btn"
      >
        Search
      </button>
      </div>
      <div className="tour-grid" >
        {displayResults &&
          filteredPackages.map((tour) => (
            <div key={tour.id} className="tour-cards" onClick={() => handleTourClick(tour.id)}>
              <img src={tour.img} alt="" className="image" />
              <h2 className="title">{tour.name}</h2>
              <p className="loc">Location: {tour.location}</p>
              <p className="price">Price: ${tour.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
