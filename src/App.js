import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Container, Box, Center } from '@chakra-ui/react'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Center>
            <Container 
              m={5} 
              p="20px" 
              borderRadius='lg' 
              width="" 
              bg="white" 
              boxShadow="inner"
              centerContent
            >
              <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
              </Routes>
            </Container>
          </Center>
        </BrowserRouter>
    </div>
  );
}

export default App;
