import React from 'react';
import { useContext } from 'react';
import { NFTContext } from '../context/NFTContext';


const Input = ({ inputType, inputTitle, placeholder, userInput, handleClick }) => {
    const nftCurrency = useContext(NFTContext);

    return (
        <div className='mt-10 w-full'>
            <p className='font-poppins dark:text-white font-semibold text-lg minlg:text-3xl text-nft-black-1'> {inputTitle} </p>
            {
                inputType === 'number' ? (
                    <div className='bg-white dark:bg-nft-black-2 font-poppins w-full mt-4 px-3 py-3 border border-nft-gray-2 dark:border-nft-black-1 rounded-md text-nft-dark-1 dark:text-white text-sm font-normal minlg:text-lg outline-none flexBetween flex-row'>
                        <input 
                            type='number'
                            className='flex bg-white w-full dark:bg-nft-black-2 outline-none'
                            placeholder={placeholder}
                            onChange={handleClick}
                        />
                        <p className='font-poppins dark:text-white font-semibold text-sm text-nft-black-1'> {nftCurrency} </p>
                    </div>
                ) : inputType === 'textarea' ? (
                    <textarea 
                        rows={10}
                        placeholder={placeholder}
                        className='bg-white dark:bg-nft-black-2 resize-none font-poppins w-full mt-4 px-3 py-3 border border-nft-gray-2 dark:border-nft-black-1 rounded-md text-nft-dark-1 dark:text-white text-sm font-normal minlg:text-lg outline-none'
                        onChange={handleClick}
                    />
                ) : <input       
                        placeholder={placeholder}
                        className='bg-white dark:bg-nft-black-2 font-poppins w-full mt-4 px-3 py-3 border border-nft-gray-2 dark:border-nft-black-1 rounded-md text-nft-dark-1 dark:text-white text-sm font-normal minlg:text-lg outline-none'
                        onChange={handleClick}
                />
            }
        </div>
    )
}

export default Input
