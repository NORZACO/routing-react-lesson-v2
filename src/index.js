import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NoPage from "./pages/NoPage"
// import './static/css/index.css';
import './static/css/header.css';
import Cover from "./App"
import Vans from './pages/Vans';
import PersonDetails from './pages/DetailsPage';
// import Footer from './pages/Footer';
// import Heroes from './pages/Heroes';

import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
// import HostLayerout from './components/HostLayerout';
// import Header from './pages/Header';

import LayOut from "./components/LayOut"
import Dashboard from './pages/Host/Dashboard';


import "./datamocks/server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut />}>
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/about" element={<About />} />
          <Route path="/persons" element={<Vans />} />
          <Route path="/persons/:id" element={<PersonDetails />} />

          <Route path="/host" element={<Dashboard />} >
            <Route path="/host/reviews" element={<Reviews />} />
            <Route path="/host/income" element={<Income />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);