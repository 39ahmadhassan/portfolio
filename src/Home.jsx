import React from 'react';
import Bar from './home/Bar';
import Banner from './home/Banner';
import Aboutme from './home/Aboutme';
import Footer from './home/Footer';
import Service from './home/Service';
import People from './home/People';
import Work from './home/Work';
import './scss/style.css';
function Home() {
  return (
    <>
        {/* <Bar/> */}
        <Banner/>
        <Aboutme/>
        <Service/>
        <Work/>
         <People/>
        {/* <Footer/>  */}
    </>
  )
}

export default Home