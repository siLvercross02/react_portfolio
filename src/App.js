import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Working from './components/About/WorkingExp';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
        <Header />
        <Banner />
        <About />
        <Working />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </Router>
  );
}

export default App;
