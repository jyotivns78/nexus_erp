import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LoginLight from './pages/LoginLight';
import LoginDark from './pages/LoginDark';
import Profile from './pages/Profile';
import Personal from './pages/Personal';
import AdminProfile from './pages/AdminProfile';



function App() {
  return (
   <Router>
    <Routes>
      {/* <Route path='/' element={ <LoginLight /> } /> */}
      
      <Route path='/' element={ <LoginDark /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/personal' element={ <Personal /> } />
      <Route path='/admin' element={ <AdminProfile /> } />
    </Routes>
   </Router>
  );
}

export default App;
