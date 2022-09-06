import React from 'react'

const Banner = ({name, childStyles, parentStyles}) => {
    return (
        <div className={`w-full nft-gradient relative flex ${parentStyles} text-left items-center z-0 overflow-hidden`} >
            <p className={`font-poppins ${childStyles} text-white font-bold text-5xl leading-70`}> {name} </p>
            <div className='absolute w-48 h-48 sm:h-40 sm:w-40 rounded-full white-bg -top-9 -left-16 -z-5' />
            <div className='absolute w-72 h-72 sm:h-56 sm:w-56 rounded-full white-bg -bottom-24 -right-14 -z-5' />
        </div>
    )
}

export default Banner