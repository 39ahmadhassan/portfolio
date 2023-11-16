import './App.css';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Hireme from './pages/Hireme';
import Skill from './pages/Skill';
import Getintouch from './pages/Getintouch';
import Bar from './components/Bar';
import Footer from './components/Footer';
function App() {
  return (
    <>
     <Bar/> 
     <Routes>
      <Route path= '/' element ={<><Home/></>} />
      <Route path= '/about' element ={<><About/></>} />
      <Route path= '/portfolio' element ={<> <Portfolio/> </>} />
      <Route path= '/skill' element ={<> <Skill/> </>} />
      <Route path= '/getintouch' element ={<> <Getintouch/> </>} />
      <Route path= '/portfolio' element ={<> <Portfolio/> </>} />
      <Route path= '/hireme' element ={<> <Hireme/> </>} />
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
