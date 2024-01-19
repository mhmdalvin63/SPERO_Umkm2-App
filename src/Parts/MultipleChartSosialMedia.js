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
  const [Instagram, setInstagram] = useState([]);
  const [Tiktok, setTiktok] = useState([]);
  const [Facebook, setFacebook] = useState([]);
  const [Twitter, setTwitter] = useState([]);

    useEffect(() => {
      const token = sessionStorage.getItem("jwttoken");

        axios.get(`${urlApi}sosialmedia`, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
          console.log('SOSIAL MEDIA',response.data);
          setSosialMedia(response.data);
          setInstagram(response.data.instagram_per_daerah);
          setTiktok(response.data.tiktok_per_daerah);
          setFacebook(response.data.facebook_per_daerah);
          setTwitter(response.data.twitter_per_daerah);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          console.error('Error fetching data:', error);
        });
    }, []);

  let ProvinsiInstagram = Instagram.map((el) => el?.nama_provinsi);
  let JumlahInstagram = Instagram.map((el) => el?.total_user);
  let JumlahTiktok = Tiktok.map((el) => el?.total_user);
  let JumlahFacebook = Facebook.map((el) => el?.total_user);
  // let JumlahTwitter = Twitter.map((el) => el?.total_user);
  // console.log('NI ProvinsiInstagram',ProvinsiInstagram)
  // console.log('NI Jumlah Instagram',JumlahInstagram)

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
        categories: ProvinsiInstagram,
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
        name: 'Instagram',
        // data: [323, 545, 656, 343],
        data: JumlahInstagram,
      },
      {
        name: 'Tiktok',
        // data: [454, 543, 243, 546],
        data: JumlahTiktok,
      },
      {
        name: 'Facebook',
        // data: [234, 454, 532, 646],
        data: JumlahFacebook,
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
