import React from 'react';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css';
import './assets/css/animate.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Aboutme from './components/Aboutme';
import Myskills from './components/Myskills';
import Services from './components/Services';
import Ourprojects from './components/Ourprojects';
// import Counter from './components/Counter';
// import Haveinmind from './components/Haveinmind';
// import Whatclientsay from './components/Whatclientsay';
// import Ourblog from './components/Ourblog';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Banner />
      <Aboutme />
      <Myskills />
      <Services />
      <Ourprojects />
      <Contactus />
      <Footer />
      {/* <Whatclientsay />
      <Counter />
      <Haveinmind />
      <Ourblog /> */}
    </>
  );
}

export default App;
