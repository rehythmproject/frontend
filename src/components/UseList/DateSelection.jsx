import React from 'react';
import './DateSelection.css'

const DateSelection = ({searchDate, setSearchDate}) => {
    const handleSearchDate = (e) => {
        setSearchDate(e.target.value);
        console.log(searchDate);
    }
    return(
        <div className="DateSelection_all">
            <span style={{marginTop:'12px', margin:'8px'}}>Date</span>
        <div className="DateSelection">
            <input className="DateSelection_datebox" type="date" placeholder="placeholder" onChange={handleSearchDate}/>
            <button className="DateSelection_botton"><img src="images/arrow-right.png" alt=''/></button>
        </div>
        </div>
    )
}

export default DateSelection;