import './App.css';
import Button from './component/Button'
import Input from './component/Input'

import { useState } from 'react'
import * as math from 'mathjs';

const App = () => {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // fucntion to clear the textfield.

  const resetText = () => {
    setInput("")
    setResult("")
  };

  // function to handle click events of buttons

  const addToText = (val) => {
    setInput((input) => [...input, val + " "]); 
  };

  // using mathjs to calculate outputs

  const calcResult = () => {
    const text = input.join("");
    setResult(math.evaluate(text));
  };

  const btncolor = "#ffc96f";

  return (
    <div className="App">
      <Input input={input} result={result}/>

      <div className="btnpannel">
        <div className="button-row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" handleClick={addToText} color= {btncolor}/>
        </div>
        <div className="button-row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" handleClick={addToText} color= {btncolor}/>
        </div>
        <div className="button-row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="-" handleClick={addToText} color= {btncolor}/>
        </div>
        <div className="button-row">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="=" handleClick={calcResult}/>
          <Button symbol="%" handleClick={addToText} color= {btncolor}/>
          <Button symbol="+" handleClick={addToText} color= {btncolor}/>
        </div>

        <Button symbol="Clear" handleClick={resetText}/>
      </div> 
    </div>
  );
};

export default App;
