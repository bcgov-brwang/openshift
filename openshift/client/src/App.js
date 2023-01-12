import React, { useState, useEffect, Component, setState} from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ quotes: [] });
  const apiUrl = "http://localhost:8000/quotes";


  useEffect(() => {
    async function fetchData() {
      // You can await here
      const result = await axios(
        apiUrl,
      );
      setData({quotes: result.data.data});   
    }
    fetchData();
  }, []);


  return (
    <ul>
      {data.quotes.map(item => (
        <li key={item.id}>
          <a href={item.author}>{item.quote}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
