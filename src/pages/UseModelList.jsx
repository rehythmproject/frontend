import Header from "../components/Header";
import DateSelection from "../components/UseList/DateSelection";
import './UseModelList.css';
const UseModelList = () => {
    return(
        <div className="UseModelList">
            <Header />
            <div className="usemodel_compo_container">
                <div className="usemodel_top">
                    <h3>사용한 목록</h3>
                </div>
                <DateSelection />
            </div>
            
        </div>
    )
}

export default UseModelList;