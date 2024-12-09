// Side.js
import { useState } from "react";
import "./Side.css";
import ChangeButton from "./ChangeButton";
import PlusInformation from "./PlusInformation";
import PlusServices from "./PlusServices";
import TotalAmount from "./TotalAmount";

const Side = () => {
  const [changeButton, setChangeButton] = useState("정보추가");

  return (
    <div className="appdiv">
      <ChangeButton changeButton={changeButton} setChangeButton={setChangeButton} />
      {changeButton === "정보추가" ? (
        <>
          <PlusInformation />
          <PlusServices />
          <TotalAmount />
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
