import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../src/pages/Members/Home"
import About from "./pages/Main/About"
import NoPage from "./pages/Main/NoPage"
// import './static/css/index.css';
import '../src/static/css/header.css';
// import Cover from "./App"
// import Persons from './pages/Persons';
import Persons from '../src/pages/Members/Persons';
import PersonDetails from '../src/pages/Members/DetailsPage';
import HostVansDetails from './pages/Host/HostVansDetails.jsx';
// import Footer from './pages/Footer';
// import Heroes from './pages/Heroes';
import Reviews from "./pages/Host/Reviews"
import Income from "./pages/Host/Income"
import HostLayerout from './components/HostLayerout';
// import Header from './pages/Header';
import LayOut from "./components/LayOut"
import Dashboard from './pages/Host/Dashboard';
import "./datamocks/server"
import HostVans from './pages/Host/HostVans';


import ProductDetails from './pages/Product/ProductDetails.jsx';
import ProductsReviews from './pages/Product/ProductsReviews.jsx';
import ProductsIncome from './pages/Product/ProductsIncome.jsx';
import ProductsDashboard from './pages/Product/ProductsDashboard.jsx';
import ProductsLayerout from './components/ProductsLayerout.jsx';
import ProductsPage from './pages/Product/ProductsPage.jsx';

import Products from './pages/Product/Products.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route path="*" element={<NoPage />} />
          <Route index element={<Home />} />
          {/* <Route path="/cover" element={<Cover />} /> */}
          <Route path="about" element={<About />} />

          <Route path='products' element={<Products />} />
          <Route path='persons' element={<Persons />}  /** PARENT */ />
          <Route index element={<Persons />} />
          <Route path="persons/:id" element={<PersonDetails />} />
          <Route path="products/:id" element={<ProductDetails />} />

          <Route path="anchor" element={<ProductsLayerout />} /** PARENT */>
            <Route index element={<ProductsDashboard />} />
            <Route path="reviews" element={<ProductsReviews />} />
            <Route path='products' element={<ProductsPage />} />
            <Route path=':id' element={<ProductDetails />} />
            <Route path="income" element={<ProductsIncome />} />
          </Route>

          <Route path="host" element={<HostLayerout />} /** PARENT */>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path='persons' element={<HostVans />} />
            <Route path='persons/:id' element={<HostVansDetails />} />
            <Route path="income" element={<Income />} />
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);