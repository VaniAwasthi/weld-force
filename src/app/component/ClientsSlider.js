
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


export default function ClientsSlider() {
  return (

    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      breakpoints={{
        450: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
      navigation={true} modules={[Navigation]}
      className="clients-slider"
    >
      <SwiperSlide>
        <img src='../../assets/images/Kia-logo.png' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='../../assets/images/centerline-india.png' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='../../assets/images/tata-icon.png' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='../../assets/images/Ford-Logo.png' />
      </SwiperSlide>
      <SwiperSlide>  <img src='../../assets/images/toyota-logo.png' /></SwiperSlide>
      <SwiperSlide>  <img src='../../assets/images/fiat-car-logo.png' /></SwiperSlide>
      <SwiperSlide>
        <img src='../../assets/images/Kia-logo.png' />
      </SwiperSlide>
    </Swiper>
  )
}
