import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Typography, Paper, Container, Grid, CssBaseline, ThemeProvider, createTheme, Switch } from '@mui/material';

const ApexChart = ({ data }) => {
  const [themeMode, setThemeMode] = useState('light');

  // Configurazione delle opzioni del grafico a linee
  const lineChartOptions = {
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

  // Serie di dati per il grafico a linee
  const lineChartSeries = [
    {
      name: 'Close Price',
      data: data.map((item) => item.c),
    },
  ];

  // Configurazione delle opzioni del grafico a barre
  const barChartOptions = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: data.map((item) => item.t),
    },
    yaxis: {
      title: {
        text: 'Volume',
      },
    },
    title: {
      text: 'Stock Volume Chart',
      align: 'left',
    },
  };

  // Serie di dati per il grafico a barre
  const barChartSeries = [
    {
      name: 'Volume',
      data: data.map((item) => item.v),
    },
  ];

  // Configurazione delle opzioni del grafico a torta
  const pieChartOptions = {
    chart: {
      id: 'pie-chart',
    },
    labels: data.map((item) => item.t),
    title: {
      text: 'Distribution of Stock Prices',
      align: 'left',
    },
  };

  // Serie di dati per il grafico a torta
  const pieChartSeries = data.map((item) => item.c);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Ottieni le impostazioni del sistema per il tema
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setThemeMode(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
              {/* Grafico a linee */}
              <Typography variant="h5" gutterBottom>
                Stock Price Chart
              </Typography>
              <Chart options={lineChartOptions} series={lineChartSeries} type="line" height={350} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
              {/* Grafico a barre */}
              <Typography variant="h5" gutterBottom>
                Stock Volume Chart
              </Typography>
              <Chart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
              {/* Grafico a torta */}
              <Typography variant="h5" gutterBottom>
                Stock Price Distribution
              </Typography>
              <Chart options={pieChartOptions} series={pieChartSeries} type="pie" height={350} />
            </Paper>
          </Grid>
        </Grid>

        {/* Switch per il cambio tema */}
        <Switch checked={themeMode === 'dark'} onChange={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
};

export default ApexChart;
