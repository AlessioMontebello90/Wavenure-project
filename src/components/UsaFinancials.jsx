import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const UsaFinancials = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    // Aggiorna lo stato con i valori forniti
    setOptions({});
    setSeries([130.15, 133.41, 129.89, 645365, 130.465]);
    setLabels(['h', 'l', 'n', 'o', 'vw']);
  }, []);

  return (
    <div className="UsaFinancials">
      <Chart options={options} series={series} type="UsaFinancials" width="380" />
    </div>
  );
};

export default UsaFinancials;
