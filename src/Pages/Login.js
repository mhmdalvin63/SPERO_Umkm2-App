import '../Css/Login.css'
import '../App.css'
import { Icon } from '@iconify/react';

import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import Umkm from '../Images/logo-umkm.png';
import BottomLogin from '../Images/bottom-login.png';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Main = () => {
  let urlApi = process.env.REACT_APP_API_URL;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const usenavigate = useNavigate();

    // const currentURL = window.location.href;
    // console.log('CURRENTTTTTTTTTTTTT:', currentURL);
    // let urlApi;
    // if (currentURL.includes('172.16.16.3')) {
    //   urlApi = process.env.REACT_APP_API_URL_HTTP;
    // } else if (currentURL.includes('dashboard.par.co.id')) {
    //   urlApi = process.env.REACT_APP_API_URL;
    // } else {
    //   urlApi = process.env.REACT_APP_API_URL;
    // }
    // if (currentURL.includes('172.16.16.3:3000')) {
    //     urlApi = process.env.REACT_APP_API_URL_HTTP;
    //   } else {
    //     urlApi = process.env.REACT_APP_API_URL;
    //   }

    const proceedLoginUsingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
          setIsLoading(true); // Set loading to true when starting the login process
          setTimeout(() => {
            // Set isLoading to false after 3 seconds to mimic processing
            setIsLoading(false);
      
            // Additional logic after successful login
            console.log('Login successful!');
          }, 5000);
    
          let inputobj = {
            "email": email,
            "password": password
          };
    
          fetch(`${urlApi}dashboard/login`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(inputobj)
          })
            .then((res) => {
              if (res.status === 401) {
                setShowNotification(true);
                sessionStorage.removeItem('jwttoken');
                Navigate('/');
                window.location.href = '/';
              }
              return res.json();
            })
            .then((resp) => {
              console.log(resp);
              if (Object.keys(resp).length === 0) {
                setShowNotification(true);
              } else {
                sessionStorage.setItem('jwttoken', resp.access_token);
                usenavigate('/main');
              }
            })
            .catch((err) => {
              if (err !== 'Unauthorized') {
                setShowNotification(true);
              }
            })
            .finally(() => {
              setIsLoading(false); // Set loading to false when the login process is complete
            });
        }
      };

    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            setShowNotification(true);
        }
        if (password === '' || password === null) {
            result = false;
            setShowNotification(true);
        }
        return result;
    };

    const closeNotification = () => {
        setShowNotification(false);
    };
    useEffect(() => {
        const notificationTimeout = setTimeout(() => {
          closeNotification();
        }, 3000);
      
        return () => clearTimeout(notificationTimeout);
      }, [showNotification]);

    return (
      <div className="parent">
        <div className='sub-parent'>
        <Row className='justify-content-center'>
           <Col sm={8}>
                <div className='title text-center'>
                    <img className='Umkm' src={Umkm} alt="Umkm" />
                    <h5 className='cb my-5 fw4'>USER LOGIN</h5>
                </div>

                <Form onSubmit={proceedLoginUsingAPI} className="container">
                <div className="form-group input-group-lg mt-3" >
                                <label><p>User Name <span className="errmsg text-red">*</span></p></label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control my-3 form-login" size="lg"></input>
                            </div>
                            <div className="form-group input-group-lg mt-4" >
                                <label><p>Password <span className="errmsg text-red">*</span></p></label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control my-3 form-login" size="lg"></input>
                            </div>
                {/* <Form.Group className="mb-3 form-login" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3 form-login" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}

                <div className='button-submit-login d-flex justify-content-center'>
                <button type="submit" className="button-submit text-white" onClick={proceedLoginUsingAPI} disabled={isLoading}> {isLoading ? 'Memproses Login....' : 'Login'}</button>
                    {/* <Link to='/main'>
                        <Button variant="primary" type="submit" className='button-submit'>
                            <p>LOGIN</p>
                        </Button>
                    </Link> */}
                </div>
                </Form>
                {showNotification && (
                    <div className="custom-alert">
                    <p>Login gagal, pastikan email dan password benar</p>
                    {/* <button onClick={closeNotification}>Close</button> */}
                    </div>
                )}

                {/* <img className='BottomLogin' src={BottomLogin} alt="BottomLogin" /> */}
                
           </Col>
        </Row>
        </div>
      </div>
    )
  }
  
  export default Main