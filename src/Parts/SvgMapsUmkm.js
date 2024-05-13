import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactSVG } from 'react-svg';
import SvgIndonesia from '../Images/indonesia.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from '../Parts/Loading';

const IndonesiaMap = ({ selectedValue }) => {
  let urlApi = process.env.REACT_APP_API_URL;
  const [regionColors, setRegionColors] = useState({});
  const [countdaerah, setCountDaerah] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cleanedPathsHTML, setCleanedPathsHTML] = useState([]);
  const [duplicatedPaths, setDuplicatedPaths] = useState('');
  const [viewBox, setViewBox] = useState('0 0 100 100'); // Set initial viewBox

  const toTitleCase = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  let selectedValueLower;

  if (typeof selectedValue === 'string') {
    selectedValueLower = toTitleCase(selectedValue.toLowerCase());
    console.log(selectedValueLower);
  } else {
    console.error('selectedValue is not a string');
  }

  const findDuplicatedPaths = () => {
    const cleanedPathsHTML = [];
    const paths = document.querySelectorAll('path');
    // Inisialisasi koordinat bounding box dengan nilai yang lebih realistis
    let minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;
    for (const path of paths) {
      const regionName = path.getAttribute('name');
      const pathColor = path.style.fill;

      if (pathColor === 'rgb(0, 214, 188)' && regionName === selectedValueLower) {
        path.removeAttribute('style');
        path.removeAttribute('transform');
        path.removeAttribute('stroke');  // Add more attributes if needed
        path.style.fill = '#00D6BC '

        // Add the cleaned HTML directly to the array
        cleanedPathsHTML.push(cleanUpPathHTML(path.outerHTML));

        // Calculate bounding box
        const bbox = path.getBBox();
        minX = Math.min(minX, bbox.x);
        minY = Math.min(minY, bbox.y);
        maxX = Math.max(maxX, bbox.x + bbox.width);
        maxY = Math.max(maxY, bbox.y + bbox.height);

        break;
      }
    }

    // Update the viewBox based on the calculated bounding box
    setViewBox(`${minX} ${minY} ${maxX - minX} ${maxY - minY}`);
    setDuplicatedPaths(cleanedPathsHTML.join(''));
  };

  useEffect(() => {
    const token = sessionStorage.getItem('jwttoken');
    const fetchData = async () => {
      try {
        const [countdaerahResponse] = await Promise.all([
          axios.get(`${urlApi}countdaerah`, { headers: { Authorization: `Bearer ${token}` } }),
        ]);
        setCountDaerah(countdaerahResponse.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const newRegionColors = {};
    countdaerah.forEach((item) => {
      const formattedRegionName = toTitleCase(item.nama_provinsi.toLowerCase());
      newRegionColors[formattedRegionName] =
        item.nama_provinsi === selectedValue ? '#00D6BC' : '#9CB9C7';
    });
    setRegionColors(newRegionColors);

    findDuplicatedPaths();
  }, [countdaerah, selectedValue]);

  const svgStyle = {
    height: '100%',
    width: '100%',
  };

  const cleanUpPathHTML = (html) => {
    const cleanedHTML = html.replace(/(style|transform)="[^"]*"/g, '');
    return cleanedHTML;
  };

  if (loading) {
    return (
      <div className='d-flex align-items-center justify-content-center's style={{ height: '100vh', width: '100%' }}><Loading/></div>
    );
  }

  return (
    <div>
      <Row className='align-items-center'>
        <Col sm={10}>
          <ReactSVG
            src={SvgIndonesia}
            beforeInjection={(svg) => {
              svg.setAttribute('width', '100%');
            svg.setAttribute('viewBox', '0 0 1100 400');

              const paths = svg.querySelectorAll('path');
              paths.forEach((path) => {
                const regionName = path.getAttribute('name');
                path.style.fill = regionColors[regionName] || '#9CB9C7';
              });
            }}
          />
        </Col>
        <Col sm={2}>
          <div className='my-3 totalBorder p-3' id='total-umkm'>
            <div className='top-border'></div>
            <div className='bottom-border'></div>
            <div className='content'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <rect width="100%" height="100%" fill='#fff'/>
              <foreignObject width="100%" height="100%" className='ssssssssss py-3'>
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'max-content', margin: 'auto' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox={viewBox} className='svgsvgsvg'>
                    <g dangerouslySetInnerHTML={{ __html: duplicatedPaths }} className='cobadah'/>
                  </svg>
                </div>
              </foreignObject>
            </svg>
            </div>
          </div>
        </Col>
      </Row>

      
    </div>
  );
};

export default IndonesiaMap;
