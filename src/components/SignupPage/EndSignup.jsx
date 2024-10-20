import './EndSignup.css';


const EndSignup = () => {
    return(
        <div className="end_signup">
            <div className="hello_img"><img src="/images/congratulations.png" alt="hello" style={{padding:'25px'}}/></div>
            <h1 className='end_signup_title'>Congratulations!</h1>
            <p className='end_signup_desc'>당신의 Re:듬 계정을 생성하신 것을 진심으로 축하드립니다.</p>
            <p className='end_signup_desc'>앞으로 Re:듬 서비스를 통해 <span style={{color: '#9022FF'}}>일잘러</span>가 되어보세요!</p>
        </div>
    );
}

export default EndSignup;