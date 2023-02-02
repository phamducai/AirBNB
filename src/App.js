import './App.css';
import Home from 'services/Home';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoomList from 'services/RoomList';
import RoomDetail from 'services/RoomDetail';
import Profile from 'services/Profile';
import Login from 'services/Login';
import Signup from 'services/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/list' element={<RoomList />} />
        <Route exact path='/detail' element={<RoomDetail />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
