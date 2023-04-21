import React from 'react';
import './App.css';
import Table from './components/Table';
import Inputs from './components/Inputs';
import StarwarsProvider from './context/StarwarsProvider';

function App() {
  return (
    <span>
      <StarwarsProvider>
        Hello, App!
        <Inputs />
        <Table />
      </StarwarsProvider>
    </span>
  );
}

export default App;
