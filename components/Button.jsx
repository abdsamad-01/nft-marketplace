import React from 'react'

const Button = ({ btnName, classStyles, handleClick }) => {
  return (
    <button 
        type='button' 
        className={`nft-gradient text-white text-sm py-2 font-bold px-6 font-poppins minlg:px-8 ${classStyles}`}
        onClick={handleClick}
    >
        { btnName }
    </button>
  )
}

export default Button