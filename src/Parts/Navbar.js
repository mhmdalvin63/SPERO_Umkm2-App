import '../Css/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Logout from '.././Parts/Logout'

import Umkm from '../Images/logo-umkm.png';
import Navbg from '../Images/bg-navbar.png';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Navigasi() {
  return (
    <Navbar fixed="top" className='Navbar '>
  <Navbar.Brand className='nav-logo' href="#home">
    <img className='Navbg' src={Navbg} alt="Navbg" />
    <div className='nav-absolute'>
      <div className='na-logo'>
        <img className='Umkm' src={Umkm} alt="Umkm" />
      </div>
      <div className='na-menu d-flex gap-4'>
        <NavLink className='' to={'/main'} activeClassName='nav-active' exact>
          <p className='navbar'>MAIN</p>
        </NavLink>
        <NavLink className='' to={'/umkm'} activeClassName='nav-active'>
          <p className='navbar'>UMKM</p>
        </NavLink>
        <NavLink className='' to={'/teknologi'} activeClassName='nav-active'>
          <p className='navbar'>TEKNOLOGI</p>
        </NavLink>
        <NavLink className='' to={'/profile'} activeClassName='nav-active'>
          <h5 className='navbar'><Icon icon="iconoir:profile-circle" /></h5>
        </NavLink>
      </div>
    </div>
  </Navbar.Brand>
  <Navbar.Toggle />
</Navbar>

  );
}

export default Navigasi;