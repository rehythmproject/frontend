import './App.css';
import FirstSignup from './components/SignPage/FirstSignup';
import SecondSignup from './components/SignPage/SecondSignup';
import ThirdSignup from './components/SignPage/ThirdSignup';
import SignupPage from './pages/SignupPage';
import { Route, Routes,Navigate } from 'react-router-dom';
import FourthSignup from './components/SignPage/FourthSignup';
import EndSignup from './components/SignPage/EndSignup';
import LoginPage from './pages/LoginPage';
import AvailableModel from './pages/AvailableModel';
import UseModelPage from './pages/UseModelPage';
import RecordModel from './pages/RecordModel';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path='auth' >
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage/>}>
            <Route path='step1' element={<FirstSignup/>} />
            <Route path='step2' element={<SecondSignup/>} />
            <Route path='step3' element={<ThirdSignup/>}/>
            <Route path='step4' element={<FourthSignup />} />
            <Route path='finish' element={<EndSignup />} />
          </Route>
        </Route>
        <Route path='availableModel' element={<AvailableModel />}/>
        <Route path='useModelPage' element={<UseModelPage />} />
        <Route path='useModelPage/recordModel/:code' element={<RecordModel />}/>
        {/* <Route path='recordModel' element={<RecordModel />}/> */}

      </Routes>
    </div>
  );
}

export default App;
