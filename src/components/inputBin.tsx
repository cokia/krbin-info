/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

function InputBin() {
  const [text, setBin] = useState('');

  const onChange = (e:any) => {
    setBin(e.target.value);
  };

  const onReset = () => {
    setBin('');
  };

  return (
    <div className="main-form">
      <input onChange={onChange} className="input-bin-number" placeholder="4348 12" value={text}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          값:
          {text}
        </b>
      </div>
    </div>
  );
}

export default InputBin;
