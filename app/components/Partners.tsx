import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { PARTNERS } from '../constants'
import Link from 'next/link'

export default function Partners() {
  return (
    <>
      <section className='pb-20'>
        <div className="main_container">
          <div className="pt-20 pb-10">
            <h2 className="font-secondFont text-center text-4xl">OUR PARTNERS</h2>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 8,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >



          {PARTNERS.map((link) => (
            <SwiperSlide>
              <img src={link.path} key={link.key} className='w-32' />
            </SwiperSlide>
          ))}

        </Swiper>

      </section>

    </>
  );
}
