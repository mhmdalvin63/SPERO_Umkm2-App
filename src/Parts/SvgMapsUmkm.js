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
  const [duplicatedPaths, setDuplicatedPaths] = useState('');

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
  const duplicatedPathsHTML = [];
  const paths = document.querySelectorAll('path');

  for (const path of paths) {
    const regionName = path.getAttribute('name');
    const pathColor = path.style.fill;

    // Check if the path has a blue color and is not the selected region
    if (pathColor === 'rgb(0, 214, 188)' && regionName === selectedValueLower) {
      // Hapus properti transform atau atribut lainnya yang mempengaruhi posisi
      // path.removeAttribute('transform');
      path.removeAttribute('style'); // Hapus semua gaya (style) jika diperlukan
      path.setAttribute('transform', null);

      duplicatedPathsHTML.push(path.outerHTML);
      console.log('duplicatedPathsHTML', duplicatedPathsHTML);

      // Jika Anda hanya ingin satu elemen, keluar dari loop setelah menemukan
      break; // atau return;
    }
  }

  setDuplicatedPaths(duplicatedPathsHTML);
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
    // Set warna berdasarkan data API
    const newRegionColors = {};
    countdaerah.forEach((item) => {
      const formattedRegionName = toTitleCase(item.nama_provinsi.toLowerCase());
      newRegionColors[formattedRegionName] =
        item.nama_provinsi === selectedValue ? '#00D6BC' : '#9CB9C7';
    });
    setRegionColors(newRegionColors);

    // Find duplicated paths whenever regionColors or selectedValue changes
    findDuplicatedPaths();
  }, [countdaerah, selectedValue]);

  const svgStyle = {
    height: '100%',
    width: '100%',
  };

  const cleanUpPathHTML = (html) => {
    // Menghapus atribut atau gaya yang tidak diinginkan, misalnya, 'style' atau 'transform'
    const cleanedHTML = html.replace(/(style|transform)="[^"]*"/g, '');
    return cleanedHTML;
  };

  const renderedHTML = duplicatedPaths.length > 0 ? (
    <g dangerouslySetInnerHTML={{ __html: cleanUpPathHTML(duplicatedPaths[0]) }} className='cobadah' />
  ) : null;

  if (loading) {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <Loading />
      </div>
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
              const paths = svg.querySelectorAll('path');
              paths.forEach((path) => {
                const regionName = path.getAttribute('name');
                // Set warna daerah sesuai state
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
            <svg width="100%" height="100%" className='cobain'>
              {duplicatedPaths.map((html, index) => (
                <g key={index} dangerouslySetInnerHTML={{ __html: cleanUpPathHTML(html) }} className='cobadah'/>
                
              ))}
              
            </svg>
            </div>

          </div>
        </Col>
        
      </Row>
      <svg width="100%"
  height="100vh">
        {renderedHTML}
      </svg>
    </div>
  );
};

export default IndonesiaMap;
