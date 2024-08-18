import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Counter from './components/Counter';
import Aboutme from './components/Aboutme';
import Myskills from './components/Myskills';
import Services from './components/Services';
import Haveinmind from './components/Haveinmind';
import Ourprojects from './components/Ourprojects';
import Whatclientsay from './components/Whatclientsay';
import Ourblog from './components/Ourblog';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <>
      <Banner />
      <Aboutme />
      <Myskills />
      <Services />
      <Ourprojects />
      <Counter />
      <Haveinmind />
      <Whatclientsay />
      <Ourblog />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
