import './FourthSignup.css'
import { signFormContext } from '../../pages/SignupPage';
import { useContext } from 'react';

const FourthSignup = () => {
  const {signData, setSignData} = useContext(signFormContext);

  const handlePwd = (e) => {
    setSignData({
      ...signData,
      pwd: e.target.value
    })
  }
  
  const handleRpwd = (e) => {
    setSignData({
      ...signData,
      rpwd: e.target.value
    });
  }

  return (
    <div className="fourth_signup">
          <div className='sign_input'>
            <label htmlFor="password" className='signup_label'>Password <span style={{color:'#969BA7', fontWeight:400, fontSize:'14px', marginLeft:'5px'}}>(20자 이내)</span></label>
            <input type="password" id='password' className='signup_input' maxLength={20} placeholder='Enter your password' onChange={handlePwd} />
            <label htmlFor="password2" className='signup_label' style={{ marginTop:'15px'}}>RePassword</label>
            <input type="password" id='password2' className='signup_input'maxLength={20} placeholder='Enter your password' onChange={handleRpwd}/>
          </div>
      </div>
  );
}

export default FourthSignup;
