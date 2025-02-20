import React from "react";
import { Link } from "react-router-dom";
import { tourPackages } from "../data";

const Tourpackages = () => {
  return (
    <div className="product-list">
      <div className="product-list1">
      {tourPackages.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.img} alt="" className="image2" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`} className="details-btn">
            Batafsil
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Tourpackages;