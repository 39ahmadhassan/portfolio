import React from 'react'
import Btn from './Btn';
import banner from '../image/ba.jpg'
import GppGoodIcon from '@mui/icons-material/GppGood';
function Banner() {
  return (
    <>
      <div className='container '>
        <div className='row '>
            <div className='banner col-lg-6'>
                <h2> &#8212;&#8212;&#8212;
                {/* <HorizontalRuleIcon /><HorizontalRuleIcon /> */}
                <span>Hello</span></h2>
                <h1>I'M Ahmad Hassan</h1>
                <p>Software Engneer and MERN Stack Developer.</p>
               <div className='d-flex gap-3'>
                <Btn text='Hire Me'/><Btn text='Resume'/>
               </div>
            </div>
            <div className='col-lg-6 banner-img'>
            <div className='skill-one'>
              {/* <img src={skill_one}/> */}
            </div>
           <div className='skill-two'></div>
           <div className='skill-three'></div>
                 <div className='skill-four'>
                 <GppGoodIcon/>
                  <p><span>200+</span><br/>Projects Completes</p>
                 </div>
              <img src={banner}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner