import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import LoginLight from './pages/LoginLight';



function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={ <Login /> } />
      <Route path='/loginlight' element={ <LoginLight /> } />
    </Routes>
   </Router>
  );
}

export default App;
