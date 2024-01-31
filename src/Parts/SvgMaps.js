// src/components/IndonesiaMap.js
import { ReactSVG } from 'react-svg';
import SvgIndonesia from '../Images/indonesia.svg';
import PinIcon from '../Images/Marker.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Parts/Loading';

import '../Css/SvgMaps.css'

import { Icon } from '@iconify/react';

const IndonesiaMap = () => {
  let urlApi = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(true);

  const [regionColors, setRegionColors] = useState({});
  const [countdaerah, setcountdaerah] = useState([]);
  const [selectedRegionData, setSelectedRegionData] = useState(null);
  const [markerStyle, setMarkerStyle] = useState({ display: 'none', left: 0, top: 0 });

  const [renderCounter, setRenderCounter] = useState(0);
  const [lastSentIdProvinsi, setLastSentIdProvinsi] = useState(null);


  useEffect(() => {
    const token = sessionStorage.getItem("jwttoken");

    const fetchData = async () => {
      try {
        const [countdaerahResponse] = await Promise.all([
          axios.get(`${urlApi}countdaerah`, { headers: {"Authorization" : `Bearer ${token}`} }),
        ]);

        console.log('COUNT DAERAH', countdaerahResponse.data);
        setcountdaerah(countdaerahResponse.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toTitleCase = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  useEffect(() => {
    // Set warna berdasarkan data API
    const newRegionColors = {};
    countdaerah.forEach((item) => {
      const formattedRegionName = toTitleCase(item.nama_provinsi.toLowerCase());
      newRegionColors[formattedRegionName] = '#00D6BC';
    });
    setRegionColors(newRegionColors);
  }, [countdaerah]);

  const handleCloseRegionInfo = () => {
    setSelectedRegionData(null);
  };

  // if (loading) {
  //   return <div style={{ height: '100vh', width: '100%' }}><Loading/></div>;
  // }

  return (
    <div className='svg-container' style={{ position: 'relative', width : '100%' }}>
      <ReactSVG 
        src={SvgIndonesia}
        beforeInjection={(svg) => {
          svg.setAttribute('width', '100%');
    svg.setAttribute('height', 'auto'); // Set height to auto to maintain aspect ratio
    svg.setAttribute('overflow', 'auto');
    svg.setAttribute('viewBox', '0 0 1000 500');
          const paths = svg.querySelectorAll('path');

          paths.forEach((path) => {
            const regionName = path.getAttribute('name');
            const regionColor = regionColors[regionName] || '#9CB9C7';

            // Set warna daerah sesuai state
            path.style.fill = regionColor;
            // path.style.maxWidth = '100vw';

            // Add marker only for paths with blue color
            if (regionColor === '#00D6BC') {

              // Create a temporary hidden SVG element
              const tempSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              tempSVG.style.position = 'absolute';
              tempSVG.style.visibility = 'hidden';

              // Clone the path into the temporary SVG
              const tempPath = path.cloneNode(true);
              tempSVG.appendChild(tempPath);
              document.body.appendChild(tempSVG);

              // Get the bounding box of the path in the temporary SVG
              const bbox = tempPath.getBBox();

              // Remove the temporary SVG from the document
              document.body.removeChild(tempSVG);

              // Calculate the center of the bounding box
              const centerPoint = {
                x: bbox.x + bbox.width / 2,
                y: bbox.y + bbox.height / 2,
              };

              // Add marker in the center of each region
              const marker = document.createElementNS('http://www.w3.org/2000/svg', 'image');
              marker.setAttribute('href', PinIcon);
              marker.setAttribute('width', '25');
              marker.setAttribute('height', '25');
              marker.setAttribute('regionName', regionName);
              marker.setAttribute('x', centerPoint.x - 9); // Adjust based on half of the marker size
              marker.setAttribute('y', centerPoint.y - 20); // Adjust based on half of the marker size

             // Create a cancel token source outside the function to keep track of the latest request
            let cancelTokenSource = axios.CancelToken.source();

            const handlePathClick = async () => {
              // Increment the rendering counter
              setRenderCounter((prevCounter) => prevCounter + 1);
            
              const currentRenderCounter = renderCounter; // Store the current counter
            
              const regionData = countdaerah.find(
                (region) => toTitleCase(region.nama_provinsi.toLowerCase()) === regionName
              );
            
              setMarkerStyle({
                position: 'absolute',
                left: (centerPoint.x * 1000) / 750 - 50,
                top: (centerPoint.y * 500) / 500 + 35,
              });
            
              if (regionData) {
                const { id_provinsi } = regionData;
                
                // Declare a separate variable to hold id_provinsi
                let sentIdProvinsi = id_provinsi;
            
                console.log('oii', sentIdProvinsi);
            
                try {
                  const token = sessionStorage.getItem('jwttoken');
                  setLoading(true);
            
                  // Cancel the previous request before making a new one
                  cancelTokenSource.cancel('New request initiated');
            
                  // Create a new cancel token source for the current request
                  cancelTokenSource = axios.CancelToken.source();
            
                  // Process only if the current counter matches the counter when this rendering process started
                  if (sentIdProvinsi !== lastSentIdProvinsi) {
                    // Log the current counters and id_provinsi
                    console.log('currentRenderCounter', currentRenderCounter, 'renderCounter', renderCounter);
                    console.log('lastSentIdProvinsi', sentIdProvinsi);
            
                    const response = await axios.get(`${urlApi}countperdaerah?id_provinsi=${sentIdProvinsi}`, {
                      headers: { Authorization: `Bearer ${token}` },
                      cancelToken: cancelTokenSource.token, // Pass the cancel token to the request
                    });
            
                    // Set data region details to state (you might want to adjust this based on your use case)
                    setSelectedRegionData(response.data);
                    console.log(response.data);
                  }
                } catch (error) {
                  // Check if the error is due to the request being canceled
                  if (axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);
                  } else {
                    console.error('Error fetching region detail:', error);
                  }
                } finally {
                  setLoading(false);
                }
              }
            };
            
            
            
            
            
            
            
              const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              textElement.setAttribute('x', centerPoint.x);
              textElement.setAttribute('y', centerPoint.y - 25); // Adjust based on the desired distance above the marker
              textElement.setAttribute('text-anchor', 'middle');
              textElement.style.stroke = '#0166FE';
textElement.style.strokeWidth = '1';

              const regionData = countdaerah.find(
                (region) => toTitleCase(region.nama_provinsi.toLowerCase()) === regionName
              );

              const userCount = regionData ? regionData.user_count : 'N/A';
              const textNode = document.createTextNode(userCount.toString());
              textElement.appendChild(textNode);

              svg.appendChild(textElement);
              svg.appendChild(marker);

              path.addEventListener('click', handlePathClick);
              marker.addEventListener('click', handlePathClick);
            }
          });
        }}
      />

      <div className='muncul' style={markerStyle}>
        {loading ? (
          <Loading />
        ) : (
          selectedRegionData && (
            <div className='popup-maps p-2'>
              <p className='nama_provinsi fwb ict text-center' >
                {selectedRegionData.nama_provinsi?.nama_provinsi ?? '0'}
              </p>
              <h3 className='text-center cb fwb'>
                {selectedRegionData.usercount ?? '0'}
              </h3>
              <p className='text-center'>UMKM</p>
              <div className='gender-total gap-3'>
                <div className='gt-laki'>
                  <h5 className='text-center cb fwb'>
                    {selectedRegionData.userCountLaki ?? '0'}
                  </h5>
                  <p className='itc'>Laki-Laki</p>
                </div>
                {/* <vr class="vr"></vr> */}
                <div className='gt-laki'>
                  <h5 className='text-center cc fwb'>
                    {selectedRegionData.userCountPerempuan ?? '0'}
                  </h5>
                  <p className='itc'>Perempuan</p>
                </div>
              </div>
              <button className='button-close-maps' onClick={handleCloseRegionInfo}><h5><Icon icon="carbon:close-filled" /></h5></button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default IndonesiaMap;
