import React, { useState, useEffect, useRef } from 'react';
import { Banner, CreatorCard, NFTCard } from '../components';
import images from '../assets';
import { generateId } from '../utils/generateId';
import Image from 'next/image';
import { useTheme } from 'next-themes';


const Home = () => {
    const parentRef = useRef(null);
    const scrollRef = useRef(null);
    const { theme } = useTheme();
    const [hideButtons, setHideButtons] = useState(false)

    const handleScroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = window.innerWidth > 1800 ? 280 : 210;

        if (direction === 'left') {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    }

    const isScrollable = () => {
        const { current } = scrollRef;
        const { current: parent } = parentRef;

        if (current?.scrollWidth >= parent?.offsetWidth) {
            setHideButtons(false);
        } else setHideButtons(true)
    }

    useEffect(() => {
        isScrollable();
        window.addEventListener('resize', isScrollable);

        return () => {
            window.removeEventListener('resize', isScrollable);
        }
    })

    return (
        <div className='flex flex-col justify-center py-12 md:px-8 sm:px-4 px-20 xs:p-4'>
            <div className='w-full minmd:w-4/5'>
                <Banner
                    name='Discover, collect and sell extraordinary NFTs'
                    childStyles='md:text-4xl sm:text-2xl xs:text-xl text-left'
                    parentStyles='justify-start mb-6 h-72 sm:60 p-12 xs:p-4 xs:h-44 rounded-3xl'
                />
            </div>

            <div className=''>
                <p className='font-poppins dark:text-white font-semibold text-xl minlg:text-3xl ml-4 sm:ml-0 mt-5  text-nft-black-1'> Best Creators </p>
                <div className='relative flex-1 mt-3 flex max-w-full' ref={parentRef}>
                    <div className='flex flex-row w-max overflow-x-scroll no-scrollbar select-none' ref={scrollRef}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                            <CreatorCard
                                key={`creator-${i}`}
                                rank={i}
                                creatorImage={images[`creator${i}`]}
                                creatorName={`Ox${generateId(3)}...${generateId(4)}`}
                                creatorEths={10 - i * 0.075}
                            />
                        ))}
                        {!hideButtons &&
                        <>
                            <div onClick={() => handleScroll('left')} className='absolute h-8 w-8 top-45 cursor-pointer left-0 minlg:h-12 minlg:w-12'>
                                <Image
                                    src={images.left}
                                    alt='left_arrow'
                                    layout='fill'
                                    objectFit='contain'
                                    className={theme === 'white' && 'filter invert'}
                                />
                            </div>
                            <div onClick={() => handleScroll('right')} className='absolute h-8 w-8 top-45 cursor-pointer right-0 minlg:h-12 minlg:w-12'>
                                <Image
                                    src={images.right}
                                    alt='right_arrow'
                                    layout='fill'
                                    objectFit='contain'
                                    className={theme === 'white' && 'filter invert'}
                                />
                            </div>
                        </>
                        }
                    </div>
                </div>

                <div className='mt-10 w-full'>
                    <div className='flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start'>
                        <p className='flex-1 font-poppins dark:text-white font-semibold text-xl minlg:text-3xl sm:mb-4 text-nft-black-1'> Hot Bids </p>
                        <div> Searchbar </div>
                    </div>
                    <div className='flex flex-wrap mt-3 justify-start md:justify-center w-full  md:ml-0'> 
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                            <NFTCard
                                key={i}
                                nft={{
                                    i,
                                    name: `Nifty NFT ${i}`,
                                    price: (10 - i * 0.85),
                                    seller: `Ox${generateId(3)}...${generateId(4)}`,
                                    owner: `Ox${generateId(3)}...${generateId(4)}`,
                                    description: 'Cool NFT on Sale'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Home; 
