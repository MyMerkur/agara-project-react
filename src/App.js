import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//Pages
import MainPage from './pages/MainPage';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      
      <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<Home />} />
            <Route path='/reservation' element={<Reservation/>} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
         

    </ChakraProvider>
  );
}

export default App;
