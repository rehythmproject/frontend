import './Header.css';

const Header = () => {
    return (
        <div className="header_container">
            <img src="/images/Re듬.png" alt="logo" className="reduem_logo" style={{ width:'110px'}}/>
            <div className="navigation_container">
                <ul className='navi_list'>
                    <li className='navi'><img src="/images/사용가능한모델.png" style={{ width:'25px', height:'25px' }}/><span className='navi_title' style={{color:'#9022FF'}}>사용가능한 모델</span></li>
                    <li className='navi'><img src="/images/사용한목록.png" style={{ width:'25px', height:'25px' }}/><span className='navi_title'>사용한 목록</span></li>
                    <li className='navi'><img src="/images/사용기록.png" style={{ width:'25px', height:'25px' }}/><span className='navi_title'>사용기록</span></li>
                    <li className='navi'><img src="/images/금액.png" style={{ width:'25px', height:'25px' }}/><span className='navi_title'>금액</span></li>
                    <li className='navi'><img src="/images/프로젝트매니저.png" style={{ width:'25px', height:'25px' }}/><span className='navi_title'>프로젝트 매니저</span></li>
                </ul>
            </div>
            <div className="setup_container">
                <ul className="setup_list">
                    <li className="setup_item"><img src="./images/bell.png" alt="" /></li>
                    <li className="setup_item"><img src="./images/profile.png" alt="" /></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;