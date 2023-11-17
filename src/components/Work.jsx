// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import desktop_work from '../assets/image/desktop_work.jpg';
import work_mobile from '../assets/image/work_mobile.png'
import Btn from "./Btn";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
function WorkDetail(props) {
  return (
    <>
    <a href={props.url} target="_blank">
    <div className="project">
      <div className="project_data">
        <div className="desktop"><img src={props.desktop} /></div>
        <div className="mobile"><img src={props.mobile} /></div>    
      </div>
      <h3>{props.title}</h3>
      <span>view site</span>
    </div>
    </a>
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
            <SwiperSlide><WorkDetail title="burger shop" url="https://www.youtube.com/" mobile={work_mobile} desktop={desktop_work}/></SwiperSlide>
            <SwiperSlide><WorkDetail title="burger shop" url="https://www.youtube.com/" mobile={work_mobile} desktop={desktop_work}/></SwiperSlide>
            <SwiperSlide><WorkDetail title="burger shop" url="https://www.youtube.com/" mobile={work_mobile} desktop={desktop_work}/></SwiperSlide>
            <SwiperSlide><WorkDetail title="burger shop" url="https://www.youtube.com/" mobile={work_mobile} desktop={desktop_work}/></SwiperSlide>
            <SwiperSlide><WorkDetail title="burger shop" url="https://www.youtube.com/" mobile={work_mobile} desktop={desktop_work}/></SwiperSlide>
          </Swiper>
        </div>
        <div className='row mt-5 justify-content-center'>
          <div className='col-2'>
            <Btn text=" Showcase" />
          </div>
        </div>
      </div>
    </>
  );
}
