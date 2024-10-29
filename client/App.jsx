//https://developer.tech.yandex.ru/services/3

import './style.scss';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

export default () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/admin' element={<AdminPage />}/>
      </Routes>
    </div>
  );
}