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
// Vans

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/"> #MWAMUZISCODEV </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/cover">Cover</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/cover" element={<Cover />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);