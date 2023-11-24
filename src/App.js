import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Parts/Navbar';
import Main from './Pages/Main';
import Umkm from './Pages/Umkm';
import Teknologi from './Pages/Teknologi';


function App() {
  return (
    <div className='body'>
    <Navbar />
      <Routes>
        <Route path='/main' element={<Main />}/>
        <Route path='/umkm' element={<Umkm />}/>
        <Route path='/teknologi' element={<Teknologi />}/>
      </Routes>
    </div>
  );
}

export default App;
