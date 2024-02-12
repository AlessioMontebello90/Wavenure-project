import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApexChart from './ApexChart';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=v27X66ynhOkfq3RBogdTxqMmdJFJChd1'
        );
        setData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Polygon App</h1>
      <ApexChart data={data} />
    </div>
  );
};

export default App;







