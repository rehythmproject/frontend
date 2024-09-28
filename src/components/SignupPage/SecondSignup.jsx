import './FirstSignup.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignBack from '../SignBack';
import SignupTitle from './SignupTitle';
import SignupButton from './SignupButton';
import SocialLogin from './SocialLogin';
import ProgressBar from './ProgressBar';

const SecondSignup = () => {
  //일단 냅다 박음, 나중에 progress 부분 수정 필요
  const [currentPage, setCurrentPage] = useState(1);//첫 페이지
  const totalPage = 4;//전체 페이지 수

  const handleNextPage = () => {
    if(currentPage < totalPage){
      setCurrentPage(currentPage + 1);
      console.log(currentPage);
    }
  };

  const [cerconBtn, setCerconBtn] = useState(false);
  const handleCerconButton = () => {
    setCerconBtn(true);
  }
  return (
    <div className="second_signup">
      <div className="sign_input">
        <label htmlFor="email" className='signup_label'>Email  <Link style={{marginLeft:'5px',fontSize:'13px', color: cerconBtn ? '#01B763' :'#CE7FFF', cursor:'pointer'}} onClick={handleCerconButton}>인증확인</Link><span style={{fontWeight:400, fontSize:'13px'}}>(클릭하면 해당 이메일로 인증메일이 발송됩니다.)</span></label>
        <input type="text" id='email' className='signup_input' placeholder='ex) example@email.com' />
      </div>
    </div>
  );
}

export default SecondSignup;
