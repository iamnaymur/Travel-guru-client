/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination } from "swiper";
const Slider = ({ places }) => {
  // const { id, name, description, image_url } = place;
  // const placeDetail = () => {
  //   places.find((detail) => console.log(detail.id));
  // };

  console.log(places);
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {places.map((place) => (
          <SwiperSlide className="d-flex justify-content-between">
            <div>
              <p>Card details</p>
            </div>
            <div className="relative">
              <img
                className="rounded"
                style={{ width: "300px", height: "450px" }}
                src={place.image_url}
                alt=""
              />
              <div className="position-absolute top-50 ms-5 ">
                <p className="text-white fs-4">{place.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
