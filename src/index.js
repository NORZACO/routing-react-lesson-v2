import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NoPage from "./pages/NoPage"
// import './static/css/index.css';
import './static/css/header.css';
// import Cover from "./App"
import Vans from './pages/Vans';
import PersonDetails from './pages/DetailsPage';
import Footer from './pages/Footer';
import Heroes from './pages/Heroes';


function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/"> #MWAMUZISCODEV </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/cover">Cover</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/persons">Person</Link>      
        </nav>
      </header>
      < Heroes />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cover" element={<Cover />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/persons" element={<Vans />} />
        <Route path="/persons/:id" element={<PersonDetails />} />
        <Route path="*" element={<NoPage />} />
        {/* BROKEN LINK */}
        <Route path="/persons/*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);