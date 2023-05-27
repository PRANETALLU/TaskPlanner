
import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import './css/Header.css';
import './css/Main.css';
import './css/Footer.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AddTask from './pages/AddTask';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/addTask" element={<AddTask />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
