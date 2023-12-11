import '../Css/Login.css'
import '../App.css'
import { Icon } from '@iconify/react';

import { Link } from 'react-router-dom';

import Umkm from '../Images/logo-umkm.png';
import BottomLogin from '../Images/bottom-login.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Main = () => {
    return (
      <div className="parent">
        <div className='sub-parent'>
        <Row className='justify-content-center'>
           <Col sm={8}>
                <div className='title text-center'>
                    <img className='Umkm' src={Umkm} alt="Umkm" />
                    <h5 className='cb my-5 fw4'>USER LOGIN</h5>
                </div>

                <Form>
                <Form.Group className="mb-3 form-login" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3 form-login" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className='button-submit-login d-flex justify-content-center'>
                    <Link to='/main'>
                        <Button variant="primary" type="submit" className='button-submit'>
                            <p>LOGIN</p>
                        </Button>
                    </Link>
                </div>
                </Form>

                <img className='BottomLogin' src={BottomLogin} alt="BottomLogin" />
                
           </Col>
        </Row>
        </div>
      </div>
    )
  }
  
  export default Main