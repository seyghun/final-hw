import './App.css';
import './styles/reset.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navBar/navBar';
import Projects from './pages/Projects';
import Info from './pages/Info';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Project from './pages/Project';


function App() {
  return (
    <div className="App">
      <Router>
        <div id="container">
          <div id="container-inside">
            <div id="circle-small"></div>
            <div id="circle-medium"></div>
            <div id="circle-large"></div>
            <div id="circle-xlarge"></div>
            <div id="circle-xxlarge"></div>
          </div>
        </div>
        <Navbar />
        <Routes>
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/info' element={<Info />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
