import './MainExecutionPage.css'
import React, { useState, useEffect } from 'react';
import AudioAnalyser from 'react-audio-analyser';

const MainExecutionPage = () => {
  const [status, setStatus] = useState('inactive');

  const controlAudio = (status) => setStatus(status);

  useEffect(() => {
    setStatus('recording');
  }, []);

  const endvoice = () => {
    const userConfirmed = window.confirm("정말 이 작업을 진행하시겠습니까?");
    if (userConfirmed) {
      console.log("사용자가 확인 버튼을 눌렀습니다.");
      controlAudio('paused')
    } else {
      console.log("사용자가 취소 버튼을 눌렀습니다.");
      controlAudio('recording')
    }
  }

  return (
    <div className='MainExecutionPage'>
      <h3 className='mainExecutionPage_title'>몬드리안 회사와 미팅</h3>
      <div className='mainExecutionPage_container'>
        <div className="voice_content">
          <h4>음성기록</h4>
          <div className="voice_content_text">모델이 현재 녹음 중!</div>
        </div>
        <div className='voice_container'>
          <div>
            <AudioAnalyser
              audioType="audio/wav"
              status={status}
              audioOptions={{ sampleRate: 30000 }}
              strokeColor="#8A2BE2"
              backgroundColor="#FAFAFA" 
              height={250}
              width={800}   
            />
            <button className='voice_button' onClick={endvoice}>끝내기</button>
          </div>
        </div>
        <div className='waiting_container'>
          <div>모델이 회의를 듣고 있어요..</div>
        </div>
      </div>
    </div>
  )
}

export default MainExecutionPage;