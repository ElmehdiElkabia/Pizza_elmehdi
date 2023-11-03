import React from 'react'
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import Reviews from '../listeReview';

const Review = () => {
  return (
    <section class="review" id="review">
      <h3 class="sub-heading">customer's review</h3>
      <h1 class="heading">what they say</h1>
      <Swiper
     slidesPerView={3}
     spaceBetween={20}
     pagination={{
       clickable: true,
     }}
     modules={[Pagination]}
     className="mySwiper"
    >
          {Reviews.map((review) => (
            <SwiperSlide className="swiper-slide slide" key={review.id}>
              <i class="fas fa-quote-right"></i>
              <div class="user">
                <img src={review.image01} alt="Pizza" />
                <div class="user-info">
                  <h3>{review.title}</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <p>{review.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};


export default Review;
