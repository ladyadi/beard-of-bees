import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Band from './components/Band/Band';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Band />
      <Music />
      <Videos />
      <Contact />
    </div>
  );
}

export default App;
