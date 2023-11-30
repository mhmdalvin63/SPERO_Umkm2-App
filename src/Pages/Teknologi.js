import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

import MultipleChartSosmed from '../Parts/MultipleChartSosialMedia';
import '../Css/Teknologi.css'

import IconSosmed from '../Images/IconSosmed.png';
import Instagram from '../Images/instagram.png';
import Facebook from '../Images/Facebook.png';
import Twitter from '../Images/Twitter.png';
import Tiktok from '../Images/Tiktok.png';

const Teknologi = () => {
    return (
      <div className="parent-teknologi">
        <div className="sub-parent-teknologi">
          <div className='d-flex align-items-center gap-2'>
            <img className='IconSosmed' src={IconSosmed} alt="IconSosmed" />
            <p className='fw-bold'>SOSIAL MEDIA</p>
          </div>
            <div className="sosial-media my-3">
                <Row>
                    <Col sm={3}>
                        <div className='list-sosmed gap-3'>
                            <div className='img-chart'>
                            <img className='Instagram' src={Instagram} alt="Instagram" />
                            </div>
                            <div className='total-chart'>
                                <h1>5456</h1>
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
                        <div className='list-sosmed gap-3'>
                            <div className='img-chart'>
                            <img className='Tiktok' src={Tiktok} alt="Tiktok" />
                            </div>
                            <div className='total-chart'>
                                <h1>5456</h1>
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
                        <div className='list-sosmed gap-3'>
                            <div className='img-chart'>
                            <img className='Facebook' src={Facebook} alt="Facebook" />
                            </div>
                            <div className='total-chart'>
                                <h1>5456</h1>
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
                        <div className='list-sosmed gap-3'>
                            <div className='img-chart'>
                            <img className='Twitter' src={Twitter} alt="Twitter" />
                            </div>
                            <div className='total-chart'>
                                <h1>5456</h1>
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
                    </Col>
                </Row>
            </div>

            <div className='chart-sosial-media p-3'>
                <div className='content-csm mx-3'>
                  <h5>Sosial Media</h5>
                  <div className='chart-title gap-3'>
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
                <MultipleChartSosmed />
            </div>

          <div className='d-flex align-items-center gap-2 mt-4'>
            <img className='IconSosmed' src={IconSosmed} alt="IconSosmed" />
            <p className='fw-bold'>SOSIAL MEDIA</p>
          </div>
            <div className="sosial-media my-3">
                <Row>
                    <Col sm={3}>
                        <div className='list-sosmed gap-3'>
                            <div className='img-chart'>
                            <img className='Instagram' src={Instagram} alt="Instagram" />
                            </div>
                            <div className='total-chart'>
                                <h1>5456</h1>
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
                        <div className='list-sosmed gap-3'>
                            <div className='img-chart'>
                            <img className='Tiktok' src={Tiktok} alt="Tiktok" />
                            </div>
                            <div className='total-chart'>
                                <h1>5456</h1>
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
                        <div className='list-sosmed gap-3'>
                            <div className='img-chart'>
                            <img className='Facebook' src={Facebook} alt="Facebook" />
                            </div>
                            <div className='total-chart'>
                                <h1>5456</h1>
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
                        <div className='list-sosmed gap-3'>
                            <div className='img-chart'>
                            <img className='Twitter' src={Twitter} alt="Twitter" />
                            </div>
                            <div className='total-chart'>
                                <h1>5456</h1>
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
                    </Col>
                </Row>
            </div>

            <div className='chart-sosial-media p-3'>
                <div className='content-csm mx-3'>
                  <h5>Sosial Media</h5>
                  <div className='chart-title gap-3'>
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
                <MultipleChartSosmed />
            </div>
        </div>
      </div>
    )
  }
  
  export default Teknologi