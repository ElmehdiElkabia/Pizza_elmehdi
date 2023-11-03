import React from "react";
import './Nav.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Liste from "../listePizza";
const Nav = () => {
  return (
    <section className="home" id="home">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={50}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Liste.map((Nav) => (
          <SwiperSlide className="swiper-slide slide">
            <div className="content">
              <span>our special dish</span>
              <h3>{Nav.title}</h3>
              <p>{Nav.desc}</p>
            </div>
            <div className="image">
              <img src={Nav.image01} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Nav;
