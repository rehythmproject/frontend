import './FirstSignup.css'
import { useState } from 'react';
import { Link,useOutletContext } from 'react-router-dom';

const SecondSignup = () => {
  const [, , , , checkEmail] = useOutletContext();

  const [email, setEmail] = useState('');
  const [cerconBtn, setCerconBtn] = useState(false);
  
  const validateEmail = (email) => {
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleCerconButton = () => {
    if(email === ''){
      alert('이메일을 입력해주세요.');
      return;
    }
    if(!validateEmail(email)){
      setCerconBtn(false);
      alert('잘못된 이메일 형식입니다.');
      setEmail('');
    }
    else {
      setCerconBtn(true);
      alert('이메일 인증이 완료되었습니다.');
      checkEmail(true);
    }
  }
  return (
    <div className="second_signup">
      <div className="sign_input">
        <label htmlFor="email" className='signup_label'>Email  <Link style={{marginLeft:'5px',fontSize:'13px', color: cerconBtn ? '#01B763' :'#CE7FFF', cursor:'pointer'}} onClick={handleCerconButton}>인증확인</Link><span style={{fontWeight:400, fontSize:'13px'}}>(클릭하면 해당 이메일로 인증메일이 발송됩니다.)</span></label>
        <input type="text" id='email' className='signup_input' placeholder='ex) example@email.com' value={email} onChange={handleEmail}/>
      </div>
    </div>
  );
}

export default SecondSignup;
