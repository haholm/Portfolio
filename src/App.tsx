import React from 'react';
import './App.scss';
import Timeline from './Components/Timeline';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Timeline />
      <p className="Creds">Made with ❤<br/>© Hampus Holm 2021</p>
    </div>
  );
}

export default App;