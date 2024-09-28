import { useState } from 'react';
import './SignupPage.css'
import { Outlet } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import SignBack from '../SignBack';
import SignupTitle from './SignupTitle';
import SignupButton from './SignupButton';
import SocialLogin from './SocialLogin';

function SignupPage() {
  //일단 냅다 박음, 나중에 progress 부분 수정 필요
  const [currentPage, setCurrentPage] = useState(0);//첫 페이지
  const totalPage = 4;//전체 페이지 수
  const [pwd, setPwd] = useState('');  // 비밀번호 상태
  const [rpwd, setRpwd] = useState(''); // 비밀번호 확인 상태

  const handleNextPage = () => {//토탈보다 적으면 현재페이지 +1
    console.log(currentPage);
    if(currentPage < totalPage){
      setCurrentPage(currentPage + 1);
    }
  };

  const updatePassword = (newPwd, newRpwd) => {
    setPwd(newPwd);
    setRpwd(newRpwd);
  };

  return (
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
            <Outlet context={[ pwd, rpwd, updatePassword ]}/>
            <SignupButton handleNextPage={handleNextPage} currentPage={currentPage} pwd={currentPage === 3 ? pwd : ''} rpwd={currentPage === 3 ? rpwd : ''}/>
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
  );
}

export default SignupPage;
