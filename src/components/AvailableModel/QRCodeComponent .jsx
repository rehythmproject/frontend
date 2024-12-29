import { QRCodeCanvas } from 'qrcode.react'; 
import './QRCode.css';

const QRCodeComponent = ({ qrUrl }) => {
    return (
        <div className="qr-main">
            <div className="qr-container">
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
                {qrUrl ? (
                    <QRCodeCanvas value={qrUrl} size={256} /> // QR 코드 생성
                ) : (
                    <p>QR URL이 없습니다. 결제를 준비해주세요.</p>
                )}
            </div>
        </div>
    );
};

export default QRCodeComponent;
