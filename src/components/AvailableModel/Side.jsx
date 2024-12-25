import { useState } from "react";
import "./Side.css";
import ChangeButton from "./ChangeButton";
import PlusInformation from "./PlusInformation";
import PlusServices from "./PlusServices";
import TotalAmount from "./TotalAmount";

const Side = ({keepModel,totalPrice,handleDeleteModel,sideView}) => {
  const [changeButton, setChangeButton] = useState("정보추가");
  return (
    <div className={`appdiv ${sideView}`}>
      <ChangeButton changeButton={changeButton} setChangeButton={setChangeButton} />
      {changeButton === "정보추가" ? (
        <>
          <PlusInformation />
          <PlusServices keepModel={keepModel} handleDeleteModel={handleDeleteModel}/>
          <TotalAmount totalPrice={totalPrice}/>
        </>
      ) : (
        <div className="info-confirmation">
          <h4 style={{marginLeft:"22px"}}>정보확인 화면입니다요</h4>
        </div>
      )}
    </div>
  );
};

export default Side;
