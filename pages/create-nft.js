/* eslint-disable react/jsx-indent */
import React, { useState, useCallback, useMemo, useContext } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Button, Input } from '../components';
import images from '../assets';


const CreateNFT = () => {
    const [userInput, setUserInput] = useState({ name: '', price: '', description: ''})
    const { theme } = useTheme();
    const [fileUrl, setfileUrl] = useState(null);
    const onDrop = useCallback(() => {
        // upload image to IPFS
    });
    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        accept: 'image/*',
        fileSize: 5000000,
    })
    const fileStyle = useMemo(() => (
        `dark:bg-nft-black-1 bg-white border border-nft-black-1 dark:border-white flex \
        flex-col items-center p-5 rounded-sm border-dashed
        ${isDragActive && 'border-drag-active'}
        ${isDragAccept && 'border-drag-accept'}
        ${isDragReject && 'border-drag-reject'}
        `
    ), [isDragActive, isDragAccept, isDragReject]);

    console.log(userInput)
    return (
        <div className='flex justify-center sm:px-4 px-12'>
            <div className='w-4/5 md:w-full'>
                <p className='font-poppins dark:text-white font-semibold text-xl minlg:text-3xl mt-5  text-nft-black-1'> Create new NFT </p>
                <div className='mt-16'>
                    <p className='font-poppins dark:text-white font-semibold text-lg minlg:text-3xl mt-2  text-nft-black-1'> Upload File </p>
                </div>
                <div className='mt-4'>
                    <div {...getRootProps()} className={fileStyle}>
                        <input
                            {...getInputProps()}
                        />
                        <div className='flex flex-col text-center' >
                            <p className='font-poppins dark:text-white font-medium text-base minlg:text-3xl mt-5  text-nft-black-1'> JPG, PNG, GIF, SVG, WEBM. Max 100mb </p>
                            <div className='my-8 flex justify-center w-full'>
                                <Image
                                    src={images.upload}
                                    alt='file upload'
                                    objectFit='contain'
                                    width={100}
                                    height={100}
                                    className={theme === 'white' && 'filter invert'}
                                />
                            </div>
                            <p className='font-poppins dark:text-white font-medium text-sm minlg:text-3xl text-nft-black-1'> Drag and drop file or Browse media on your device </p>
                        </div>
                    </div>
                    {fileUrl && (
                        <aside>
                            <div>
                                <img src={fileUrl} alt='asset_file' />
                            </div>
                        </aside>
                    )}
                </div>
                <div className='w-1/2 md:w-full mt-20'>
                    <Input
                        inputType='input'
                        inputTitle='Name'
                        placeholder='NFT Name'
                        userInput={userInput.name}
                        handleClick={(e) => { setUserInput({...userInput, name: e.target.value })}}
                    />
                    <Input
                        inputType='textarea'
                        inputTitle='Description'
                        placeholder='NFT Description'
                        handleClick={(e) => { setUserInput({...userInput, description: e.target.value })}}
                    />
                    <Input
                        inputType='number'
                        inputTitle='Price'
                        placeholder='Enter Price'
                        userInput={userInput}
                        handleClick={(e) => { setUserInput({...userInput, price: e.target.value })}}
                    />

                    <div className='w-full flex justify-end my-8'>
                        <Button
                            btnName='Create NFT'
                            classStyles='rounded-md px-3 py-3 '
                            handleClick={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNFT;
