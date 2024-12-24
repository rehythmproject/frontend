import './SettingBox.css';

const SettingBox = ({title, type, desc}) => {
    return(
        <div className="SettingBox">
            <div className="greeting">
                <h3 style={{fontWeight:'700', marginBottom:'3px', marginTop:0}}>{title}</h3>
                <p style={{margin:0, padding:0, fontSize:'12px', color:'#6B7283'}}>{desc}</p>
            </div>
            <form action="">
        {
            type === 'profile' ? (
                <div className="input_container">
                    <div className="profile_input">
                        <label htmlFor="name">Name</label>
                        <input name="name"></input>
                    </div>
                    <div className="profile_input">
                        <label htmlFor="phone">Phone</label>
                        <input name="phone "></input>
                    </div>
                </div>
            ) : (
                
                <div className="input_container">
                    <div className="profile_input">
                        <label htmlFor="prepwd">현재 비밀번호</label>
                        <input name="prepwd" type='password'></input>
                    </div>
                    <div className="profile_input">
                        <label htmlFor="newpwd">새 비밀번호</label>
                        <input name="newpwd " type='password'></input>
                    </div>
                </div>
                
            )
        }
        <button className="profile_button reset" type='reset'>취소</button><button className='profile_button submit' type='submit'>설정</button>
        </form>
        </div>
    )
}

export default SettingBox;