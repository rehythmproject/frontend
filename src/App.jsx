import './App.css';
import FirstSignup from './components/SignupPage/FirstSignup';
import SecondSignup from './components/SignupPage/SecondSignup';
import ThirdSignup from './components/SignupPage/ThirdSignup';
import SignupPage from './components/SignupPage/SignupPage';
import { Route, Routes } from 'react-router-dom';
import FourthSignup from './components/SignupPage/FourthSignup';
import EndSignup from './components/SignupPage/EndSignup';
import LoginPage from './components/LoginPage/LoginPage';
import AvailableModel from './components/AvailableModel/AvailableModel';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>}>
          <Route index element={<FirstSignup/>}/>
          <Route path='second' element={<SecondSignup/>}/>
          <Route path='third' element={<ThirdSignup/>}/>
          <Route path='fourth' element={<FourthSignup />} />
          <Route path='end' element={<EndSignup />} />
        </Route>
        <Route path='/availableModel' element={<AvailableModel />}/>
      </Routes>
    </div>
  );
}

export default App;
