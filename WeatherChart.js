import React, { useRef } from 'react';
import Chart from 'chart.js/auto';

const WeatherChart = (props) => {
  const { weatherData } = props;
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const morning = weatherData?.daily[0]?.temp.morn;
  const afternoon = weatherData?.daily[0]?.temp.day;
  const evening = weatherData?.daily[0]?.temp.eve;
  const night = weatherData?.daily[0]?.temp.night;
  const labels = [
    { label: 'Morning', value: morning },
    { label: 'Afternoon', value: afternoon },
    { label: 'Evening', value: evening },
    { label: 'Night', value: night },
  ];

  const data = {
    labels: labels.map((label) => label.label),
    datasets: [
      {
        label: '',
        data: [morning, afternoon, evening, night],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    // maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        ticks: {
          callback: function (value, index, values) {
            const label = labels[index];
            return [label.label, `${Math.round(label.value)} °`];
          },
          labelOffset: 0,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Create chart on component mount
  React.useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data,
        options,
      });
    }
    // destroy chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options]);

  return (
    <div className='weather-chart-container'>
      <h2>Temperature</h2>
      <canvas ref={chartRef} />
    </div>
  );
};

export default WeatherChart;
