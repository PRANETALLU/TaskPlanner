
import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import './css/Header.css';
import './css/Main.css';
import './css/Footer.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
