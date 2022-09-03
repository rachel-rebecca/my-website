import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Homepage from './components/Homepage.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Links from "./components/Links.js";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div className="App">
    <Header/>
    
     {/* <Homepage/> */}
     {/* <Footer/>
      <Contact/> */}
      {/* <BrowserRouter> */}
     
      {/* <Routes>
            <Route path="/" element={<App />}>
            <Route path="/links" element={<Links />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/experience" element={<Experience />}/>
            </Route>       
      </Routes>
             */}
        {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
