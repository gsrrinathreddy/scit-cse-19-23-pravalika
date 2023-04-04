import logo from './logo.svg';
import './App.css';
import INavbar from './Components/INavbar';
import { Routes,Route } from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Qualifications from './Pages/Qualifications';
import Skills from './Pages/Skills';
import Certifications from './Pages/Certifications';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contactme from './Pages/Contactme';
import Workshops from './Pages/Workshops';
import Hobbies from './Pages/Hobbies';


 function App() {
  return (
    <div className="App">
     <INavbar/> 
     <Routes>
      <Route path="/Aboutme" element ={<Aboutme/>}/>
      <Route path="/Qualifications" element ={<Qualifications/>}/>
      <Route path="/Skills" element ={<Skills/>}/>
      <Route path="/Certifications" element ={<Certifications/>}/>
      <Route path="/Experience" element ={<Experience/>}/>
      <Route path="/Projects" element ={<Projects/>}/>
      <Route path="/Contactme" element ={<Contactme/>}/>
      <Route path="/Workshops" element ={<Workshops/>}/>
      <Route path="/HObbies" element ={<Hobbies/>}/>


     </Routes>
    </div>
  );
}

export default App;
