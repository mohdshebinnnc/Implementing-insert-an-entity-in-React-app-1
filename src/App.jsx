// // src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddBook from "./components/AddBook"
import './App.css'; // Import global styles


function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App; 

