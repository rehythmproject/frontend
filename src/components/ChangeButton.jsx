import "./ChangeButton.css"

const ChangeButton = () => {
      return (
        <div className="change-maindiv">
          <button className="change-button" style={{background:'white', color:'black'}}>나에 대한</button>
          <button className="change-button">상황</button>
        </div>
      )
}

export default ChangeButton;