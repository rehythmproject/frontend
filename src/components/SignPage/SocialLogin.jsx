import './SocialLogin.css';

const SocialLogin = () => {
    return(
        <div className='social_login'>
            <div className="or_container">
                <hr className='or_line'/>
                <span className='or_text'>OR</span>
                <hr className='or_line'/>
            </div>
            <button className="social_button"><img className="google_img" src="/images/Google-logo.png" alt="구글 로고" />Signup with Google</button>
        </div>
    );
}

export default SocialLogin;