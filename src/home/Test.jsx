import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import client from '../image/client.png';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Navigation } from "swiper";
function Slide() {
    return(
        <>
            <div className="row slide">
                <div className="col-md-6 slide-img">
                  <img src={client}/>
                  <h2>Ahmad Hassan </h2>
                  <p>Web design</p>
                </div>
                <div className="col-md-6 slide-text">
                  <div className="">
                    <h1>hello</h1>
                    <p>"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."</p>
                  </div>
                </div>
            </div>
        </>
    )
}
export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Slide/></SwiperSlide>
       <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide> 
      </Swiper>
    </>
  );
}
