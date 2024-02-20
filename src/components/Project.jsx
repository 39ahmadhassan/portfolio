import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import project1 from './assets/images/project1.png'
const Project = () => {
  return (
    <div className="service_wrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5>|| &nbsp; &nbsp; awesome portfolio</h5>
            <h2>My Complete Projects</h2>
            {/* slider  */}
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
              slidesPerView={2} // Set the number of slides to display at once
              spaceBetween={20} // Adjust the space between slides
              breakpoints={{
                1300: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                280: {
                    slidesPerView: 1,
                },
            }}
            >
              <SwiperSlide className='pro_slide'>
                <div className='pro-img'>
                    <img src={project1} alt="" />
                </div>
                <div className='pro-heading'>
                    <h4>Custom Media Duplication | Diskcopy</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pro_slide'>
              <div className='pro-img'>
                    <img src={project1} alt="" />
                </div>
                <div className='pro-heading'>
                    <h4>Custom Media Duplication | Diskcopy</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide className='pro_slide'>
              <div className='pro-img'>
                    <img src={project1} alt="" />
                </div>
                <div className='pro-heading'>
                    <h4>Custom Media Duplication | Diskcopy</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;