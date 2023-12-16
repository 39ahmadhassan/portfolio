import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import icon_one from './assets/images/ser_icon.png';
import icon_two from './assets/images/wordpress_icon.png'
import icon_three from './assets/images/social_icons.png'
const Ser = (props) => {
    return (
        <>
            <img src={props.img} alt="not-available" />
            <h4>{props.name}</h4>
            <ul>
                {
                    props.skills.map((skill, index) =>{
                       return <li key={index}>{skill}</li>;
                    })
                }
            </ul>
        </>
    );
}

const Services = () => {
    const frontendSkill = ["html","css","bootstrap","javascript","react.js"];
    const wordpressSkill = ["installation","themes customization","elementor pro","ACF","plugin customization"];
    const socialMedia = ["facebook","instagram", "twiter"];

    return (
        <div className="service_wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5>|| &nbsp; &nbsp; my services</h5>
                        <h2>service provide for my clients.</h2>
                        <Swiper watchSlidesProgress={true} className="mySwiper"
                            slidesPerView={3}
                            breakpoints={{
                                1300: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                280: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <Ser name="frontend development" img={icon_one} skills={frontendSkill} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Ser name="wordpress development" img={icon_two} skills={wordpressSkill} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Ser name="social media handling" img={icon_three} skills={socialMedia} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
