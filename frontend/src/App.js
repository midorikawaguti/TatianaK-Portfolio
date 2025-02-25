import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../src/Components/Header/Header.jsx';
import Footer from './Components/Footer';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home if not on it
      navigate('/');
      // Wait a short period for navigation before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on the home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };



    const downloadCV = () => {
      console.log('download CV')
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/18_pLawtBuDfPGmlB59AgDDe5a34t4U_U/view?usp=sharing"; 
    link.target = "_blank"; // Open in a new tab
    link.download = "Tatiana_Kawaguti_Resume"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


  return (
    <div>
      <Header scrollToSection={scrollToSection}/>
      <main className='py-3'>
        <Container>
          <Outlet context={{downloadCV}}/>
        </Container>
        <Footer/>
      </main>
      
    </div>
  )
}

export default App

