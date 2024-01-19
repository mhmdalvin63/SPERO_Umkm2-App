import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Parts/Navbar';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Umkm from './Pages/Umkm';
import Profile from './Pages/Profile';
import Teknologi from './Pages/Teknologi';


function App() {
  return (
    <div className='body'>
      <Routes>
        <Route
          path='/'
          element={<LoginWithNavbar />}
        />
        <Route
          path='/main'
          element={<MainWithNavbar />}
        />
        <Route
          path='/umkm'
          element={<UmkmWithNavbar />}
        />
        <Route
          path='/teknologi'
          element={<TeknologiWithNavbar />}
        />
        <Route
          path='/profile'
          element={<ProfileWithNavbar />}
        />
      </Routes>
    </div>
  );
}

const LoginWithNavbar = () => {
  // Return the Login component without Navbar
  return (
    <>
      <Login />
      {/* Navbar component is not included */}
    </>
  );
};

const MainWithNavbar = () => {
  // Return the Main component with Navbar
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
};

const UmkmWithNavbar = () => {
  // Return the Umkm component with Navbar
  return (
    <>
      <Navbar />
      <Umkm />
    </>
  );
};

const TeknologiWithNavbar = () => {
  // Return the Teknologi component with Navbar
  return (
    <>
      <Navbar />
      <Teknologi />
    </>
  );
};

const ProfileWithNavbar = () => {
  // Return the Profile component with Navbar
  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
};

export default App;
