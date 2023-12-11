// MultipleBarChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const MultipleBarChart = () => {
  const chartData = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          vertical: true,
          columnWidth: '10%', // Mengatur lebar kolom
          endingShape: 'rounded',
          dataLabels: {
            position: 'top',
            enabled: false,
          },
           // Add border properties
           borderColors: {
            stroke: '#000000', // Border color
          },
          borderWidth: 12, // Border width
        },
      },
      xaxis: {
        categories: ['MOJOKERTO', 'YOGYAKARTA', 'SURAKARTA', 'PEMATANG SIANTAR'],
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      colors: ['#CC00FF', '#000000', '#1877F2', '#00FFA3'],
    },
    series: [
      {
        name: 'Instagram',
        data: [323, 545, 656, 343],
      },
      {
        name: 'Tiktok',
        data: [454, 543, 243, 546],
      },
      {
        name: 'Facebook',
        data: [234, 454, 532, 646],
      },
      {
        name: 'Twitter',
        data: [435, 432, 654, 556],
      },
    ],
  };

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={200}
      />
    </div>
  );
};

export default MultipleBarChart;
