import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header_container">
            <Link to={'/availableModel'}><img src="/images/Re듬.png" alt="logo" className="reduem_logo" style={{ width:'110px'}}/></Link>
            <div className="navigation_container">
                <ul className='navi_list'>
                    <NavLink to="/availableModel" style={{textDecoration:'none'}}>
                        {({isActive}) => (
                        <li className='navi'>
                            <img src={isActive ? "/images/사용가능한모델2.png" : "/images/사용가능한모델.png"} alt='' style={{ width:'23px', height:'23px' }}/>
                            <span className='navi_title' style={{color: isActive ? '#9022FF' : 'black', fontWeight: 'bold'}}>사용가능한 모델</span>
                        </li>
                        )}
                    </NavLink>
                    <NavLink to="/useModelPage" style={{textDecoration:'none'}}>
                        {({isActive}) => (
                        <li className='navi'>
                            <img src={isActive ? "/images/사용한목록2.png" : "images/사용한목록.png"} alt='' style={{ width:'23px', height:'23px' }}/>
                            <span className='navi_title' style={{color: isActive ? '#9022FF' : 'black', fontWeight: 'bold'}}>사용한 목록</span>
                        </li>
                        )}
                    </NavLink>
                </ul>
            </div>
            <div className="setup_container">
                <ul className="setup_list">
                    <li className="setup_item"><img src="/images/bell.png" alt="" /></li>
                    <li className="setup_item"><Link to="/profile"><img src="/images/profile.png" alt="프로필" /></Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;