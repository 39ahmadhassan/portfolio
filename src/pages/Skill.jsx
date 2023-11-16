import React from 'react';
import Skills from '../components/Skills'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Analytics from '../components/Analytics';
const coreSkill = [
  {name: 'JavaScript', percentage: 60},
  {name: 'React JS', percentage: 50},
  {name: 'Node JS', percentage: 40},
  {name: 'Express JS', percentage: 40},
  {name: 'MongoDB', percentage: 40},
];
const otherSkill = [
  {name: 'HTML', percentage: 100},
  {name: 'CSS', percentage: 100},
  {name: 'Bootstrap', percentage: 100},
  {name: 'Material UI', percentage: 80},
  {name: 'C/C++', percentage: 70},
  {name: 'OOP', percentage: 40},
  {name: 'DSA', percentage: 60},
  {name: 'Database', percentage: 90},
  {name: 'Photoshop', percentage: 70},
  {name: 'WordPress', percentage: 80},
  {name: 'Mathematics', percentage: 80},
];
function Skill() {
  return (
    <>
    <div className='container'>
    <div className='row'>
      <h1 className='text-center my-5'>Our Core Skills!</h1>
    </div>
      <div className='row'>
        <div className='col-md-6'>            
          <div className='row d-flex align-items-center justify-content-around py-5'>
          <Skills skillName='JavaScript' experience="60"/>
          <Skills skillName='React JS' experience="50"/>
          <Skills skillName='Node JS' experience="40"/>
          <Skills skillName='Express JS' experience="40"/>
          <Skills skillName='MongoDB' experience="40"/>
          <Skills skillName='PHP' experience="50"/>
          </div>
        </div>
        <div className='col-md-6'>
        <div className='p-5'>
        <h5>JavaScript</h5>
        <ProgressBar striped variant="info" now={60} /><br/>
        <h5>React JS</h5>
        <ProgressBar striped variant="warning" now={50} /><br/>
        <h5>Node JS</h5>
        <ProgressBar striped variant="secondary" now={40} /><br/>
        <h5>Express JS</h5>
        <ProgressBar striped variant="danger" now={40} /><br/>
        <h5>MongoDB</h5>
        <ProgressBar striped variant="success" now={40} /><br/>
        </div>
        </div>
      </div>
    </div>
    <h1 className='text-center'>Core Skill Graph</h1>
    <Analytics data ={coreSkill} />
    <div className='container'>
    <div className='row'>
      <h1 className='text-center my-5'>Other Skills</h1>
    </div>
      <div className='row'>
        <div className='col-md-6'>            
          <div className='row d-flex align-items-center justify-content-around py-5'>
          <Skills skillName='HTML' experience="100"/>
          <Skills skillName='CSS' experience="100"/>
          <Skills skillName='Bootstrap' experience="100"/>
          <Skills skillName='Material UI' experience="80"/>
          <Skills skillName='C/C++' experience="70"/>
          <Skills skillName='OOP' experience="40"/>
          <Skills skillName='DSA' experience="60"/>
          <Skills skillName='Database' experience="90"/>
          <Skills skillName='Photoshop' experience="70"/>
          <Skills skillName='Wordpress' experience="80"/>
          <Skills skillName='Methematics' experience="80"/>
          </div>
        </div>
        <div className='col-md-6'>
        <div className='p-5'>
        <h5>HTML</h5>
        <ProgressBar striped variant="info" now={100} /><br/>
        <h5>CSS</h5>
        <ProgressBar striped variant="warning" now={100} /><br/>
        <h5>Bootstrap</h5>
        <ProgressBar striped variant="secondary" now={100} /><br/>
        <h5>Material UI</h5>
        <ProgressBar striped variant="danger" now={80} /><br/>
        <h5>C/C++</h5>
        <ProgressBar striped variant="success" now={70} /><br/>
        <h5>OOP</h5>
        <ProgressBar striped variant="info" now={40} /><br/>
        <h5>DSA</h5>
        <ProgressBar striped variant="warning" now={60} /><br/>
        <h5>Database</h5>
        <ProgressBar striped variant="secondary" now={90} /><br/>
        <h5>Photoshop</h5>
        <ProgressBar striped variant="danger" now={70} /><br/>
        <h5>Wordpress</h5>
        <ProgressBar striped variant="success" now={80} /><br/>
        <h5>Methematics</h5>
        <ProgressBar striped variant="info" now={80} /><br/>
        </div>
        </div>
      </div>
    </div>
    <h1 className='text-center'>Other Graph</h1>
    <Analytics data ={otherSkill} />
    </>
  )
}
export default Skill;
//export { StripedExample};