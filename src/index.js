import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './components/Homepage';
import Contact from './components/Contact.js';
import Links from "./components/Links.js";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
        <Route path="links" element={<Links />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="projects" element={<Projects />}/>
            <Route path="education" element={<Education />}/>
            <Route path="experience" element={<Experience />}/>
      </Route>
    </Routes>
  </BrowserRouter>
              <Footer/>
              </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
