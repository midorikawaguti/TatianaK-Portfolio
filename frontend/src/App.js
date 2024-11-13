import React from 'react'
import { Container } from 'react-bootstrap';
import Header from '../src/Components/Header/Header.jsx';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header/>
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

