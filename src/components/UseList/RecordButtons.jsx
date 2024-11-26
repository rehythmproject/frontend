import { useNavigate } from 'react-router-dom'
import './RecordButton.css'

const RecordButtons = ({ code }) => {
    const navigate = useNavigate();
    const onClickGoRecord = () => {
        navigate(`/useModelPage/ViewRecords/${code}`);
    }

    return(
        <div className="RecordButtons">
            <button className="usemodel_record" onClick={onClickGoRecord}>기록보기</button>
            <button className="usemodel_record payment">결제기록보기</button>
        </div>
    )
}

export default RecordButtons;