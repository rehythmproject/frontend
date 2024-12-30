import './Profile.css';
import Header from '../components/Header';
import SettingBox from '../components/Profile/SettingBox';
import { PieChart } from 'recharts';
import { Pie } from 'recharts';
import { Legend } from 'recharts';

const usernm = "ShinSuJi";

const useModelChart = [
    {
      "name": "회의",
      "value": 400,
      "fill": "#59159C"
    },
    {
      "name": "업무",
      "value": 300,
      "fill": "#9022FF"
    },
    {
      "name": "공부",
      "value": 50,
      "fill": "#DCA4FF"
    },
  ];

const Profile = () => {
    return (
        <div className="Profile">
            <Header />
            <div className="profile_container">
                <div className="greeting">
                    <h2 style={{fontWeight:'500', marginBottom:'3px'}}>Hello {usernm} 👋</h2>
                    <p style={{margin:0, padding:0, fontSize:'14px', color:'#6B7283'}}>Re:듬 솔루션을 통해 회의의 질을 높여보세요!</p>
                </div>
                <div className="profile_contents">
                  <div className="setting">
                    <SettingBox type={"profile"} title={"프로필 설정"} desc={"프로필 수정 및 확인"} />
                    <SettingBox type={"rePasswd"} title={"비밀번호 재설정"} desc={"현재 비밀번호를 입력한 후 새 비밀번호를 설정하세요"} />
                  </div>
                  <div className="chart">
                    <div className="use_field">
                      <h3 style={{fontWeight:'700', marginBottom:'5px', marginTop:'15px', marginLeft:'15px'}}>사용분야</h3>
                      <PieChart width={280} height={130}>
                        <Pie data={useModelChart} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={32} outerRadius={50} fill="#82ca9d" />
                        <Legend 
                            className='chart_legend'
                            align='center'
                            verticalAlign='middle' // 차트 가운데 정렬
                            wrapperStyle={{
                                color: '#000', // 글자 색상을 검정색으로 설정
                                fontSize: '12px', // (옵션) 글자 크기 조정
                            }}
                            />
                      </PieChart>
                    </div>
                    <div className="use_model">
                      <h3 style={{fontWeight:'700', marginBottom:'8px', marginTop:'8px', marginLeft:'15px'}}>사용한 모델 기록</h3>
                      <table border={1}>
                            <tr className='use_model_item n'>
                                <img className='use_model_img' src="/images/delLa.png" alt='model_img'/>
                                <div className="info">
                                    <p className='title'>delLa</p>
                                    <p className='order'>Order: <span>6</span></p>
                                </div>
                                <p className="ratio">51.6%</p>
                            </tr>
                            <tr className='use_model_item n'>
                                <img className='use_model_img' src="/images/delLa.png" alt='model_img'/>
                                <div className="info">
                                    <p className='title'>barum</p>
                                    <p className='order'>Order: <span>5</span></p>
                                </div>
                                <p className="ratio">49.5%</p>
                            </tr>
                            <tr className='use_model_item n'>
                                <img className='use_model_img' src="/images/delLa.png" alt='model_img'/>
                                <div className="info">
                                    <p className='title'>dobi</p>
                                    <p className='order'>Order: <span>3</span></p>
                                </div>
                                <p className="ratio">23.7%</p>
                            </tr>  
                            <tr className='use_model_item'>
                                <img className='use_model_img' src="/images/delLa.png" alt='model_img'/>
                                <div className="info">
                                    <p className='title'>yoyak</p>
                                    <p className='order'>Order: <span>1</span></p>
                                </div>
                                <p className="ratio">17.2%</p>
                            </tr>
                      </table>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;