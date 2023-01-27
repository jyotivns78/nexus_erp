import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LoginLight from './pages/LoginLight';
import LoginDark from './pages/LoginDark';
import Profile from './pages/Profile';
import Personal from './pages/Personal';
import AdminProfile from './pages/AdminProfile';
import MyProfile from './pages/MyProfile';
import AccountSetting from './pages/AccountSetting';
import Signup from './pages/Signup';


function App() {
  return (
   <Router>
    <Routes>
      {/* <Route path='/' element={ <LoginLight /> } /> */}
      
      <Route path='/' element={ <LoginDark /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/personal' element={ <Personal /> } />
      <Route path='/admin' element={ <AdminProfile /> } />
      <Route path='/myprofile' element={ <MyProfile /> } />
      <Route path='/mysetting' element={ <AccountSetting /> } />
      <Route path='/signup' element={ <Signup /> } />
    </Routes>
   </Router>
  );
}

export default App;
