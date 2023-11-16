import React from 'react';
import Banner from '../components/Banner'
import Aboutme from '../components/Aboutme'
import Service from '../components/Service'
import Work from '../components/Work'
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