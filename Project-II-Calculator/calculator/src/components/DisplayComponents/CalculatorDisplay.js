import React from 'react';
import './Display.css';

function CalculatorDisplay(props){
    return <div className='displayScreen'>{props.text}</div>
}

export default CalculatorDisplay;