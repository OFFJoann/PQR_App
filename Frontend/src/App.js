// App.js
import React from 'react';
import './styles/formulario.css';
import Router from './components/Routes';
import Header from './components/Header';
import Start from './components/emergentes/Modal';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Start />
      <Router />
    </div>
  );
};

export default App;
