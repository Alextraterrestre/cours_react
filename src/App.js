import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/portfolio" element={ <Portfolio /> }/>
          <Route path="/contact" element={ <Contact /> }/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
  }

export default App;
