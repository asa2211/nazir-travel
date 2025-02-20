import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Pagination olib tashlandi
import "swiper/css";
import "swiper/css/navigation";
import { tourPackages } from "../data";

const TourSlider = () => {
  const navigate = useNavigate();

  const handleTourClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="tour-slider">
      <h2 className="title">Tours</h2>
      <Swiper
        modules={[Navigation]} // Pagination olib tashlandi
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {tourPackages.map((tour) => (
          <SwiperSlide key={tour.id} onClick={() => handleTourClick(tour.id)}>
            <div className="tour-card">
              <img src={tour.img} alt={tour.name} />
              <h3>{tour.name}</h3>
              <p>{tour.location}</p>
              <span className="price">{tour.price}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TourSlider;