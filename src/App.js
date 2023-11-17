import './App.css';
import Home from './Home';
import {Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Allskill from './Allskill';
import First from './First';
import About from './About';
import Portfolio from './Portfolio';
import Hireme from './Hireme';
import Skill from './Skill';
import Getintouch from './Getintouch';
import Bar from './home/Bar';
import Footer from './home/Footer';
import Admin from './Admin';
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
      <Route path= '/hireme' element ={<> <Hireme/> </>} />
      <Route path= '/admin' element ={<> <Admin/> </>} />
     </Routes>
      <Footer/>
    </>
  );
}

export default App;
