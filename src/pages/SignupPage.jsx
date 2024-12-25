import { createContext, useContext, useState } from 'react';
import './SignupPage.css'
import { Outlet, useNavigate } from 'react-router-dom';
import ProgressBar from '../components/SignPage/ProgressBar';
import SignBack from '../components/SignBack';
import SignupTitle from '../components/SignPage/SignupTitle';
import SignupButton from '../components/SignPage/SignupButton';
import SocialLogin from '../components/SignPage/SocialLogin';
import Server from '../utils/API';

export const signFormContext = createContext();

function SignupPage() {
  const navigate = useNavigate();

  const [signData, setSignData] = useState({
    usernm: '',
    email: '',
    phone: '',
    pwd: '',
    rpwd: ''
  });

  const [currentPage, setCurrentPage] = useState(0);//첫 페이지
  const totalPage = 4;//전체 페이지 수

  const [emailcheck, setEmailcheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);

  const checkEmail = (check) => {
    setEmailcheck(check);
  }

  const checkPhone = (check) => {
    setPhoneCheck(check);
  }

  const sendData = async () => {
    //username
    Server.post('/auth/signup/step1', {
      username: signData.usernm,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res.data);

      //email
      return Server.post('/auth/signup/step2', {
        email: signData.email,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    })
    .then((res) => {
      console.log(res.data);

      //phone
      return Server.post('/auth/signup/step3', {
        phone: signData.phone,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    })
    .then((res) => {
      console.log(res.data);

      //password
      return Server.post('/auth/signup/step4', {
        password: signData.pwd,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    })
    .then((res) => {
      console.log(res.data);

      // 모든 요청이 성공하면 페이지 이동
      navigate('finish');
    })
    .catch((err) => {
      console.error(err.response.data);
    });   
  }




  return (
    <signFormContext.Provider value={{signData, setSignData, checkEmail, checkPhone, setCurrentPage, sendData }}>
    {currentPage === 4 ? (//마지막 페이지일때
      <div className="signup_page">
        <div className="signup_main">
        <SignBack/>
        <div className='signup_right_items'>
          <div className='sign_input_container'>
            <Outlet />
            <SignupButton currentPage={currentPage}/>
          </div>
        </div>
        </div>
        <div className="signup_footer">
          <ProgressBar currentPage={currentPage} totalPage={totalPage} />
          <p className="terms_and_conditions">이 계정에 회원가입함으로써 <span style={{color:'#9022FF', fontWeight:'600'}}>이용약관</span> 및 <span style={{color:'#9022FF', fontWeight:'600'}}>개인정보 보호 정책에 동의합니다.</span></p>
        </div>
    </div>
    ) : (
    <div className="signup_page">
        <div className="signup_main">
        <SignBack/>
        <div className='signup_right_items'>
          <SignupTitle />
          <div className='sign_input_container'>
            <Outlet/>
            <SignupButton currentPage={currentPage} pwd={currentPage === 3 ? signData.pwd : ''} rpwd={currentPage === 3 ? signData.rpwd : ''} usernm={signData.usernm} emailcheck={emailcheck} phoneCheck={phoneCheck} sendData={sendData}/>
            <SocialLogin />
          </div>
        </div>
        </div>
        <div className="signup_footer">
          <ProgressBar currentPage={currentPage} totalPage={totalPage} />
          <p className="terms_and_conditions">이 계정에 회원가입함으로써 <span style={{color:'#9022FF', fontWeight:'600'}}>이용약관</span> 및 <span style={{color:'#9022FF', fontWeight:'600'}}>개인정보 보호 정책에 동의합니다.</span></p>
        </div>
    </div>
    )}
    </signFormContext.Provider>
  );
}

export default SignupPage;
