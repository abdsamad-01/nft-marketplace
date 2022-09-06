import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState } from 'react';
import Images from '../assets';
import { Button } from './'


const FooterLinks = ({ heading, items }) => (
    <div>
        <h3 className='text-nft-dark-1 dark:text-white font-poppins text-lg font-semibold mb-3'> {heading} </h3>
        <ul className='list-none'>
            {items.map((item, index) => (
                <li key={index} className='text-nft-dark-1 xs:text-sm hover:text-nft-black-1 dark:hover:text-nft-gray-1 dark:text-white cursor-pointer font-poppins font-medium dark:font-normal text-base mb-1'> {item} </li>
            ))}
        </ul>
    </div>
)

const Footer = () => {
    const { theme } = useTheme();
    const [emailInput, setEmailInput] = useState('')

    return (
        <footer className='flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16'>
            <div className='w-full flex flex-row md:flex-col minmd:w-4/5 sm:px-4 px-16'>
                <div className='flex flex-1 flex-col'>
                    <div className='flexStart cursor-pointer'>
                        <Image src={Images.logo02} width={32} height={32} objectFit='contain' alt='logo' />
                        <p className='text-nft-dark-1 dark:text-white font-poppins text-lg font-semibold ml-1.5'> CryptoHub </p>
                    </div>
                    <p className='font-poppins text-base font-medium cursor-pointer text-nft-black-1 dark:text-white mt-6'> Get the Latest Updates </p>
                    <div className='flexBetween w-357 md:w-full minlg:w-557 bg-white dark:border-nft-black-2 dark:bg-nft-black-2 mt-6 mb-2 border rounded-md border-nft-gray-2'>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            className='h-full flex-1 w-full bg-white dark:bg-nft-black-2 font-poppins px-3 py-2 rounded-md text-nft-dark-1 dark:text-white font-normal text-xs minlg:text-lg outline-none'
                            value={emailInput}
                            onChange={(e) => { setEmailInput(e.target.value) }}
                        />
                        <div className='flex-initial'>
                            <Button btnName='Email Me' classStyles='rounded-md' />
                        </div>
                    </div>
                </div>

                <div className='flexBetweenStart flex-1 flex-wrap ml-10 md:ml-0 md:mt-8' >
                    <FooterLinks heading='CryptoHub' items={['Explore', 'How it Works', 'Contact Us']} />              
                    <FooterLinks heading='Support' items={['Help Center', 'Terms Of Service', 'Legal', 'Privacy Policy']} />
                </div>
            </div>

            <div className='mt-5 w-full flexCenter border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16'>
                <div className='mt-7 flexBetween flex-row w-full sm:flex-col minmd:w-4/5'>
                    <p className='font-poppins font-semibold text-base text-nft-black-1 dark:text-white'> CryptoHub Inc. All Rights reserved</p>
                    <div className='flex sm:mt-5 flex-row'>
                        {[Images.twitter, Images.instagram, Images.discord, Images.telegram].map((icon, i) => (
                            <div className='mx-2 cursor-pointer'>
                                <Image
                                    src={icon}
                                    alt='social'
                                    width={23}
                                    height={23}
                                    objectFit='contain'
                                    className={theme === 'white' && 'filter invert'}
                                />
                            </div>

                        ))}
                    </div>

                </div>

            </div>
        </footer>
    )
};

export default Footer;
