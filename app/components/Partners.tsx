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
import Image from 'next/image'

export default function Partners() {
  return (
    <>
      <section className='pb-20'>
        <div className="main_container">
          <div className="pt-20 pb-10">
            <h2 className="font-secondFont text-center text-4xl">OUR PARTNERS</h2>
          </div>
        </div>

        <div className='play whitespace-nowrap'>
          {PARTNERS.map((link) => (
            <div key={link.key} className='inline-block flex-1'>
              <Image src={link.path} width={160} height={160} key={link.key} alt='partners' />
            </div>
          ))}
        </div>

      </section>

    </>
  );
}
