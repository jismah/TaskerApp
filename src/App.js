import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Login } from './auths/login';
import { Register } from './auths/register';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>

    </ChakraProvider>
  );
}

export default App;
