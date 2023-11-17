import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import workimg from '../image/work.png';
import Btn from "./Btn";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
function Work_detail() {
    return(
        <>
        <div className="project">
<img src= {workimg}/>
<h2>Bandu Khan</h2>
<a href="http://www.bundukhan.pk/" target='_blank'>Visit</a>
</div>
        </>
    )
}
export default function App() {
  return (
    <>
    <div className="container">
    <div className="row justify-content-center text-center gap-3">
    <div className="col-3 py-5 my-5">
        <h1>Recent Work</h1>
    </div>
    </div>
    <div className="row">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Work_detail/></SwiperSlide>
        <SwiperSlide><Work_detail/></SwiperSlide>
        <SwiperSlide><Work_detail/></SwiperSlide>
        <SwiperSlide><Work_detail/></SwiperSlide>
        <SwiperSlide><Work_detail/></SwiperSlide>
      </Swiper>
      </div>
      <div className='row mt-5 justify-content-center'> 
            <div className='col-2'>
                <Btn text=" Showcase"/>
                </div>
            </div>
      </div>
    </>
  );
}
