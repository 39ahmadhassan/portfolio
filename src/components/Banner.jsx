import React from 'react';
import Btn from './Btn';
import banner from '../assets/image/ba.jpg';
function Banner() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='banner col-lg-6'>
            <h2>
              &#8212;&#8212;&#8212;
              {/* <HorizontalRuleIcon /><HorizontalRuleIcon /> */}
              <span>Hello</span>
            </h2>
            <h1>I'M Ahmad Hassan</h1>
            <p>Software Engineer and MERN Stack Developer.</p>
            <div className='d-flex gap-3'>
              <Btn text='Hire Me' />
              <Btn text='Resume' />
            </div>
          </div>
          <div className='col-lg-6 banner-img'>
            <a href='https://react.dev/learn' target='_blank' rel='noopener noreferrer' className='skill-one'>
              {/* <img src={skill_one}/> */}
            </a>
            <a href='https://nodejs.dev/en/learn/' target='_blank' rel='noopener noreferrer' className='skill-two'></a>
            <a href='https://www.mongodb.com/docs/' target='_blank' rel='noopener noreferrer' className='skill-three'></a>
            {/* <div className='skill-four'>
              <GppGoodIcon />
              <p>
                <span>5+</span>
                <br />
                Projects Completed
              </p>
            </div> */}
            <img src={banner} alt='Banner' />
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;