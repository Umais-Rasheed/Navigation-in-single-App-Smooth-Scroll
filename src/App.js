import React from 'react';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer'; 
import Card from './components/Card';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import  Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';


function App() {
  return (
    
    <div className='App'>
        <Navbar />
        <Header />
        <Card />
        <Aboutus />
        <Services />
        <Testimonials />
        <Footer />
    </div>
  );
}

export default App;
