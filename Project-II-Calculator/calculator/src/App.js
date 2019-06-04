import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';



const App = () => {
  return (
    <div>
        <CalculatorDisplay text='0'/>
        <ActionButton text='clear'/>
        <NumberButton text='÷' buttonStyle='buttonStyle2'/>
        <NumberButton text='7' buttonStyle='buttonStyle'/>
        <NumberButton text='8' buttonStyle='buttonStyle'/>
        <NumberButton text='9' buttonStyle='buttonStyle'/>
        <NumberButton text='x' buttonStyle='buttonStyle2'/>
        <NumberButton text='4' buttonStyle='buttonStyle'/>
        <NumberButton text='5' buttonStyle='buttonStyle'/>
        <NumberButton text='6' buttonStyle='buttonStyle'/>
        <NumberButton text='-' buttonStyle='buttonStyle2'/>
        <NumberButton text='1' buttonStyle='buttonStyle'/>
        <NumberButton text='2' buttonStyle='buttonStyle'/>
        <NumberButton text='3' buttonStyle='buttonStyle'/>
        <NumberButton text='+' buttonStyle='buttonStyle2'/>
        <ActionButton text='0'/>
        <NumberButton text='=' buttonStyle='buttonStyle2'/>
    </div>
  );
};

export default App;
