import './FirstSignup.css'
import { useContext } from 'react';
import { signFormContext } from '../../pages/SignupPage'

const FirstSignup = () => {
  const { signData, setSignData } = useContext(signFormContext);

  const handleUsername = (e) => {
    setSignData({
      ...signData,
      usernm: e.target.value
    })
  }
  return (
    <div className="first_signup"> 
      <div className="sign_input">
        <label htmlFor="username" className='signup_label'>username</label>
        <input type="text" id='username' className='signup_input' placeholder='Jon Do' onChange={handleUsername}/>        
      </div>
    </div>
  );
}

export default FirstSignup;
