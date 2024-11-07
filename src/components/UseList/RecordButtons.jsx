import { useNavigate } from 'react-router-dom';
import './RecordButton.css'

const RecordButtons = () => {

    const navigate = useNavigate();
    const navigateToRecords = () => {
        navigate("ViewRecords");
    }

    return(
        <div className="RecordButtons">
            <button className="usemodel_record" onClick={navigateToRecords}>기록보기</button>
            <button className="usemodel_record payment">결제기록보기</button>
        </div>
    )
}

export default RecordButtons;