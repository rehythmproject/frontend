import './App.css';
import FirstSignup from './components/SignPage/FirstSignup';
import SecondSignup from './components/SignPage/SecondSignup';
import ThirdSignup from './components/SignPage/ThirdSignup';
import SignupPage from './pages/SignupPage';
import { Route, Routes } from 'react-router-dom';
import FourthSignup from './components/SignPage/FourthSignup';
import EndSignup from './components/SignPage/EndSignup';
import LoginPage from './pages/LoginPage';
import AvailableModel from './pages/AvailableModel';
import UseModelList from './pages/UseModelList';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' >
          <Route path='/' element={<LoginPage />} /> {/**/}
            <Route path='signup' element={<SignupPage/>}>
              <Route path='step1' element={<FirstSignup/>}/>
              <Route path='step2' element={<SecondSignup/>}/>
              <Route path='step3' element={<ThirdSignup/>}/>
              <Route path='step4' element={<FourthSignup />} />
              <Route path='finish' element={<EndSignup />} />
            </Route>
        </Route>
        <Route path='/availableModel' element={<AvailableModel />}/>
        <Route path='/useModelList' element={<UseModelList />} />
      </Routes>
    </div>
  );
}

export default App;
