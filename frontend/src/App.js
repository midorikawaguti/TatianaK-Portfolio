import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../src/Components/Header/Header.jsx';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection}/>
      <main className='py-3'>
        <Container>
          <Outlet/>
        </Container>
        <Footer/>
      </main>
      
    </div>
  )
}

export default App

