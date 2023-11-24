import '../Css/Main.css'
import '../App.css'
import { Icon } from '@iconify/react';

import Statistic from '../Images/statistic.png'

import SvgMaps from '../Parts/SvgMaps'

import Topleft from '../Images/top-left.png'
import Topright from '../Images/top-right.png'
import Bottomleft from '../Images/bottom-left.png'
import Bottomright from '../Images/bottom-right.png'

const Main = () => {
    return (
      <div className="parent">
        <div className='sub-parent'>

            <div className='totalBorder' id='total-umkm'>
                <div className='top-border'></div>
                <div className='bottom-border'></div>
                <div className='content d-flex justify-content-center align-items-center gap-2 px-3'>
                    <h2 className='fw-bold blue1'>2.340</h2>
                    <h5 className='cyan1 mb-1'>Total UMKM</h5>
                </div>
                <hr className='hr' />
                <div className='bottom-content d-flex gap-2 align-items-center justify-content-center'>
                    <div className='content-man d-flex gap-2 align-items-center'>
                        <div className='content-man-icon'>
                            <h1><Icon icon="ant-design:man-outlined" /></h1>
                        </div>
                        <div className='content-man-value'>
                            <h4 className='mb-0'>1170</h4>
                            <p className='mb-0'>Laki-Laki</p>
                        </div>
                    </div>
                    <vr className='vr' />
                    <div className='content-woman d-flex gap-2 align-items-center'>
                        <div className='content-man-icon'>
                            <h1><Icon icon="ant-design:woman-outlined" /></h1>
                        </div>
                        <div className='content-man-value'>
                            <h4 className='mb-0'>1170</h4>
                            <p className='mb-0'>Perempuan</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="svg-maps">
                <SvgMaps/>
            </div>

            <div className='totalBorder' id='skala-usaha'>
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
                        </div>
                    </div>
                    <hr className='hr-skala-usaha' />
                    <div className='content-su-bottom'>
                        <div className='su-list'>
                            <p>788</p>
                            <p>Ultra Micro</p>
                        </div>
                        <vr className="vr-skala-usaha" />
                        <div className='su-list'>
                            <p>788</p>
                            <p>Micro</p>
                        </div>
                        <vr className="vr-skala-usaha" />
                        <div className='su-list'>
                            <p>788</p>
                            <p>Menengah</p>
                        </div>
                        <vr className="vr-skala-usaha" />
                        <div className='su-list'>
                            <p>788</p>
                            <p>Besar</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='totalBorder' id='adopsi-teknologi'>
                <div className='top-border'></div>
                <div className='bottom-border'></div>
                <div className='content-adopsi-teknologi'>
                    <div className='at-header gap-3'>
                        <p>ini icon</p>
                        <p>Adopsi Teknologi</p>
                    </div>
                    <hr />
                    <div className='at-content'>
                        <div className='list-at my-2'>
                            <p>SOSIAL MEDIA</p>
                            <p>4.864</p>
                        </div>
                        <div className='list-at my-2'>
                            <p>MARKETPLACE</p>
                            <p>5.265</p>
                        </div>
                        <div className='list-at my-2'>
                            <p>POST SYSTEM</p>
                            <p>1.256</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='totalBorder' id='level-umkm'>
                <div className='top-border'></div>
                <div className='bottom-border'></div>
                <div className='content-level-umkm'>
                    <div className='lu-header gap-3'>
                        <p>ini icon</p>
                        <p>Level UMKM</p>
                    </div>
                    <hr />
                    <div className='lu-content'>
                        <div className='list-lu my-2'>
                            <div className='llu-left'>
                                <p>2.235</p>
                                <p>NOVICE</p>
                            </div>
                            <div className='llu-right'>
                            <img className='Statistic' src={Statistic} alt="Statistic" />
                            </div>
                        </div>
                        <div className='list-lu my-2'>
                            <div className='llu-left'>
                                <p>2.235</p>
                                <p>NOVICE</p>
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
    )
  }
  
  export default Main