import { useState } from "react";
import "./ChangeButton.css"

const ChangeButton = () => {
  const [changeButton, setChangeButton] = useState('정보추가');

  const onClickChangeButton = (e) => {
    setChangeButton(e.target.textContent);
  }
  return (
    <div className="change-maindiv">
      <button className="change-button" style={{backgroundColor: changeButton==='정보추가' &&'white', color:changeButton==='정보추가' &&'black'}} onClick={onClickChangeButton}>정보추가</button>
      <button className="change-button" style={{backgroundColor: changeButton==='정보확인' &&'white', color:changeButton==='정보확인' &&'black'}} onClick={onClickChangeButton}>정보확인</button>
    </div>
  )
}

export default ChangeButton;