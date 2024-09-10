import React from 'react';
import Home from './Home';
import './style.css'; 
import './script.js'; 
import Preloader from './preloader.jsx';
import TopBar from './TopBar.jsx';
import Aboutus from './pages/Aboutus.jsx';

function App() {
  return (
    <div className="App">
      {/* <Preloader />   */}
      <TopBar />
      <Home />
    </div>
  );
}

export default App;