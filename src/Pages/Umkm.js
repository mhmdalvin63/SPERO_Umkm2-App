import '../Css/Umkm.css'
import '../App.css'
import Loading from '../Parts/Loading'
import Maps from '../Parts/SvgMapsUmkm'
import SvgMaps from '../Parts/SvgMaps'

import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Statistic from '../Images/statistic.png'
import MainChart from '../Images/MainChart.png'
import Circlegraph from '../Images/circle-garph.png'
import CircleGraph2 from '../Images/circle-graph2.png'
import IconAdopsiTeknologi from '../Images/IconAdopsiTeknologi.png'
import IconLevelUmkm from '../Images/IconLevelUmkm.png'
import Topleft from '../Images/top-left.png'
import Topright from '../Images/top-right.png'
import Bottomleft from '../Images/bottom-left.png'
import Bottomright from '../Images/bottom-right.png'
import LineSektor from '../Images/line-sektor-usaha.png'
import ContohMaps from '../Images/contoh-maps.png'



const Umkm = () => {
    let urlApi = process.env.REACT_APP_API_URL;
    console.log(urlApi)
    const [DataDaerah, setDataDaerah] = useState([]);
    const [DataSelect, setDataSelect] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);
    const [selectedNamaProvinsi, setselectedNamaProvinsi] = useState([]);
    const [loading, setLoading] = useState(true);

    let handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        setselectedNamaProvinsi(event.target.options[event.target.selectedIndex].text)
    };
    
    console.log(selectedValue)
    console.log(selectedNamaProvinsi)

    if (navigator.connection && navigator.connection.effectiveType === 'slow-2g' && Notification.permission === 'granted') {
        const notification = new Notification("Koneksi Jaringan Lambat", {
          body: "Beberapa fitur mungkin tidak berfungsi sebagaimana mestinya.",
        });
      }
      

    useEffect(() => {
        const token = sessionStorage.getItem("jwttoken");
        setLoading(true);
        console.log('Before API call - selectedValue:', selectedValue);
        axios.get(`${urlApi}countdaerah`, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(response => {
            console.log('Data Daerah', response.data);
            setDataDaerah(response.data);
                setLoading(false);
        })

        .catch(error => {
            setLoading(false);
            console.error('Error fetching data:', error);
        });

        if (selectedValue) {
            axios.get(`${urlApi}countperdaerah?id_provinsi=${selectedValue}`, { headers: {"Authorization" : `Bearer ${token}`} })
            .then(response => {
                console.log('Data Selected', response.data);
                setDataSelect(response.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.error('Error fetching data:', error);
            });
        }
    }, [selectedValue]);

    if (loading) {
        return <div style={{ height: '100vh', width: '100%' }}><Loading/></div>;
    }

    console.log('selectedNamaProvinsi',selectedNamaProvinsi)
    return (
        <div className='parent'>
    <div className='sub-parent'>
      <Row>
        <Col sm={8} md={9} xxl={10} className='d-flex align-items-center'>
        {selectedNamaProvinsi && selectedNamaProvinsi.length > 0 ? (
        <h4>{selectedNamaProvinsi}</h4>
        ) : (
        <h4>Sebaran Wilayah UMKM</h4>
        )}
        </Col>
        <Col sm={4} md={3} xxl={2}>
            <div className='form-select-wilayah'>
                <p className='fwb'>Wilayah UMKM :</p>
                <Form.Select
                    aria-label="Default select example"
                    value={selectedValue}
                    onChange={handleSelectChange}
                >
                    <option value='1'></option>
                    {DataDaerah.map((option) => (
                    <option key={option.id_provinsi} value={option.id_provinsi}>
                        {option.nama_provinsi}
                    </option>
                    ))}
                </Form.Select>
            </div>
        </Col>
      </Row>
      {console.log('Selected Value:', selectedValue)}
        {(!selectedValue || typeof selectedValue !== 'string' || selectedValue.length === 1) ? (
            <>
                {console.log('rendering svgMaps')}
                <SvgMaps />
            </>
        ) : (
      <div>
            <Row className='align-items-center'>
                    <Col sm={12}>
                    <Maps selectedValue={selectedNamaProvinsi}/>
                    </Col>
            </Row>

                <div className='grid-list-umkm'>
                    <div className='totalUmkm my-3 totalBorder p-3' id='total-umkm'>
                        <div className='top-border'></div>
                        <div className='bottom-border'></div>
                        <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                            <div className='w-100'>
                                <div className='content d-block text-center d-xl-flex justify-content-center align-items-center gap-2 px-3'>
                                    <h2 className='fw-bold cb'>{DataSelect.usercount}</h2>
                                    <h4 className='cyan1 fw-400'>Total UMKM</h4>
                                </div>
                                <hr className='hr' />
                                <div className='bottom-content d-flex gap-2 align-items-center justify-content-center'>
                                    <div className='content-man w-100 d-block d-xl-flex gap-2 align-items-center'>
                                        <div className='content-man-icon d-flex gap-2 align-items-center justify-content-center'>
                                            <h1 className='cb'><Icon icon="ant-design:man-outlined" /></h1>
                                            <h4 className='mb-0 cb d-block d-xl-none'>{DataSelect.userCountLaki}</h4>
                                        </div>
                                            <p className='mb-0 d-block d-xl-none text-center'>Laki-Laki</p>
                                        <div className='content-man-value d-none d-xl-block'>
                                            <h4 className='mb-0 cb'>{DataSelect.userCountLaki}</h4>
                                            <p className='mb-0'>Laki-Laki</p>
                                        </div>
                                    </div>
                                    <vr className='vr' />
                                    <div className='content-man w-100 d-block d-xl-flex gap-2 align-items-center'>
                                        <div className='content-man-icon d-flex gap-2 align-items-center justify-content-center'>
                                            <h1 className='cc'><Icon icon="ant-design:woman-outlined" /></h1>
                                            <h4 className='mb-0 cb d-block d-xl-none'>{DataSelect.userCountPerempuan}</h4>
                                        </div>
                                            <p className='mb-0 d-block d-xl-none text-center'>Perempuan</p>
                                        <div className='content-man-value d-none d-xl-block'>
                                            <h4 className='mb-0 cb'>{DataSelect.userCountPerempuan}</h4>
                                            <p className='mb-0'>Perempuan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='skalaUsaha my-3 totalBorder p-3' id='skala-usaha'>
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
                                        <p className='img-chart-text ict ict-1 fw-bold'>{DataSelect.skala_ultra_mikro}</p>
                                        <p className='img-chart-text ict ict-2 fw-bold'>{DataSelect.skala_mikro}</p>
                                        <p className='img-chart-text ict ict-3 fw-bold'>{DataSelect.skala_menengah}</p>
                                        <p className='img-chart-text ict ict-4 fw-bold'>{DataSelect.skala_besar}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='hr-skala-usaha' />
                            <div className='content-su-bottom d-xl-flex d-block justify-content-xl-center justify-content-start'>
                                <div className='su-list text-xl-center text-start d-xl-block d-flex justify-content-xl-center justify-content-between'>
                                    <p className='fw-bold cb'>{DataSelect.skala_ultra_mikro}</p>
                                    <p>Ultra Micro</p>
                                </div>
                                 <vr className="vr-skala-usaha d-xl-block d-none" />
                                 <hr className='d-xl-none d-block' />
                                <div className='su-list text-xl-center text-start d-xl-block d-flex justify-content-xl-center justify-content-between'>
                                    <p className='fw-bold cc'>{DataSelect.skala_mikro}</p>
                                    <p>Micro</p>
                                </div>
                                 <vr className="vr-skala-usaha d-xl-block d-none" />
                                 <hr className='d-xl-none d-block' />
                                <div className='su-list text-xl-center text-start d-xl-block d-flex justify-content-xl-center justify-content-between'>
                                    <p className='fw-bold cr'>{DataSelect.skala_menengah}</p>
                                    <p>Menengah</p>
                                </div>
                                 <vr className="vr-skala-usaha d-xl-block d-none" />
                                 <hr className='d-xl-none d-block' />
                                <div className='su-list text-xl-center text-start d-xl-block d-flex justify-content-xl-center justify-content-between'>
                                    <p className='fw-bold cj'>{DataSelect.skala_besar}</p>
                                    <p>Besar</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sektorUsaha my-3 totalBorder p-3' id='adopsi-teknologi'>
                        <div className='top-border'></div>
                        <div className='bottom-border'></div>
                        <div className='content-adopsi-teknologi'>
                            <div className='at-header d-md-flex d-block text-md-start text-center gap-3'>
                                <p>Sektor Usaha</p>
                            </div>
                            <hr class="hr-new" />
                            <div className='at-content'>
                                <div className='list-at my-3'>
                                    <div className='sektor-usaha-list lh0'>
                                        <p className='cb'>Kerajinan Tangan</p>
                                        <img className='LineSektor w-75' src={LineSektor} alt="LineSektor" />
                                    </div>
                                    <p className='fw-bold cc'>{DataSelect.kerajinan_tangan}</p>
                                </div>
                                <div className='list-at my-3'>
                                    <div className='sektor-usaha-list lh0'>
                                        <p className='cb'>Fashion</p>
                                        <img className='LineSektor w-75' src={LineSektor} alt="LineSektor" />
                                    </div>
                                    <p className='fw-bold cc'>{DataSelect.pakaian}</p>
                                </div>
                                <div className='list-at my-3'>
                                    <div className='sektor-usaha-list lh0'>
                                        <p className='cb'>Makanan & Minuman</p>
                                        <img className='LineSektor w-75' src={LineSektor} alt="LineSektor" />
                                    </div>
                                    <p className='fw-bold cc'>{DataSelect.makanan_minuman}</p>
                                </div>
                                <div className='list-at my-3'>
                                    <div className='sektor-usaha-list lh0'>
                                        <p className='cb'>Elektronik</p>
                                        <img className='LineSektor w-75' src={LineSektor} alt="LineSektor" />
                                    </div>
                                    <p className='fw-bold cc'>76</p>
                                </div>
                                <div className='list-at my-3'>
                                    <div className='sektor-usaha-list lh0'>
                                        <p className='cb'>Properti</p>
                                        <img className='LineSektor w-75' src={LineSektor} alt="LineSektor" />
                                    </div>
                                    <p className='fw-bold cc'>218</p>
                                </div>
                                <div className='list-at my-3'>
                                    <div className='sektor-usaha-list lh0'>
                                        <p className='cb'>Otomotif</p>
                                        <img className='LineSektor w-75' src={LineSektor} alt="LineSektor" />
                                    </div>
                                    <p className='fw-bold cc'>2.759</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='penghasilan my-3 totalBorder p-3' id='level-umkm'>
                        <div className='top-border'></div>
                        <div className='bottom-border'></div>
                        <div className='content-level-umkm'>
                            <div className='lu-content-umkm d-xl-flex d-block py-xl-3 py-1'>
                                <div className='lc-content position-relative text-center'>
                                <div className='wrap position-relative h-100'>
                                    <h5>Penghasilan</h5>
                                    <div className='circle-graph position-relative mt-xl-5 mt-2'>
                                    <img className='Circlegraph position-relative' src={Circlegraph} alt="Circlegraph" />
                                    <div className='circle-graph-text lh5'>
                                        <div className='d-flex align-items-center justify-content-center gap-1'>
                                        <h3 className='cb'>{DataSelect.pendapatan}</h3>
                                        <h4>jt</h4>
                                        </div>
                                        <p>Perbulan</p>
                                    </div>
                                    </div>
                                    <img className='Bottomright' src={Bottomleft} alt="Bottomright" />
                                    <img className='Bottomleft' src={Bottomright} alt="Bottomleft" />
                                </div>
                                </div>
                                <vr className='vr-umkm d-xl-block d-none' />
                                <hr className='d-xl-none d-block my-4' />
                                <div className='lc-content position-relative text-center'>
                                <div className='wrap position-relative h-100'>
                                    <h5>Lama Usaha</h5>
                                    <div className='circle-graph position-relative mt-xl-5 mt-2'>
                                    <img className='CircleGraph2 position-relative' src={CircleGraph2} alt="CircleGraph2" />
                                    <div className='circle-graph-text lh5'>
                                        <div className='d-flex align-items-center justify-content-center gap-1'>
                                        <h3 className='cc'>{DataSelect.total_tahun}</h3>
                                        </div>
                                        <p>Tahun</p>
                                    </div>
                                    </div>
                                    <img className='Bottomright' src={Bottomleft} alt="Bottomright" />
                                    <img className='Bottomleft' src={Bottomright} alt="Bottomleft" />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='adopsiTeknologi my-3 totalBorder p-3' id='adopsi-teknologi'>
                        <div className='top-border'></div>
                        <div className='bottom-border'></div>
                        <div className='content-adopsi-teknologi'>
                            <div className='at-header d-md-flex d-block text-md-start text-center gap-3'>
                                <img className='IconAdopsiTeknologi' src={IconAdopsiTeknologi} alt="IconAdopsiTeknologi" />
                                <p>Adopsi Teknologi</p>
                            </div>
                            <hr class="hr-new" />
                            <div className='at-content'>
                                <div className='list-at my-2'>
                                    <p className='cb'>SOSIAL MEDIA</p>
                                    <p className='fw-bold cc'>{DataSelect.sosial_media}</p>
                                </div>
                                <div className='list-at my-2'>
                                    <p className='cb'>MARKETPLACE</p>
                                    <p className='fw-bold cc'>{DataSelect.marketplace}</p>
                                </div>
                                <div className='list-at my-2'>
                                    <p className='cb'>POST SYSTEM</p>
                                    <p className='fw-bold cc'>{DataSelect.possystem}</p>
                                </div>
                                <div className='list-at my-2'>
                                    <p className='cb'>WHATSAPP</p>
                                    <p className='fw-bold cc'>{DataSelect.whatsapp}</p>
                                </div>
                                <div className='list-at my-2'>
                                    <p className='cb'>WEBSITE</p>
                                    <p className='fw-bold cc'>{DataSelect.website}</p>
                                </div>
                                <div className='list-at my-2'>
                                    <p className='cb'>OMNI CHANNEL</p>
                                    <p className='fw-bold cc'>{DataSelect.omnichannel}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='levelUmkm my-3 totalBorder p-3' id='level-umkm'>
                        <div className='top-border'></div>
                        <div className='bottom-border'></div>
                        <div className='content-level-umkm'>
                            <div className='lu-header d-md-flex d-block text-md-start text-center gap-3'>
                            <img className='IconLevelUmkm' src={IconLevelUmkm} alt="IconLevelUmkm" />
                                <p>Level UMKM</p>
                            </div>
                            <hr class="hr-new" />
                            <div className='lu-content'>
                                <div className='list-lu my-2'>
                                    <div className='llu-left'>
                                        <p className="fw-bold cc">{DataSelect.level_leader}</p>
                                        <p className="cb">Leader</p>
                                    </div>
                                    <div className='llu-right'>
                                    <img className='Statistic' src={Statistic} alt="Statistic" />
                                    </div>
                                </div>
                                <div className='list-lu my-2'>
                                    <div className='llu-left'>
                                        <p className="fw-bold cc">{DataSelect.level_novice}</p>
                                        <p className="cb">NOVICE</p>
                                    </div>
                                    <div className='llu-right'>
                                    <img className='Statistic' src={Statistic} alt="Statistic" />
                                    </div>
                                </div>
                                <div className='list-lu my-2'>
                                    <div className='llu-left'>
                                        <p className="fw-bold cc">{DataSelect.level_beginner}</p>
                                        <p className="cb">BEGINNER</p>
                                    </div>
                                    <div className='llu-right'>
                                    <img className='Statistic' src={Statistic} alt="Statistic" />
                                    </div>
                                </div>
                                <div className='list-lu my-2'>
                                    <div className='llu-left'>
                                        <p className="fw-bold cc">{DataSelect.level_observer}</p>
                                        <p className="cb">OBSERVER</p>
                                    </div>
                                    <div className='llu-right'>
                                    <img className='Statistic' src={Statistic} alt="Statistic" />
                                    </div>
                                </div>
                                <div className='list-lu my-2'>
                                    <div className='llu-left'>
                                        <p className="fw-bold cc">{DataSelect.level_adopter}</p>
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
    )}
    </div>
    </div>
    )
  }
  
  export default Umkm