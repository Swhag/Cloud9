import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const WeatherChart = (props) => {
  const { weatherData, dashboardStyle } = props;

  const fontColor = '#fff';
  const gridColor = 'rgba(255, 255, 255, 0.6)';

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
        borderColor: fontColor,
        tension: 0.4,
      },
    ],
  };

  const minValue = Math.min(...data.datasets[0].data) - 5;
  const maxValue = Math.max(...data.datasets[0].data) + 5;

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        min: minValue,
        max: maxValue,
      },
      x: {
        ticks: {
          color: fontColor,
          font: {
            size: 16,
          },
          callback: function (value, index, values) {
            const label = labels[index];
            return [label.label, `${Math.round(label.value)}°`];
          },
          labelOffset: 0,
        },

        grid: {
          color: gridColor,
        },
      },
    },
    elements: {
      point: {
        radius: 5,
        backgroundColor: '#fff',
        borderColor: fontColor,
        borderWidth: 1,
      },
    },
  };

  return (
    <div className='weather-chart-container' style={dashboardStyle}>
      <h2>Today's Forecast</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
