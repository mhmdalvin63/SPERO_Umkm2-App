import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Umkm from '../Images/logo-umkm.png';
import BottomLogin from '../Images/bottom-login.png';

import '../Css/Login.css';
import '../App.css';

const Main = () => {
  let urlApi = process.env.REACT_APP_API_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const usenavigate = useNavigate();

  const proceedLoginUsingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
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
            usenavigate('/');
          }
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            setShowNotification(true);
          } else {
            sessionStorage.setItem('jwttoken', resp.data.access_token.token);
            console.log('resp.data.access_token.token', resp.data.access_token.token);
            usenavigate('/main');
          }
        })
        .catch((err) => {
          if (err !== 'Unauthorized') {
            setShowNotification(true);
          }
        })
        .finally(() => {
          setIsLoading(false);
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
    <div className="parent-login">
      <div className='sub-parent-login'>
        <Row className='justify-content-center h-100'>
          <Col sm={8} xxl={10} className="my-auto">
            <div className='title text-center'>
              <img className='Umkm' src={Umkm} alt="Umkm" />
              <h5 className='cb my-5 fw4'>USER LOGIN</h5>
            </div>

            <Form onSubmit={proceedLoginUsingAPI} className="container">
              <div className="form-group input-group-lg mt-3">
                <label><p>User Name <span className="errmsg text-red">*</span></p></label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control my-3 form-login" size="lg"></input>
              </div>
              <div className="form-group input-group-lg mt-4">
                <label><p>Password <span className="errmsg text-red">*</span></p></label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control my-3 form-login" size="lg"></input>
              </div>
              <div className='button-submit-login d-flex justify-content-center'>
                <button type="submit" className="button-submit text-white" disabled={isLoading}> {isLoading ? 'Memproses Login....' : 'Login'}</button>
              </div>
            </Form>

            {showNotification && (
              <div className="custom-alert">
                <p>Login gagal, pastikan email dan password benar</p>
              </div>
            )}

            <img className='BottomLogin' src={BottomLogin} alt="BottomLogin" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Main;
