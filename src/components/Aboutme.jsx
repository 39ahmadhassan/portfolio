import React from 'react'
import Experience from './Experience'
// import Skills from './Skills'
import company from '../assets/image/company.png';
import Btn from './Btn';
import esol from '../assets/image/esol.png';
// import { NavLink } from "react-router-dom";
const Skills = (props) =>{
  return(
  <>
    <div className='col-4 skill'>
        <p>{props.experience}%</p>
        <span>{props.skillName}</span>
    </div>
    </>
  )
}
function Aboutme() {
  return (
    <>
       <div className='container'>
        <div className='row aboutme'>
            <div className='col-lg-6 d-flex align-items-center'>
              <div className='experience'>
                <span>01</span>
                <p>Year of experience</p>
                <div>
                  <p>90%</p>
                  <span><h6>Client</h6> <h6>Subcription</h6> </span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 aboutme-text'>
          <h1>About Me</h1>
          <p>I am a software enginner and work on web development frontend as well as backend. In development phase I used MERN Stack approach to developed a application. Here a skills that have good knowledge and stronge grip...</p>
          <div className='row pt-5 justify-content-center'>
         <Skills skillName='JavaScript' experience="70"/>
         <Skills skillName='React JS' experience="60"/>
         <Skills skillName='Node JS' experience="50"/>
         <Skills skillName='Express JS' experience="50"/>
         <Skills skillName='MongoDB' experience="50"/>
         <Skills skillName='Photoshop' experience="7"/> 
         </div>
         <div className='d-flex justify-content-center'> 
         <Btn text='More'/>
        </div>         
        </div>
        </div>
        {/* experence */}
        <div className='row work'>
        <div className='col-md-4'>
          <h1>Work Experience</h1>
        </div>
          <Experience date='2022 - Present' heading='Associate Software Engineer' text='HTML, CSS, Bootstrap , Javascript, React JS' siteLink='https://codeavour.com/' image={company}/>
          <Experience date='2020 -22' heading='Virtual Assistant' text='Product Hunting, store mange, Public dealing' siteLink='https://www.e-solutionsinc.com/' image={esol}/>
          {/* <Experience date='2018 - 20' heading='Teacher' text='Teaches Math and Computer' siteLink='https://www.thepunjabschool.edu.pk/' image={school}/> */}
        </div>
       </div>
    </>
  )
}

export default Aboutme