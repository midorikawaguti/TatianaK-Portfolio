import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      <Header/>
      <main className='py-3'>
        <Container>
          <h1>Welcome</h1>
        </Container>
      </main>
      
    </div>
  )
}

export default App

