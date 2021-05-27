/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import InputBin from '../components/inputBin';

const cardResult = {
  issuer: 'VISA',

};
const Root: React.FC = () => (
  <>
    {/* <form className="main-form">
      <label>
        <input className="input-bin-number" placeholder="4348 12" />
      </label>
    </form> */}
    <InputBin />
    <ul className="result">
      <li className="scheme">
        <h2>Scheme / network</h2>
        <p>{cardResult.issuer}</p>
      </li>
      <li className="brand">
        <h2>Brand</h2>
        <p>Visa/Dankort</p>
      </li>
      <li className="luhn">
        <h3>LUHN</h3>
        <ol>
          <li className="yes selected">Yes</li>
          <li className="no">No</li>
        </ol>
      </li>
    </ul>
    <li className="type">
      <h2>Type</h2>
      <ol>
        <li className="selected" data-value="debit">
          Debit
        </li>
        <li data-value="credit">Credit</li>
      </ol>
    </li>
    <li className="prepaid">
      <h2>Prepaid</h2>
      <ol>
        <li className="yes">Yes</li>
        <li className="no selected">No</li>
      </ol>
    </li>
    <li className="country">
      <h2>Country</h2>
      <p className="name">🇩🇰 Denmark</p>
      <p className="geo">
        (latitude:
        {' '}
        <span className="latitude">56</span>
        , longitude:
        {' '}
        <span className="longitude">10</span>
        )
      </p>
    </li>
  </>

);

export default Root;
