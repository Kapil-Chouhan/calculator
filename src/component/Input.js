import React from 'react'

const Input = ( { input, result} ) => {
  return (
    <div className="text-field">
      <div className="result"> {result} </div>
      <div className="input"> {input} </div>
    </div>
  )
};

export default Input;
