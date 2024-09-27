// Import ethers.js
import { ethers } from "ethers";

// Connect to Ethereum provider (e.g., MetaMask)
async function connectBlockchain() {
    if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // ABI of the deployed contract
        const abi = [
            // Paste your ABI here
        ];

        // Address of the deployed contract
        const contractAddress = "0xYourContractAddress";

        // Create a contract instance
        const contract = new ethers.Contract(contractAddress, abi, signer);

        return contract;
    } else {
        alert("Please install MetaMask to interact with the blockchain!");
        return null;
    }
}

const ethers = require('ethers');

const ethers = require('ethers');

const url = 'https://rpc.sepolia-api.lisk.com';
const provider = new ethers.JsonRpcProvider(url);