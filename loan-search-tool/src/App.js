import logo from './logo.svg';
import './App.css';
import Loan from './components/Loan';
import axios from 'axios';
import Loans from './components/Loans';
import Header from './components/Header';
import localLoans from './data/sample.json'
import React, { useState, useEffect } from 'react'

function App() {

  // const [data, setData] = useState({});

  // useEffect(() => {
  //     fetch("localhost:3000/data")
  //         .then(response => {
  //             if (response.ok) {
  //                 setData(response.json());
  //             }
  //         })
  //         .catch(error => console.error(error))
  // });

  return (
    <div className='App'>
      <Header />
      <Loans loans={localLoans}/>
    </div>
  );
}

export default App;
