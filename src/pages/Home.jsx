import React from 'react';
import Banner from '../components/Banner'
import Aboutme from '../components/Aboutme'
import Service from '../components/Service'
import People from '../components/People'
import '../assets/css/style.css';
function Home() {
  return (
    <>
        <Banner/>
        <Aboutme/>
        <Service/>
        {/* <Work/> */}
         <People/>
    </>
  )
}

export default Home