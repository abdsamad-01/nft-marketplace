import React, {useState, useEffect, useContext} from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import Images from '../assets';
import { Button } from './'
import { NFTContext } from '../context/NFTContext';


const MenuItems = ({isMobile, active, setActive}) => {
    const generateLink = (i) => {
        switch (i) {
            case 0: return '/';
            case 1: return '/created-nfts';
            case 2: return '/my-nfts';
            default: return '/';
        }
    }

    return ( 
        <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'} mr-8`}>
            {['Explore', 'Listings', 'My NFTs'].map((item, i) => (
                    <li 
                        key={i}
                        onClick={() => { setActive(item) }}
                        className={`flex flex-row items-center font-semibold font-poppins mx-3 text-base cursor-pointer hover:text-nft-dark-3 dark:hover:text-white ${isMobile && 'my-1.5'}
                        ${active === item ? 
                        'dark:text-white text-nft-black-1'  
                        : 'dark:text-nft-gray-2 text-nft-gray-2'}
                        `}
                        >
                        <Link href={generateLink(i)}> 
                            {item} 
                        </Link>
                    </li>
                ))}
        </ul>
    )
}

 
const ButtonGroup = ({ router, setActive }) => {
    // const { currentAccount, connectWallet } = useContext(NFTContext); 
    let isConnected = true;

    return (
        isConnected ?
        <Button 
            btnName='Create' 
            classStyles='mx-2 rounded-lg' 
            handleClick={() => {
                setActive('');
                router.push('/create-nft')
            }} 
        />
            : 
        <Button 
            btnName='Connect' 
            classStyles='mx-2 rounded-lg' 
            handleClick={ connectWallet }
        />
    )
}


const Navbar = () => {
    const {theme, setTheme} = useTheme();
    const router = useRouter();
    const [active, setActive] = useState('Explore NFTs');
    const [isOpen, setIsOpen] =  useState(false);

    return (
        <nav className='flexBetween w-full flex-row border-b fixed z-10 px-4 py-3 bg-white dark:bg-nft-dark border-nft-gray-1 dark:border-nft-black-1'>
            <div className='flex flex-1 flex-row flexStart'>
                <Link href='/'>
                    <div className='flex flexCenter cursor-pointer  md:hidden' onClick={() => {}}>
                        <Image src={Images.logo02} width={32} height={32} objectFit='contain' alt='logo' /> 
                        <p className='text-nft-dark-1 dark:text-white font-poppins text-lg font-semibold ml-1.5'> CryptoHub </p>
                    </div>         
                </Link>
                <Link href='/'>
                    <div className='hidden md:flex'>
                        <Image src={Images.logo02} width={32} height={32} objectFit='contain' alt='logo' /> 
                    </div>
                </Link>
            </div>

            <div className='flex flex-initial flex-row justify-end'>
                <div className='flex items-center mr-2'>
                    <input 
                        className='checkbox'
                        id='checkbox'
                        type='checkbox'
                        onChange={() => { setTheme(theme === 'white' ? 'dark' : 'white') }}
                    />
                    <label htmlFor='checkbox' className='flex flexBetween p-1 label w-8 h-4 rounded-2xl bg-black relative cursor-pointer'>
                        <i className='fas fa-sun'></i>
                        <i className='fas fa-moon'></i>
                        <div className='h-3 w-3 bg-white absolute ball rounded-full'  />
                    </label>   
                </div>

                <div className='md:hidden ml-3'>
                    <ul className='list-none flex-row flexCenter'>
                        <MenuItems active={active} setActive={setActive} />
                        <ButtonGroup setActive={setActive} router={router} />
                    </ul>
                </div>
            </div>

            <div className='hidden md:flex ml-4'>
                { isOpen ? (
                    <Image
                        height={20} 
                        width={20} 
                        objectFit='contain' 
                        className={`cursor-pointer ${theme === 'white' && 'filter invert'}`}
                        src={Images.cross}
                        onClick={() => setIsOpen(false)}
                        alt='close'
                    />
                ) : 
                (
                    <Image 
                        height={25} 
                        width={25} 
                        objectFit='contain' 
                        className={`cursor-pointer ${theme === 'white' && 'filter invert'}`}
                        src={Images.menu} 
                        alt='menu'
                        onClick={() => setIsOpen(true)}
                    />
                )
                }
                { isOpen && (
                    <div className='fixed inset-0 z-10 top-65 flex flex-col flexBetween nav-h bg-white dark:bg-nft-dark'>
                        <div className='flex-1 p-4'>
                            <MenuItems active={active} setActive={setActive} isMobile />
                        </div>
                        <div className='p-4 border-t dark:border-nft-black-1 border-nft-gray-1'>
                            <ButtonGroup router={router} setActive={setActive} />
                        </div>
                    </div>
                ) }
            </div>
        </nav>
    )
}

export default Navbar



