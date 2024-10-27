import { useNavigate } from "react-router-dom";

const DateSelection = () => {

    const navigate = useNavigate();

    const navigateToRecords = () => {
        navigate("/ViewRecords");
  };

    return(
        <div>
            <input type="text" value='' placeholder="placeholder" />
            <button><img src="images/arrow-right.png" alt=""/></button>
            <button onClick={navigateToRecords}>기록보기</button>

        </div>
    )
}

export default DateSelection;