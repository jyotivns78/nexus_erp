import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import LoginLight from './pages/LoginLight';
import Profile from './pages/Profile';
import Personal from './pages/Personal';
import Education from './pages/Education';


function App() {
  return (
   <Router>
    <Routes>
      {/* <Route path='/' element={ <LoginLight /> } /> */}
      {/* <Route path='/dark' element={ <Login /> } /> */}
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/personal' element={ <Personal /> } />
      <Route path='/education' element={ <Education /> } />
    </Routes>
   </Router>
  );
}

export default App;
