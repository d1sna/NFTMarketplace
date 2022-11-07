import React from 'react';

const CustomButton = ({ text, clickHandler, additionalStyle }) => (
  <button className={` rounded-xl nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 text-white ${additionalStyle}`} onClick={clickHandler} type="button">{text}</button>
);

export default CustomButton;
