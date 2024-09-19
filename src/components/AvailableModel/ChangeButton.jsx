import { useState } from "react";
import "./ChangeButton.css"

const ChangeButton = () => {
  const [changeButton, setChangeButton] = useState('나에 대한');

  const onClickChangeButton = (e) => {
    setChangeButton(e.target.textContent);
  }
  return (
    <div className="change-maindiv">
      <button className="change-button" style={{backgroundColor: changeButton==='나에 대한' &&'white', color:changeButton==='나에 대한' &&'black'}} onClick={onClickChangeButton}>나에 대한</button>
      <button className="change-button" style={{backgroundColor: changeButton==='상황' &&'white', color:changeButton==='상황' &&'black'}} onClick={onClickChangeButton}>상황</button>
    </div>
  )
}

export default ChangeButton;