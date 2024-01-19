import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import MultipleChartSosmed from '../Parts/MultipleChartSosialMedia';
import MultipleChartMarketplace from '../Parts/MultipleChartMarketplace';
import Loading from '../Parts/Loading'
import '../Css/Teknologi.css'

import IconSosmed from '../Images/IconSosmed.png';
import Instagram from '../Images/instagram.png';
import Tokopedia from '../Images/Tokopedia.png';
import Facebook from '../Images/Facebook.png';
import Twitter from '../Images/Twitter.png';
import Tiktok from '../Images/Tiktok.png';
import Shopee from '../Images/Shopee.png';
import Lazada from '../Images/Lazada.png';
import Zalora from '../Images/Zalora.png';

import { useEffect, useState } from 'react';
import axios from 'axios';

const Teknologi = () => {
  let urlApi = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(true);
  const [SosialMedia, setSosialMedia] = useState([]);
  const [sosialMediaName, setsosialMediaName] = useState(null);
  const [Marketplace, setMarketplace] = useState([]);
  const [markerPlaceName, setmarkerPlaceName] = useState(null);

    // useEffect(() => {

    //     axios.get(`${urlApi}sosialmedia`)
    //     .then(response => {
    //         console.log('SOSIAL MEDIA TEKNOLOGI',response.data);
    //         setSosialMedia(response.data);
    //     })

    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });

    // }, []);

    useEffect(() => {
      const token = sessionStorage.getItem("jwttoken");

      const fetchData = async () => {
        try {
          setLoading(true); // Set loading menjadi true sebelum permintaan Axios dimulai
  
          const [sosialMediaResponse, MarketplaceResponse] = await Promise.all([
            axios.get(`${urlApi}sosialmedia`, { headers: {"Authorization" : `Bearer ${token}`} }),
            axios.get(`${urlApi}marketplace`, { headers: {"Authorization" : `Bearer ${token}`} }),
          ]);
  
          const socialMediaNames = Object.entries(sosialMediaResponse.data).map(([name, data]) => ({ name, data, }));
          setsosialMediaName(socialMediaNames);

          const marketPlaceNames = Object.entries(MarketplaceResponse.data).map(([name, data]) => ({ name, data, }));
          setmarkerPlaceName(marketPlaceNames);


          console.log('sosialMediaResponse',sosialMediaResponse);
          console.log('MarketplaceResponse',MarketplaceResponse);

          setSosialMedia(sosialMediaResponse.data);
          setMarketplace(MarketplaceResponse.data);
  
          setLoading(false); // Set loading menjadi false setelah semua permintaan Axios selesai
        } catch (error) {
          setLoading(false); // Set loading menjadi false jika terjadi kesalahan
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // Panggil fungsi fetchData untuk memulai permintaan Axios
  
    }, []);

    const evenIndexSocialMedia = sosialMediaName
    ? sosialMediaName.filter((item, index) => index % 2 === 0)
    : [];
    const oddIndexSocialMedia = sosialMediaName
    ? sosialMediaName.filter((item, index) => index % 2 !== 0)
    : [];
    console.log('evenIndexSocialMedia', evenIndexSocialMedia)
    console.log('oddIndexSocialMedia', oddIndexSocialMedia)

    const evenIndexmarketPlace = markerPlaceName
    ? markerPlaceName.filter((item, index) => index % 2 === 0)
    : [];
    const oddIndexmarketPlace = markerPlaceName
    ? markerPlaceName.filter((item, index) => index % 2 !== 0)
    : [];
    console.log('evenIndexmarketPlace', evenIndexmarketPlace)
    console.log('oddIndexmarketPlace', oddIndexmarketPlace)

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    if (loading) {
        return <div style={{ height: '100%', width: '100%' }}><Loading/></div>;
    }
    return (
      <div className="parent-teknologi">
        <div className="sub-parent-teknologi">

          <div className='d-flex align-items-center gap-2'>
            <img className='IconSosmed' src={IconSosmed} alt="IconSosmed" />
            <p className='fw-bold'>SOSIAL MEDIA</p>
          </div>
          <div>
          {/* Render komponen lain atau tampilkan data sesuai kebutuhan */}
        </div>
            <div className="sosial-media my-3">
                <Row>
                {evenIndexSocialMedia.map((evenItem, evenIndex) => (
  <Col sm={3} key={evenIndex}>
    <div className='list-sosmed  d-lg-flex d-block text-lg-start umkm text-center gap-3'>
      <div className='img-chart'>
        <img className='Instagram' src={Instagram} alt="Instagram" />
      </div>
      <div className='total-chart mt-lg-0 mt-2'>
        <h3>{evenItem.data.total_user}</h3>
        <h4 className='cc'>{capitalizeFirstLetter(evenItem.name)}</h4>
      </div>
    </div>
    <Dropdown>
      <Dropdown.Toggle className='dropdown-sosmed my-3' id="dropdown-basic">
        List Daerah
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropdown-menu-sosmed'>
        {oddIndexSocialMedia[evenIndex].data.map((oddItem, oddIndex) => (
            <div key={oddIndex}>
              <p>{evenIndex} - {oddItem.nama_kabupaten} - {oddItem.total_user}</p>
            </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </Col>
))}

                    {/* <Col sm={3}>
                        <div className='list-sosmed  d-lg-flex d-block text-lg-start umkm text-center gap-3'>
                            <div className='img-chart'>
                            <img className='Instagram' src={Instagram} alt="Instagram" />
                            </div>
                            <div className='total-chart mt-lg-0 mt-2'>
                                <h3>{SosialMedia?.instagram?.total_user}</h3>
                                <h4 className='cc'>Instagram</h4>
                            </div>
                        </div>
                        <Dropdown>
      <Dropdown.Toggle className='dropdown-sosmed my-3' id="dropdown-basic">
        List Daerah
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-sosmed'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </Col>
                    <Col sm={3}>
                        <div className='list-sosmed  d-lg-flex d-block text-lg-start umkm text-center gap-3'>
                            <div className='img-chart'>
                            <img className='Tiktok' src={Tiktok} alt="Tiktok" />
                            </div>
                            <div className='total-chart  mt-lg-0 mt-2'>
                                <h3>{SosialMedia?.tiktok?.total_user}</h3>
                                <h4 className='cc'>Tiktok</h4>
                            </div>
                        </div>
                        <Dropdown>
      <Dropdown.Toggle className='dropdown-sosmed my-3' id="dropdown-basic">
        List Daerah
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-sosmed'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </Col>
                    <Col sm={3}>
                        <div className='list-sosmed  d-lg-flex d-block text-lg-start umkm text-center gap-3'>
                            <div className='img-chart'>
                            <img className='Facebook' src={Facebook} alt="Facebook" />
                            </div>
                            <div className='total-chart  mt-lg-0 mt-2'>
                                <h3>{SosialMedia?.facebook?.total_user}</h3>
                                <h4 className='cc'>Facebook</h4>
                            </div>
                        </div>
                        <Dropdown>
      <Dropdown.Toggle className='dropdown-sosmed my-3' id="dropdown-basic">
        List Daerah
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-sosmed'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </Col>
                    <Col sm={3}>
                        <div className='list-sosmed  d-lg-flex d-block text-lg-start umkm text-center gap-3'>
                            <div className='img-chart'>
                            <img className='Twitter' src={Twitter} alt="Twitter" />
                            </div>
                            <div className='total-chart  mt-lg-0 mt-2'>
                                <h3>{SosialMedia?.twitter?.total_user}</h3>
                                <h4 className='cc'>Twitter</h4>
                            </div>
                        </div>
                        <Dropdown>
      <Dropdown.Toggle className='dropdown-sosmed my-3' id="dropdown-basic">
        List Daerah
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-sosmed'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </Col> */}
                </Row>
            </div>

            <div className='chart-sosial-media p-3'>
                <div className='content-csm mx-3'>
                  <div> <h5>Sosial Media</h5> </div>
                  <Form.Select className='w-25' aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                {/* <MultipleChartSosmed /> */}
                  <div className='chart-title justify-content-center my-2 gap-3'>
                    <div className='content-chart-title gap-1'>
                      <div className='oval ig'></div>
                      <p>Instagram</p>
                    </div>
                    <div className='content-chart-title gap-1'>
                      <div className='oval tt'></div>
                      <p>Tiktok</p>
                    </div>
                    <div className='content-chart-title gap-1'>
                      <div className='oval fb'></div>
                      <p>Facebook</p>
                    </div>
                    <div className='content-chart-title gap-1'>
                      <div className='oval x'></div>
                      <p>Twitter</p>
                    </div>
                  </div>
            </div>

          <div className='d-flex align-items-center gap-2 mt-4'>
            <img className='IconSosmed' src={IconSosmed} alt="IconSosmed" />
            <p className='fw-bold'>MARKETPLACE</p>
          </div>
            <div className="sosial-media my-3">
                <Row>
                {evenIndexmarketPlace.map((evenItem, evenIndex) => (
  <Col sm={3} key={evenIndex}>
    <div className='list-sosmed  d-lg-flex d-block text-lg-start umkm text-center gap-3'>
      <div className='img-chart'>
        <img className='Instagram' src={Instagram} alt="Instagram" />
      </div>
      <div className='total-chart mt-lg-0 mt-2'>
        <h3>{evenItem.data.total_user}</h3>
        <h4 className='cc'>{capitalizeFirstLetter(evenItem.name)}</h4>
      </div>
    </div>
    <Dropdown>
      <Dropdown.Toggle className='dropdown-sosmed my-3' id="dropdown-basic">
        List Daerah
      </Dropdown.Toggle>
      <Dropdown.Menu className='dropdown-menu-sosmed'>
        {oddIndexmarketPlace[evenIndex].data.map((oddItem, oddIndex) => (
            <div key={oddIndex}>
              <p>{evenIndex} - {oddItem.nama_kabupaten} - {oddItem.total_user}</p>
            </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </Col>
))}
                    {/* <Col sm={3}>
                        <div className='list-sosmed  d-lg-flex d-block text-lg-start umkm text-center gap-3'>
                            <div className='img-chart'>
                            <img className='Tokopedia' src={Tokopedia} alt="Tokopedia" />
                            </div>
                            <div className='total-chart  mt-lg-0 mt-2'>
                                <h3>{Marketplace?.tokopedia?.total_user}</h3>
                                <h4 className='cc'>Tokopedia</h4>
                            </div>
                        </div>
                        <Dropdown>
      <Dropdown.Toggle className='dropdown-sosmed my-3' id="dropdown-basic">
        List Daerah
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-sosmed'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </Col>
                    <Col sm={3}>
                        <div className='list-sosmed  d-lg-flex d-block text-lg-start umkm text-center gap-3'>
                            <div className='img-chart'>
                            <img className='Shopee' src={Shopee} alt="Shopee" />
                            </div>
                            <div className='total-chart  mt-lg-0 mt-2'>
                                <h3>{Marketplace?.shopee?.total_user}</h3>
                                <h4 className='cc'>Shopee</h4>
                            </div>
                        </div>
                        <Dropdown>
      <Dropdown.Toggle className='dropdown-sosmed my-3' id="dropdown-basic">
        List Daerah
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-sosmed'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </Col>
                    <Col sm={3}>
                        <div className='list-sosmed  d-lg-flex d-block text-lg-start umkm text-center gap-3'>
                            <div className='img-chart'>
                            <img className='Lazada' src={Lazada} alt="Lazada" />
                            </div>
                            <div className='total-chart  mt-lg-0 mt-2'>
                                <h3>{Marketplace?.lazada?.total_user}</h3>
                                <h4 className='cc'>Lazada</h4>
                            </div>
                        </div>
                        <Dropdown>
      <Dropdown.Toggle className='dropdown-sosmed my-3' id="dropdown-basic">
        List Daerah
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-sosmed'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </Col>
                    <Col sm={3}>
                        <div className='list-sosmed  d-lg-flex d-block text-lg-start umkm text-center gap-3'>
                            <div className='img-chart'>
                            <img className='Zalora' src={Zalora} alt="Zalora" />
                            </div>
                            <div className='total-chart  mt-lg-0 mt-2'>
                                <h3>{Marketplace?.bukalapak?.total_user}</h3>
                                <h4 className='cc'>Zalora</h4>
                            </div>
                        </div>
                        <Dropdown>
      <Dropdown.Toggle className='dropdown-sosmed my-3' id="dropdown-basic">
        List Daerah
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu-sosmed'>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                    </Col> */}
                </Row>
            </div>

            <div className='chart-sosial-media p-3'>
                <div className='content-csm mx-3'>
                  <h5>Marketplace</h5>
                  <div className='chart-title gap-3'>
                    <div className='content-chart-title gap-1'>
                      <div className='oval ig'></div>
                      <p>Tokopedia</p>
                    </div>
                    <div className='content-chart-title gap-1'>
                      <div className='oval tt'></div>
                      <p>Shopee</p>
                    </div>
                    <div className='content-chart-title gap-1'>
                      <div className='oval fb'></div>
                      <p>Lazada</p>
                    </div>
                    <div className='content-chart-title gap-1'>
                      <div className='oval x'></div>
                      <p>Zalora</p>
                    </div>
                  </div>
                </div>
                {/* <MultipleChartMarketplace /> */}
            </div>
            
        </div>
      </div>
    )
  }
  
  export default Teknologi