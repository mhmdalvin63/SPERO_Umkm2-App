import '../Css/Main.css'
import '../App.css'
import { Icon } from '@iconify/react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Statistic from '../Images/statistic.png'

import SvgMaps from '../Parts/SvgMaps'

import MainChart from '../Images/MainChart.png'
import IconAdopsiTeknologi from '../Images/IconAdopsiTeknologi.png'
import IconLevelUmkm from '../Images/IconLevelUmkm.png'
import Topleft from '../Images/top-left.png'
import Topright from '../Images/top-right.png'
import Bottomleft from '../Images/bottom-left.png'
import Bottomright from '../Images/bottom-right.png'
import { useEffect, useState } from 'react';
import { Axios } from 'axios';

function Main () {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(''); // Ganti dengan state yang sesuai

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://admin.umkmlevelup.id/api/skalausaha');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
          } catch (error) {
            setError(error);
          }
        };
    
        fetchData();
      }, []); // Empty dependency array to run the effect only once on mount
    

    return (
      <div className="parent">
        <div className='sub-parent'>
        <Row>
           <Col sm={4} className='content-left'>
                <div className='my-3 totalBorder p-3' id='total-umkm'>
                    <div className='top-border'></div>
                    <div className='bottom-border'></div>
                    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                        <div className='w-100'>
                            <div className='content d-block text-center d-xl-flex justify-content-center align-items-center gap-2 px-3'>
                                <h2 className='fw-bold cb'>1,746</h2>
                                <h4 className='cyan1 fw-400'>Total UMKM</h4>
                            </div>
                            <hr className='hr' />
                            <div className='bottom-content d-flex gap-2 align-items-center justify-content-center'>
                                <div className='content-man w-100 d-block d-xl-flex gap-2 align-items-center'>
                                    <div className='content-man-icon d-flex gap-2 align-items-center justify-content-center'>
                                        <h1 className='cb'><Icon icon="ant-design:man-outlined" /></h1>
                                        <h4 className='mb-0 cb d-block d-xl-none'>621</h4>
                                    </div>
                                        <p className='mb-0 d-block d-xl-none text-center'>Laki-Laki</p>
                                    <div className='content-man-value d-none d-xl-block'>
                                        <h4 className='mb-0 cb'>621</h4>
                                        <p className='mb-0'>Laki-Laki</p>
                                    </div>
                                </div>
                                <vr className='vr' />
                                <div className='content-man w-100 d-block d-xl-flex gap-2 align-items-center'>
                                    <div className='content-man-icon d-flex gap-2 align-items-center justify-content-center'>
                                        <h1 className='cc'><Icon icon="ant-design:woman-outlined" /></h1>
                                        <h4 className='mb-0 cb d-block d-xl-none'>1125</h4>
                                    </div>
                                        <p className='mb-0 d-block d-xl-none text-center'>Perempuan</p>
                                    <div className='content-man-value d-none d-xl-block'>
                                        <h4 className='mb-0 cb'>1125</h4>
                                        <p className='mb-0'>Perempuan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-3 totalBorder p-3' id='skala-usaha'>
                    <div className='top-border'></div>
                    <div className='bottom-border'></div>
                    <div className='content-skala-usaha'>
                        <div className='content-su-top'>
                            <div className='content-for-absolute'>
                                <h4 className='mb-3'>Skala Usaha</h4>
                                <img className='Topleft' src={Topleft} alt="Topleft" />
                                <img className='Topright' src={Topright} alt="Topright" />
                                <img className='Bottomleft' src={Bottomleft} alt="Bottomleft" />
                                <img className='Bottomright' src={Bottomright} alt="Bottomright" />
                                <div className='img-chart position-relative'>
                                    <img className='MainChart position relative mt-2' src={MainChart} alt="MainChart" />
                                    <p className='img-chart-text ict ict-1 fw-bold'>112</p>
                                    <p className='img-chart-text ict ict-2 fw-bold'>34</p>
                                    <p className='img-chart-text ict ict-3 fw-bold'>21</p>
                                    <p className='img-chart-text ict ict-4 fw-bold'>8</p>
                                </div>
                            </div>
                        </div>
                        <hr className='hr-skala-usaha' />
                        <div className='content-su-bottom'>
                            <div className='su-list'>
                                <p className='fw-bold cb'>112</p>
                                <p>Ultra Micro</p>
                            </div>
                            <vr className="vr-skala-usaha" />
                            <div className='su-list'>
                                <p className='fw-bold cc'>34</p>
                                <p>Micro</p>
                            </div>
                            <vr className="vr-skala-usaha" />
                            <div className='su-list'>
                                <p className='fw-bold cr'>21</p>
                                <p>Menengah</p>
                            </div>
                            <vr className="vr-skala-usaha" />
                            <div className='su-list'>
                                <p className='fw-bold cj'>8</p>
                                <p>Besar</p>
                            </div>
                        </div>
                    </div>
                </div>
           </Col>

            <Col sm={8} className='content-right position-relative'>
                <div className="my-3 svg-maps position-relative">
                    <SvgMaps regionColor={selectedRegion} />
                </div>

                <div className='flex-at d-flex gap-2'>
                <div className='my-3 totalBorder p-3' id='adopsi-teknologi'>
                    <div className='top-border'></div>
                    <div className='bottom-border'></div>
                    <div className='content-adopsi-teknologi'>
                        <div className='at-header gap-3'>
                            <img className='IconAdopsiTeknologi' src={IconAdopsiTeknologi} alt="IconAdopsiTeknologi" />
                            <p>Adopsi Teknologi</p>
                        </div>
                        <hr class="hr-new" />
                        <div className='at-content'>
                            <div className='list-at my-2'>
                                <p className='cb'>SOSIAL MEDIA</p>
                                <p className='fw-bold cc'>823</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>MARKETPLACE</p>
                                <p className='fw-bold cc'>254</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>POST SYSTEM</p>
                                <p className='fw-bold cc'>121</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>WHATSAPP</p>
                                <p className='fw-bold cc'>224</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>WEBSITE</p>
                                <p className='fw-bold cc'>532</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>OMNI CHANNEL</p>
                                <p className='fw-bold cc'>724</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-3 totalBorder p-3' id='level-umkm'>
                    <div className='top-border'></div>
                    <div className='bottom-border'></div>
                    <div className='content-level-umkm'>
                        <div className='lu-header gap-3'>
                        <img className='IconLevelUmkm' src={IconLevelUmkm} alt="IconLevelUmkm" />
                            <p>Level UMKM</p>
                        </div>
                        <hr class="hr-new" />
                        <div className='lu-content'>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">154</p>
                                    <p className="cb">NOVICE</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">98</p>
                                    <p className="cb">BEGINNER</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">63</p>
                                    <p className="cb">OBSERVER</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">27</p>
                                    <p className="cb">ADOPTER</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Col>
        </Row>
        </div>
      </div>
    )
  }
  
  export default Main