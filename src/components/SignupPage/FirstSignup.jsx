import './FirstSignup.css'

const FirstSignup = () => {
  return (
    <div className="first_signup"> 
      <div className="sign_input">
        <label htmlFor="username" className='signup_label'>username</label>
        <input type="text" id='username' className='signup_input' placeholder='Jon Do' />        
      </div>
    </div>
  );
}

export default FirstSignup;
