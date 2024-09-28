import React from 'react';
import './QRCode.css';
const QRCode = () => {
    return (
        <div className='qr-main'>
            <div className="qr-container">
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
                <img src='./images/QRcode.png' alt="QR Code" />
            </div>
            <p className='transaction-text'>Waiting for transaction confirmation</p>
            <div className='loading_spinner_box'>
                <div className='loading_spinner'/>
                <p className='kakao-text'>카카오페이 화면에서 QR을 인식하세요.</p>
            </div>
        </div>
    );
};
export default QRCode;