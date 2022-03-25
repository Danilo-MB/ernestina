import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/firebaseConfig';
import GlobalStyle from './styles/global';
import AuthProvider from './context/authContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';

const config = initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AuthProvider>
        <Routes>
          <Route path='/admin' element={<Login />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
