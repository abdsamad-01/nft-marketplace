import React, { useState, useEffect}  from "react";
import Web3Modal from 'web3modal';
import { ethers } from "ethers";
import axios from "axios";

import { MarketAddress, MarketAddressABI } from "./constant";


export const NFTContext = React.createContext();

export const NFTProvider = ( { children } ) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const nftCurrency = 'ETH';

    async function checkIfWalletisConnected() {
        if (!window.ethereum) alert('Wallet is not connected. Please install Metamask');

        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if(accounts.length) {
            setCurrentAccount(accounts[0]);
        } else console.log('No account found')
    }

    const connectWallet = async () => {
        if (!window.ethereum) console.log('Wallet is not connected.');

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setCurrentAccount(accounts[0]);

        window.location.reload();
    }


    useEffect(() => {
        checkIfWalletisConnected();
    })

    return (
        <NFTContext.Provider value={ nftCurrency } >
            { children}
        </NFTContext.Provider>
    )
};







