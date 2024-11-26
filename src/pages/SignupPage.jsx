import { createContext, useContext, useState } from 'react';
import './SignupPage.css'
import { Outlet } from 'react-router-dom';
import ProgressBar from '../components/SignPage/ProgressBar';
import SignBack from '../components/SignBack';
import SignupTitle from '../components/SignPage/SignupTitle';
import SignupButton from '../components/SignPage/SignupButton';
import SocialLogin from '../components/SignPage/SocialLogin';

const signFormContext = createContext();

function SignupPage() {
  const signForm = useContext(signFormContext);

  const [signData, setSignData] = useState({
    usernm: '',
    email: '',
    phone: '',
    pwd: '',
    rpwd: ''
  })
  //일단 냅다 박음, 나중에 progress 부분 수정 필요
  const [currentPage, setCurrentPage] = useState(0);//첫 페이지
  const totalPage = 4;//전체 페이지 수

  const [emailcheck, setEmailcheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);

  const handleNextPage = () => {//토탈보다 적으면 현재페이지 +1
    console.log(currentPage);
    if(currentPage < totalPage){
      setCurrentPage(currentPage + 1);
    }
  };

  

  const checkEmail = (check) => {
    setEmailcheck(check);
  }

  const checkPhone = (check) => {
    setPhoneCheck(check);
  }

  const updatePassword = (newPwd, newRpwd) => {
    setPwd(newPwd);
    setRpwd(newRpwd);
  };



  return (
    <signFormContext.Provider value={{signData, setSignData, updatePassword, updateUsernm, checkEmail, checkPhone, setCurrentPage }}>
    currentPage === 4 ? (//마지막 페이지일때
      <div className="signup_page">
        <div className="signup_main">
        <SignBack/>
        <div className='signup_right_items'>
          <div className='sign_input_container'>
            <Outlet />
            <SignupButton handleNextPage={handleNextPage} currentPage={currentPage}/>
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
            <SignupButton handleNextPage={handleNextPage} currentPage={currentPage} pwd={currentPage === 3 ? pwd : ''} rpwd={currentPage === 3 ? rpwd : ''} usernm={usernm} emailcheck={emailcheck} phoneCheck={phoneCheck} />
            <SocialLogin />
          </div>
        </div>
        </div>
        <div className="signup_footer">
          <ProgressBar currentPage={currentPage} totalPage={totalPage} />
          <p className="terms_and_conditions">이 계정에 회원가입함으로써 <span style={{color:'#9022FF', fontWeight:'600'}}>이용약관</span> 및 <span style={{color:'#9022FF', fontWeight:'600'}}>개인정보 보호 정책에 동의합니다.</span></p>
        </div>
    </div>
    )
    </signFormContext.Provider>
  );
}

export default SignupPage;
