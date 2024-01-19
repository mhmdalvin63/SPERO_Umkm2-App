// import React from 'react';

// Font Awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';


function App() {
  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear user session or token
     // Clear user token from localStorage (or your preferred storage)
        sessionStorage.removeItem('jwttoken');

    // Redirect to the login page or another appropriate page
    window.location.href = '/'; // You can use React Router for better routing
  };

  return (
    <div className='button-logout'>
      <div className='d-flex align-items-center justify-content-center'>
        
        <button onClick={handleLogout}> Logout</button>
      </div>
    </div>
  );
}

export default App;
