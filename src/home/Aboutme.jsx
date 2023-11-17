import React from 'react'
import Experience from './Experience'
import Skill from './Skill'
import company from '../image/company.png';
import Btn from './Btn';
import esol from '../image/esol.png';
import school from '../image/school.png';
// import { NavLink } from "react-router-dom";
function Aboutme() {
  return (
    <>
       <div className='container'>
        <div className='row aboutme'>
            <div className='col-lg-6 d-flex align-items-center'>
              <div className='experience'>
                <span>05</span>
                <p>Year of experience</p>
                <div>
                  <p>100%</p>
                  <span><h6>Client</h6> <h6>Subcription</h6> </span>
                </div>
              </div>
            </div>
            <div className='col-lg-6 aboutme-text'>
          <h1>About Me</h1>
          <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to a typeface without graphic design, Lorem ipsum is a placeholder text commonly used to a Lorem ipsum is a typeface without relying on meaningful content.</p>
          <div className='row pt-5 justify-content-center'>
         <Skill skillName='JavaScript' experience="90"/>
          <Skill skillName='React JS' experience="50"/>
         <Skill skillName='Node JS' experience="70"/>
         <Skill skillName='Express JS' experience="80"/>
         <Skill skillName='MongoDB' experience="87"/>
         <Skill skillName='Photoshop' experience="67"/> 
         </div>
         <div className='d-flex justify-content-center'> 
         <Btn text='More'/>
         
         {/* <Routes>
  <Route path='/' element={<><Home/></>} /> 
  <Route path='/about' element={<><About/></>} />
  <Route path='/portfolio' element={<><Portfolio/></>} /> 
  <Route path='/hireme' element={<><Hireme/></>} /> 
  <Route path='/cv' element={<><Cv/></>}/>
  <Route path='/skill' element={<><Skills/></>}/>
  <Route path='/contect' element={<><Contect/></>}/> 
  </Routes> */}



          </div>         
            </div>
        </div>
        {/* experence */}
        <div className='row work'>
        <div className='col-md-4'>
          <h1>Work Experience</h1>
        </div>
          <Experience date='2022 - Present' heading='Associate Software Engineer' text='Frontend, Backend and Wordpress' siteLink='https://codeavour.com/' image={company}/>
          <Experience date='2020 -22' heading='Virtual Assistant' text='Product Hunting, store mange, Public dealing' siteLink='https://www.e-solutionsinc.com/' image={esol}/>
          <Experience date='2018 - 20' heading='Teacher' text='Teaches Math and Computer' siteLink='https://www.thepunjabschool.edu.pk/' image={school}/>
        </div>
       </div>
    </>
  )
}

export default Aboutme