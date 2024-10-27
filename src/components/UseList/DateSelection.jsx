import { useState } from 'react';
import React from 'react';
import './DateSelection.css'

const DateSelection = () => {

    return(
        <div className="DateSelection_all">
            <span style={{marginTop:'8px', margin:'8px'}}>Date</span>
        <div className="DateSelection">
            <input className="DateSelection_datebox" type="date" placeholder="placeholder"/>
            <button className="DateSelection_botton"><img src="images/arrow-right.png"/></button>
        </div>
        </div>
    )
}

export default DateSelection;