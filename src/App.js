import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <div className="container">
        <Filters />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
