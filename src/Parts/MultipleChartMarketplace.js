// MultipleBarChart.js
import React from 'react';
import Chart from 'react-apexcharts';

import Loading from '../Parts/Loading'

import { useEffect, useState } from 'react';
import axios from 'axios';

const MultipleBarChart = () => {
  let urlApi = process.env.REACT_APP_API_URL;
  
  const [loading, setLoading] = useState(true);

  const [SosialMedia, setSosialMedia] = useState([]);
  const [tokopedia, settokopedia] = useState([]);
  const [shopee, setshopee] = useState([]);
  const [lazada, setlazada] = useState([]);
  const [bukalapak, setbukalapak] = useState([]);

    useEffect(() => {
      const token = sessionStorage.getItem("jwttoken");

        axios.get(`${urlApi}marketplace`, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
          console.log('MARKETPLACE',response.data);
          setSosialMedia(response.data);
          settokopedia(response.data.tokopedia_per_daerah);
          setshopee(response.data.shopee_per_daerah);
          setlazada(response.data.lazada_per_daerah);
          setbukalapak(response.data.bukalapak_per_daerah);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          console.error('Error fetching data:', error);
        });
    }, []);

  let Provinsitokopedia = tokopedia.map((el) => el?.nama_provinsi);
  let Jumlahtokopedia = tokopedia.map((el) => el?.total_user);
  let Jumlahshopee = shopee.map((el) => el?.total_user);
  let Jumlahlazada = lazada.map((el) => el?.total_user);
  let Jumlahbukalapak = bukalapak.map((el) => el?.total_user);
  // console.log('NI Provinsitokopedia',Provinsitokopedia)
  // console.log('NI Jumlah tokopedia',Jumlahtokopedia)

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
          columnWidth: '50%', // Mengatur lebar kolom
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
        // categories: ['MOJOKERTO', 'YOGYAKARTA', 'SURAKARTA', 'PEMATANG SIANTAR'],
        categories: Provinsitokopedia,
        labels: {
          style: {
            display: 'none',
            fontSize: '7.5px',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '7.5px',
          },
        },
      },
      colors: ['#CC00FF', '#000000', '#1877F2', '#00FFA3'],
    },
    series: [
      {
        name: 'tokopedia',
        // data: [323, 545, 656, 343],
        data: Jumlahtokopedia,
      },
      {
        name: 'shopee',
        // data: [454, 543, 243, 546],
        data: Jumlahshopee,
      },
      {
        name: 'lazada',
        // data: [234, 454, 532, 646],
        data: Jumlahlazada,
      },
      {
        name: 'bukalapak',
        // data: [435, 432, 654, 556],
        data: Jumlahbukalapak,
      },
    ],
  };

  return (
    <div>
     {loading ? (
      <Loading/>
   ) : (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={200}
      />
    </div>
   )}
   </div>

    
  );
};

export default MultipleBarChart;
