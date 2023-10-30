import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
//Pages
import MainPage from './pages/MainPage';
import Home from './pages/Home';


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
        </Routes>
    </Router>
         

    </ChakraProvider>
  );
}

export default App;
