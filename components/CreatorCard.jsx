import React from 'react';
import Image from 'next/image';
import Images from '../assets';
import { useContext } from 'react';

import { NFTContext } from '../context/NFTContext';

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => {
    const nftCurrency = useContext(NFTContext);

    return (
        <div className='min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-1 border-nft-gray-1 flex flex-col p-4 m-4 rounded-3xl'>
            <div className='h-7 w-7 minlg:w-8minlg:h-8 bg-nft-red-violet flexCenter rounded-full'>
                <p className='font-poppins text-white font-semibold text-base minlg:text-lg'> {rank} </p>
            </div>
            <div className='flex my-2 justify-center'>
                <div className='w-20 h-20 relative minlg:w-28 minlg:h-28'>
                    <Image 
                        src={creatorImage} 
                        alt='creator' 
                        layout='fill'
                        objectFit='cover'
                        className='rounded-full'
                    />
                    <div className='absolute h-5 w-5 -right-0 bottom-0 minlg:w-7 minlg:h-7'>
                        <Image 
                            src={Images.tick}
                            alt='tick'
                            objectFit='contain'
                            layout='fill'
                        />
                    </div>
                </div>
            </div>

            <div className='flexCenter flex-col mt-3 minlg:mt-7'>
                <p className='font-poppins font-semibold text-base dark:text-white text-nft-black-1'> {creatorName} </p>
                <p className='text-sm font-poppins mt-1 font-medium dark:text-white text-nft-black-1'> {creatorEths.toFixed(2)} {nftCurrency} </p>
            </div>
        </div>
    )
}

export default CreatorCard;