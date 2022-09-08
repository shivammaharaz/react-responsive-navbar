
import './App.css';
import React,{ Suspense ,lazy} from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';

const About=lazy(()=>import('./components/About'));
const Contact=lazy(()=>import('./components/Contact'));
const Product=lazy(()=>import('./components/Product'));
const Testemonials=lazy(()=>import('./components/Testemonials'));




function App() {
  return (
    <div>
<Navbar />
        <Routes>
          <Route  exact path="/" element={ <Home />} />
          <Route path="about" element={ <Suspense fallback={<div>image loading</div>}><About /></Suspense>} />
          <Route path="product" element={<Suspense fallback={<div>please wait</div>}><Product /></Suspense>} />
          <Route path="testemonial" element={<Suspense fallback={<div>please wait</div>}><Testemonials /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<div>please wait</div>}><Contact /></Suspense>} />
        </Routes>


    </div>
  );
}

export default App;
