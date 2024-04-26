import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Home';
import LoginPage from './Components/Authentication/LoginPage';
import SignupPage from './Components/Authentication/SignupPage';

function App() {
  return (
  <>

<Routes>

  <Route path='/' element={<Home />} />
  <Route path='/login' element={<LoginPage />} />
  <Route path='/signup' element={<SignupPage/>} />
</Routes>
    </>
  );
}

export default App;
