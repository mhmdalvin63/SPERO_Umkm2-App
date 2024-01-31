import '../Css/Main.css'
import '../App.css'

import SvgMaps from '../Parts/SvgMaps'
import Loading from '../Parts/Loading'

import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Statistic from '../Images/statistic.png'
import MainChart from '../Images/MainChart.png'
import IconAdopsiTeknologi from '../Images/IconAdopsiTeknologi.png'
import IconLevelUmkm from '../Images/IconLevelUmkm.png'
import Topleft from '../Images/top-left.png'
import Topright from '../Images/top-right.png'
import Bottomleft from '../Images/bottom-left.png'
import Bottomright from '../Images/bottom-right.png'

function Main () {
    let urlApi = process.env.REACT_APP_API_URL;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [dataLevel, setDataLevel] = useState([]);
    const [DataAdopsiTeknologi, setDataAdopsiTeknologi] = useState([]);
    const [error, setError] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(''); // Ganti dengan state yang sesuai

    useEffect(() => {
    const token = sessionStorage.getItem("jwttoken");

        const fetchData = async () => {
          try {
            setLoading(true); // Set loading menjadi true sebelum permintaan Axios dimulai

            const [skalaUsahaResponse, countUmkmResponse, levelUmkmResponse, adopsiTeknologiResponse] = await Promise.all([
              axios.get(`${urlApi}skalausaha` , { headers: {"Authorization" : `Bearer ${token}`} }),
              axios.get(`${urlApi}countumkm` , { headers: {"Authorization" : `Bearer ${token}`} }),
              axios.get(`${urlApi}levelumkm` , { headers: {"Authorization" : `Bearer ${token}`} }),
              axios.get(`${urlApi}adopsiteknologi` , { headers: {"Authorization" : `Bearer ${token}`} })
            ]);
    
            // console.log('SKALA USAHA', skalaUsahaResponse.data);
            setData(skalaUsahaResponse.data);
    
            // console.log('COUNT UMKM', countUmkmResponse.data);
            setDataUser(countUmkmResponse.data);
    
            // console.log('LEVEL UMKM', levelUmkmResponse.data);
            setDataLevel(levelUmkmResponse.data);
    
            // console.log('Adopsi Teknologi UMKM', adopsiTeknologiResponse.data);
            setDataAdopsiTeknologi(adopsiTeknologiResponse.data);
    
            setLoading(false); // Set loading menjadi false setelah semua permintaan Axios selesai
          } catch (error) {
            setLoading(false); // Set loading menjadi false jika terjadi kesalahan
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData(); // Panggil fungsi fetchData untuk memulai permintaan Axios
    
    }, []);

    if (loading) {
        return <div style={{ height: '100%', width: '100%' }}><Loading/></div>;
    }

    return (
      <div className="parent">
        <div className='sub-parent'>
        <div className='grid-list-main'>
                <div className='mainTu my-3 totalBorder p-md-3 p-2' id='total-umkm'>
                    <div className='top-border'></div>
                    <div className='bottom-border'></div>
                    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                        <div className='w-100 d-md-block d-flex justify-content-center'>
                            <div className='content d-block text-center d-xl-flex justify-content-center align-items-center gap-2 px-3'>
                                <h2 className='fw-bold cb'>{dataUser.total_user}</h2>
                                <h4 className='cyan1 fw-400'>Total UMKM</h4>
                            </div>
                            <hr className='hr' />
                            {/* <vr className='vr d-md-none d-block' /> */}
                            <div className='bottom-content d-flex gap-2 align-items-center justify-content-center px-md-0 px-3'>
                                <div className='content-man w-100 d-block d-xl-flex gap-2 align-items-center'>
                                    <div className='content-man-icon d-flex gap-2 align-items-center justify-content-center'>
                                        <h1 className='cb'><Icon icon="ant-design:man-outlined" /></h1>
                                        <h4 className='mb-0 cb d-block d-xl-none'>{dataUser['total_laki-laki']}</h4>
                                    </div>
                                        <p className='mb-0 d-block d-xl-none text-center'>Laki-Laki</p>
                                    <div className='content-man-value d-none d-xl-block'>
                                        <h4 className='mb-0 cb'>{dataUser['total_laki-laki']}</h4>
                                        <p className='mb-0'>Laki-Laki</p>
                                    </div>
                                </div>
                                <vr className='vr' />
                                <div className='content-man w-100 d-block d-xl-flex gap-2 align-items-center'>
                                    <div className='content-man-icon d-flex gap-2 align-items-center justify-content-center'>
                                        <h1 className='cc'><Icon icon="ant-design:woman-outlined" /></h1>
                                        <h4 className='mb-0 cb d-block d-xl-none'>{dataUser.total_perempuan}</h4>
                                    </div>
                                        <p className='mb-0 d-block d-xl-none text-center'>Perempuan</p>
                                    <div className='content-man-value d-none d-xl-block'>
                                        <h4 className='mb-0 cb'>{dataUser.total_perempuan}</h4>
                                        <p className='mb-0'>Perempuan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mainMaps my-3 svg-maps position-relative">
                    <SvgMaps regionColor={selectedRegion} />
                </div>

                <div className='mainSu my-3 totalBorder p-md-3 p-2' id='skala-usaha'>
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
                                    <p className='img-chart-text ict ict-1 fw-bold'>{data.ultra_mikro}</p>
                                    <p className='img-chart-text ict ict-2 fw-bold'>{data.mikro}</p>
                                    <p className='img-chart-text ict ict-3 fw-bold'>{data.menengah}</p>
                                    <p className='img-chart-text ict ict-4 fw-bold'>{data.besar}</p>
                                </div>
                            </div>
                        </div>
                        <hr className='hr-skala-usaha' />
                        <div className='content-su-bottom d-xl-flex d-block justify-content-xl-center justify-content-start'>
                            <div className='su-list text-xl-center text-start d-xl-block d-flex justify-content-xl-center justify-content-between'>
                                <p className='fw-bold cb'>{data.ultra_mikro}</p>
                                <p>Ultra Micro</p>
                            </div>
                            <vr className="vr-skala-usaha d-xl-block d-none" />
                            <hr className='d-xl-none d-block' />
                            <div className='su-list text-xl-center text-start d-xl-block d-flex justify-content-xl-center justify-content-between'>
                                <p className='fw-bold cc'>{data.mikro}</p>
                                <p>Micro</p>
                            </div>
                            <vr className="vr-skala-usaha d-xl-block d-none" />
                            <hr className='d-xl-none d-block' />
                            <div className='su-list text-xl-center text-start d-xl-block d-flex justify-content-xl-center justify-content-between'>
                                <p className='fw-bold cr'>{data.menengah}</p>
                                <p>Menengah</p>
                            </div>
                            <vr className="vr-skala-usaha d-xl-block d-none" />
                            <hr className='d-xl-none d-block' />
                            <div className='su-list text-xl-center text-start d-xl-block d-flex justify-content-xl-center justify-content-between'>
                                <p className='fw-bold cj'>{data.besar}</p>
                                <p>Besar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mainAt my-3 totalBorder p-md-3 p-2' id='adopsi-teknologi'>
                    <div className='top-border'></div>
                    <div className='bottom-border'></div>
                    <div className='content-adopsi-teknologi'>
                        <div className='at-header d-md-flex d-block text-md-start text-center gap-3'>
                            <img className='IconAdopsiTeknologi' src={IconAdopsiTeknologi} alt="IconAdopsiTeknologi" />
                            <p className='mt-md-0 mt-1'>Adopsi Teknologi</p>
                        </div>
                        <hr class="hr-new" />
                        <div className='at-content'>
                            <div className='list-at my-2'>
                                <p className='cb'>SOSIAL MEDIA</p>
                                <p className='fw-bold cc'>{DataAdopsiTeknologi.sosial_media}</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>MARKETPLACE</p>
                                <p className='fw-bold cc'>{DataAdopsiTeknologi.marketplace}</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>POST SYSTEM</p>
                                <p className='fw-bold cc'>{DataAdopsiTeknologi.pos_system}</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>WHATSAPP</p>
                                <p className='fw-bold cc'>{DataAdopsiTeknologi.whatsapp}</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>WEBSITE</p>
                                <p className='fw-bold cc'>{DataAdopsiTeknologi.website}</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>OMNI CHANNEL</p>
                                <p className='fw-bold cc'>{DataAdopsiTeknologi.omnichannel}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mainLu my-3 totalBorder p-md-3 p-2' id='level-umkm'>
                    <div className='top-border'></div>
                    <div className='bottom-border'></div>
                    <div className='content-level-umkm'>
                        <div className='lu-header d-md-flex d-block text-md-start text-center gap-3'>
                        <img className='IconLevelUmkm' src={IconLevelUmkm} alt="IconLevelUmkm" />
                            <p className='mt-md-0 mt-1'>Level UMKM</p>
                        </div>
                        <hr class="hr-new" />
                        <div className='lu-content'>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">{dataLevel.leader}</p>
                                    <p className="cb">LEADER</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">{dataLevel.novice}</p>
                                    <p className="cb">NOVICE</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">{dataLevel.beginner}</p>
                                    <p className="cb">BEGINNER</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">63</p>
                                    <p className="cb">{dataLevel.observer}</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">{dataLevel.adopter}</p>
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
        </div>
      </div>
    )
  }
  
  export default Main