import React from 'react';
import './App.css';
import Views from './Views/Views';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Views />
    </div>
  );
}

export default App;
