import './MainExecutionPage.css'
import React, { useState } from 'react';
import AudioAnalyser from 'react-audio-analyser';

const MainExecutionPage = () => {
  const [status, setStatus] = useState('inactive');
  const [voiceStart, setVoiceStart] = useState(true)
  const [voiceEnd, setVoiceEnd] = useState(true)

  const controlAudio = (status) => setStatus(status);

  // useEffect(() => {
  //   setStatus('recording');
  // }, []);

  const startVoice = () => {
    const userConfirmedStart = window.confirm("녹음을 시작합니다.");
    if (userConfirmedStart) {
      controlAudio('recording')
      setVoiceStart(false)
    } else {
      controlAudio('paused')
    }
  }

  const endVoice = () => {
    const userConfirmed = window.confirm("녹음을 종료하시겠습니까?");
    if (userConfirmed) {
      controlAudio('paused')
      setVoiceEnd(false)

    } else {
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
            <button className='voiceStart_button'onClick={startVoice} disabled={voiceStart === false}>시작하기</button>
            <button className='voiceEnd_button' onClick={endVoice} disabled={voiceEnd === false}>끝내기</button>
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