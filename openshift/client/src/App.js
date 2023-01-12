import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ quotes: [] });
  const apiUrl = "http://localhost:3000/quotes";


  useEffect(() => {
    async function fetchData() {
      // You can await here
      const result = await axios(
        //'https://hn.algolia.com/api/v1/search?query=redux',
        apiUrl,
      );
      setData(result.data);
      // ...
    }
    fetchData();
  }, []);



  return (
    <ul>
      {data.quotes.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;