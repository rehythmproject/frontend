import './LoginPage.css'
import SignBack from '../components/SignBack';
import SocialLogin from '../components/SignPage/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginButton = () => {
        navigate('/availableModel');
    }

  return (
    <div className="login_page">
        <div className="signin_main">
        <SignBack/>
        <div className='signin_right_items'>
            <div className='signin_title_container'>
                <h1 className='signin_text'>Login</h1>
                <p className='signin_desc'>당신의 정보를 입력해주세요.</p>
            </div>
          <div className='sign_input_container'>
            <div className='sign_input'>
                <label htmlFor="email" className='signin_label'>Email</label>
                <input type="text" id='email' className='signin_input' placeholder='ex) example@email.com' />
                <label htmlFor="password" className='signin_label' style={{ marginTop:'15px'}}>Password <span style={{color:'#969BA7', fontWeight:400, fontSize:'14px', marginLeft:'5px'}}>(20자 이내)</span></label>
                <input type="password" id='password' className='signin_input' maxLength={20} placeholder='Enter your password' />
          </div>
            <button className='login_button' onClick={handleLoginButton}>Log in</button>
            <SocialLogin />
            <p style={{color:'#969BA7', margin: 'auto', fontSize: '14px', paddingTop: '20px'}}>계정이 없으신가요? <Link style={{color:'#B948FF'}} to='/auth/signup/step1' >회원가입</Link></p>
          </div>
        </div>
        </div>
        <div className="signin_footer">
          <p className="terms_and_conditions">이 계정에 회원가입함으로써 <span style={{color:'#9022FF', fontWeight:'600'}}>이용약관</span> 및 <span style={{color:'#9022FF', fontWeight:'600'}}>개인정보 보호 정책에 동의합니다.</span></p>
        </div>
    </div>
  );
}

export default LoginPage;
