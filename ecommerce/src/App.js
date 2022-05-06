import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import { Login } from "./components/login"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
