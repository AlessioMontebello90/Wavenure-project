import React from 'react';
import Chart from 'react-apexcharts';
import { Typography, Paper } from '@mui/material';

const ApexChart = ({ data }) => {
  const options = {
    chart: {
      id: 'basic-line',
    },
    xaxis: {
      categories: data.map((item) => item.t),
    },
    yaxis: {
      title: {
        text: 'Close Price',
      },
    },
    title: {
      text: 'Stock Price Chart',
      align: 'left',
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 4,
    },
  };

  const series = [
    {
      name: 'Close Price',
      data: data.map((item) => item.c),
    },
  ];

  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Stock Price Chart
      </Typography>
      <Chart options={options} series={series} type="line" height={500} />
    </Paper>
  );
};

export default ApexChart;
