/* eslint-disable no-sequences */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// @ts-ignore
import images, { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';

const InputBin: React.FC = () => {
  const { getCardImageProps, getCardNumberProps, wrapperProps } = usePaymentInputs();

  return (
    <>
      <PaymentInputsWrapper {...wrapperProps}>
        <svg {...getCardImageProps({ images })} />
        <input {...getCardNumberProps} />
      </PaymentInputsWrapper>
    </>
  );
};

export default InputBin;
