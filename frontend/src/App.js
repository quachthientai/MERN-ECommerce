import React from 'react';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js';
import Jumbotron from './Components/Jumbotron.js';
import HomeScreen from './Screen/HomeScreen.js';
import './index.css';
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Container >
          <Jumbotron />
          <HomeScreen />
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
