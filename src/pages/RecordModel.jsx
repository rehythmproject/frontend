import { useParams } from "react-router-dom";

const RecordModel = () => {
    const { code } = useParams();
    
    return(
        <div>아니 왜 안 되는데 {code}</div>
    )
}

export default RecordModel;