// src/components/IndonesiaMap.js
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import SvgIndonesia from '../Images/indonesia.svg';

const IndonesiaMap = () => {
  const [regionColors, setRegionColors] = useState({});

  const handleRegionClick = (regionName) => {
    // Misalnya, kita ingin mengubah warna ke merah ketika sebuah daerah diklik
    setRegionColors((prevColors) => ({
      ...prevColors,
      [regionName]: '#00D6BC ',
    }));
  };

  return (
    <div>
      <ReactSVG
        src={SvgIndonesia}
        beforeInjection={(svg) => {
          const paths = svg.querySelectorAll('path');
          paths.forEach((path) => {
            const regionName = path.getAttribute('name');
            // Set warna daerah sesuai state
            path.style.fill = regionColors[regionName] || 'gray';
            // Tambahkan event click untuk setiap path
            path.addEventListener('click', () => handleRegionClick(regionName));
          });
        }}
      />
    </div>
  );
};

export default IndonesiaMap;
