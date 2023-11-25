import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Project from './pages/Project';
import Projectdetail from './pages/Projectdetail';
import Faq from './pages/Faq';
import Four from './pages/Four';
import Contact from './pages/Contact';
import './components/assets/css/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='service' element={ <Service/> }/>
      <Route path='blog' element={ <Blog/> }/>
      <Route path='about' element={ <About/> }/>
      <Route path='project' element={ <Project/> }/>
      <Route path='projectdetail' element={ <Projectdetail/> }/>
      <Route path='faq' element={ <Faq/> }/>
      <Route path='*' element={ <Four/> }/>
      <Route path='contact' element={ <Contact/> }/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
