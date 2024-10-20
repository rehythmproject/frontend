import { useOutletContext } from 'react-router-dom';
import './FirstSignup.css'

const FirstSignup = () => {
  const [,,,updateUsernm] = useOutletContext();

  const handleUsernm = (e) => {
    updateUsernm(e.target.value);
  }
  return (
    <div className="first_signup"> 
      <div className="sign_input">
        <label htmlFor="username" className='signup_label'>username</label>
        <input type="text" id='username' className='signup_input' placeholder='Jon Do' onChange={handleUsernm}/>        
      </div>
    </div>
  );
}

export default FirstSignup;
