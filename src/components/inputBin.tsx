/* eslint-disable no-sequences */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// @ts-ignore
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
// @ts-ignore
import images from 'react-payment-inputs';

const InputBin: React.FC = () => {
  const { getCardImageProps, getCardNumberProps, wrapperProps } = usePaymentInputs();
  const cardInputOnChange = (e:any) => {
    const cardNumber = e.target.value.replace(' ', '');
    if (cardNumber.length === 6) {
      fetch(`http://localhost:3002/api/${cardNumber}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <>
      <PaymentInputsWrapper {...wrapperProps}>
        <svg {...getCardImageProps({ images })} />
        <input {...getCardNumberProps({ onChange: cardInputOnChange })} />
      </PaymentInputsWrapper>
    </>
  );
};

export default InputBin;
