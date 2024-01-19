import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Profile1 from '../Images/Profile.png';
import '../Css/Profile.css'


const Profile = () => {
    const handleLogout = () => {
        // Perform logout logic here
        // For example, clear user session or token
         // Clear user token from localStorage (or your preferred storage)
            sessionStorage.removeItem('jwttoken');
    
        // Redirect to the login page or another appropriate page
        window.location.href = '/'; // You can use React Router for better routing
      };
    return (
        <div>
            <div className="banner">
        </div>
        <Container className="container" id="content">
        <Row className="row justify-content-md-start justify-content-center">
            <Col md={4} xs={6} className="p-2 ">
                {/* <img className="orang" src="{{asset('../images/orang.png')}}" alt="orang"> */}
                <img className='Profile1' src={Profile1} alt="Profile1" />
                <>
                <a className="btn w-100 mt-1 ms-auto text-white" href="#" role="button" style={{ backgroundColor: '#0166FE ' }} onClick={handleLogout}>
                LOG OUT
                </a>
                </>
                {/* <a className="btn w-100 mt-1 ms-auto text-white" href="#" role="button" style="background-color: #ED1B24;">LOG OUT</a> */}
            </Col>
            <Col md={8} className="p-2 my-md-auto ">
                <h4 className="text-md-start text-center text-white">JOHN DOE</h4>
                <div className="contact_profile justify-content-md-start justify-content-center d-flex gap-3 align-items-center text-white">
                    <p className="mb-0">johndoe12@gmail.com</p>
                    {/* <div className="vr" style="width: .15rem;"></div> */}
                    <div className="vr-profile"></div>
                    <p className="mb-0">0857 4859 5623</p>
                </div>

                <div className="address_profile mt-5 text-black">
                    <h4>Address :</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis perspiciatis assumenda ut minima eos quis a quidem ipsum omnis.</p>
                </div>
            </Col>
        </Row>
        </Container>
        </div>
    )
  }
  
  export default Profile