import React from 'react';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js';
import Jumbotron from './Components/Jumbotron.js';
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Container className="p-0" >
          <Jumbotron />
        </Container>
        
      </main>
      <Footer/>
    </>
  );
}

export default App;
