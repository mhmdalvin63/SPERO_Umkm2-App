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

const Main = () => {
    return (
      <div className="parent">
        <div className='sub-parent'>
        <Row>
           <Col sm={4} className='content-left'>
                <div className='my-3 totalBorder p-3' id='total-umkm'>
                    <div className='top-border'></div>
                    <div className='bottom-border'></div>
                    <div className='content d-flex justify-content-center align-items-center gap-2 px-3'>
                        <h2 className='fw-bold cb'>2.340</h2>
                        <h5 className='cyan1 mb-1'>Total UMKM</h5>
                    </div>
                    <hr className='hr' />
                    <div className='bottom-content d-flex gap-2 align-items-center justify-content-center'>
                        <div className='content-man d-flex gap-2 align-items-center'>
                            <div className='content-man-icon'>
                                <h1 className='cb'><Icon icon="ant-design:man-outlined" /></h1>
                            </div>
                            <div className='content-man-value'>
                                <h4 className='mb-0 cb'>1170</h4>
                                <p className='mb-0'>Laki-Laki</p>
                            </div>
                        </div>
                        <vr className='vr' />
                        <div className='content-woman d-flex gap-2 align-items-center'>
                            <div className='content-man-icon'>
                                <h1 className=' cc'><Icon icon="ant-design:woman-outlined" /></h1>
                            </div>
                            <div className='content-man-value'>
                                <h4 className='mb-0 cc'>1170</h4>
                                <p className='mb-0'>Perempuan</p>
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
                                <p>Skala Usaha</p>
                                <img className='Topleft' src={Topleft} alt="Topleft" />
                                <img className='Topright' src={Topright} alt="Topright" />
                                <img className='Bottomleft' src={Bottomleft} alt="Bottomleft" />
                                <img className='Bottomright' src={Bottomright} alt="Bottomright" />
                                <div className='img-chart position relative'>
                                    <img className='MainChart position relative mt-2' src={MainChart} alt="MainChart" />
                                    <p className='img-chart-text ict-1 fw-bold'>2256</p>
                                    <p className='img-chart-text ict-2 fw-bold'>2256</p>
                                    <p className='img-chart-text ict-3 fw-bold'>2256</p>
                                    <p className='img-chart-text ict-4 fw-bold'>2256</p>
                                </div>
                            </div>
                        </div>
                        <hr className='hr-skala-usaha' />
                        <div className='content-su-bottom'>
                            <div className='su-list'>
                                <p className='fw-bold cb'>788</p>
                                <p>Ultra Micro</p>
                            </div>
                            <vr className="vr-skala-usaha" />
                            <div className='su-list'>
                                <p className='fw-bold cc'>788</p>
                                <p>Micro</p>
                            </div>
                            <vr className="vr-skala-usaha" />
                            <div className='su-list'>
                                <p className='fw-bold cr'>788</p>
                                <p>Menengah</p>
                            </div>
                            <vr className="vr-skala-usaha" />
                            <div className='su-list'>
                                <p className='fw-bold cj'>788</p>
                                <p>Besar</p>
                            </div>
                        </div>
                    </div>
                </div>
           </Col>

            <Col sm={8} className='content-right position-relative'>
                <div className="my-3 svg-maps position-relative">
                    <SvgMaps/>
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
                                <p className='fw-bold cc'>4.864</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>MARKETPLACE</p>
                                <p className='fw-bold cc'>5.265</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>POST SYSTEM</p>
                                <p className='fw-bold cc'>1.256</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>WHATSAPP</p>
                                <p className='fw-bold cc'>1.256</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>WEBSITE</p>
                                <p className='fw-bold cc'>1.256</p>
                            </div>
                            <div className='list-at my-2'>
                                <p className='cb'>OMNI CHANNEL</p>
                                <p className='fw-bold cc'>1.256</p>
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
                                    <p className="fw-bold cc">2.235</p>
                                    <p className="cb">NOVICE</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">2.235</p>
                                    <p className="cb">BEGINNER</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">2.235</p>
                                    <p className="cb">OBSERVER</p>
                                </div>
                                <div className='llu-right'>
                                <img className='Statistic' src={Statistic} alt="Statistic" />
                                </div>
                            </div>
                            <div className='list-lu my-2'>
                                <div className='llu-left'>
                                    <p className="fw-bold cc">2.235</p>
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