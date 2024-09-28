import './SignupButton.css';
import { useNavigate } from 'react-router-dom';

const SignupButton = ({handleNextPage, currentPage, pwd, rpwd}) => {
    const navigate = useNavigate();

    // const handleButtonClick = () => {
    //     const isValid = onclickSignup(); // 인증번호 검증 결과
    //     if (isValid) {
    //         handleNextPage(); // 검증이 성공하면 handleNextPage 실행
    //     }
    // };
    const handleButtonClick = () => {
        if(currentPage === 3){
            if(pwd === ''){
                alert('비밀번호를 입력해주세요.');
                return;
            }else if(rpwd === ''){
                alert('비밀번호 확인을 입력해주세요.');
                return;
            }else if(pwd !== rpwd){
                alert('비밀번호가 일치하지 않습니다.');
                return;
            }
        }


        if (currentPage === 0) {
            //이메일 페이지 이동
            navigate('second'); // 첫 번째 페이지에서 두 번째 페이지로 이동
        } else if (currentPage === 1) {
            //전화번호 페이지 이동
            navigate('third'); // 두 번째 페이지에서 세 번째 페이지로 이동
        } else if (currentPage === 2) {
            //비밀번호 페이지 이동
            navigate('fourth')
        } else if (currentPage === 3) {
            navigate('end');
        }
        handleNextPage(); // 검증이 성공하면 handleNextPage 실행
        //총 페이지보다 적으면 현재 페이지 번호 + 1
    };

    const handleLoginBntClick = () => {
        navigate('/')
    }



    return(
        currentPage === 4 ?
        <button className='login_button' onClick={handleLoginBntClick}>Login</button>
        :
        <button className='next_level_button' onClick={handleButtonClick}>다음으로</button>
    );
}

export default SignupButton;