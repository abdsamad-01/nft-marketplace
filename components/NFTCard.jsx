import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import images from '../assets'

import { useContext } from 'react';
import { NFTContext } from '../context/NFTContext';

const NFTCard = ({ nft, seller, owner, description }) => {
    const nftCurrency = useContext(NFTContext)
    return (
        <Link href={{ pathname: 'nft-details', query: nft }}>
            <div className='flex-1 min-w-215 max-w-max xs:max-w-none xs:w-full sm:w-full sm:min-w-155  minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white border dark:border-nft-black-1 border-nft-gray-1 rounded-2xl p-4 m-4 minlg:p-8 sm:my-2 cursor-pointer shadow-md sm:mx-2'>
                <div className='w-full relative h-56 sm:h-36 xs:h-56 minmd:h-60 minlg:h-300 rounded-2xl'>
                    <Image
                        src={nft.image || images[`nft${nft.i}`]}
                        layout='fill'
                        objectFit='cover'
                        className='rounded-2xl'
                    />
                </div>
                <div className='flex flex-col mt-3'>
                    <p className='font-poppins text-sm minlg:text-xl dark:text-white font-semibold text-nft-black-1'> {nft.name} </p>
                    <div className='flexBetween flex-row mt-1 xs:flex-col xs:items-start xs:mt-3'>
                        <p className='font-poppins text-xs minlg:text-lg dark:text-white font-medium text-nft-black-1'> {nft.price.toFixed(2)} <span className='normal'>{nftCurrency}</span> </p>
                        <p className='font-poppins text-xs minlg:text-lg dark:text-white font-medium text-nft-black-1'> {nft.seller} </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NFTCard;

