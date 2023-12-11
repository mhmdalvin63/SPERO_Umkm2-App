import '../Css/Navbar.css';

import Navbar from 'react-bootstrap/Navbar';
import Umkm from '../Images/logo-umkm.png';
import Navbg from '../Images/bg-navbar.png';
import { Link } from 'react-router-dom';

function Navigasi() {
  return (
    <Navbar fixed="top"  className='Navbar '>
        <Navbar.Brand className='nav-logo' href="#home">
            <img className='Navbg' src={Navbg} alt="Navbg" />
            <div className='nav-absolute'>
              <div className='na-logo'>
                <img className='Umkm' src={Umkm} alt="Umkm" />
              </div>
              <div className='na-menu d-flex gap-4'>
                <Link className='' to={'/main'}><p className='navbar'>MAIN</p></Link>
                <Link className='' to={'/umkm'}><p className='navbar'>UMKM</p></Link>
                <Link className='' to={'/teknologi'}><p className='navbar'>TEKNOLOGI</p></Link>
              </div>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        {/* <Navbar.Collapse className="nav-collapse justify-content-end">
          <Navbar.Text className='menu d-flex gap-3 py-3 px-5'>
            <a href=''>HOME</a>
            <a href=''>UMKM</a>
            <a href=''>KUISIONER</a>
            <a href=''>FASILITATOR</a>
          </Navbar.Text>
        </Navbar.Collapse> */}
    </Navbar>
  );
}

export default Navigasi;