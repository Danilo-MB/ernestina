import React from 'react';
import { Routes, Route } from "react-router-dom";
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
