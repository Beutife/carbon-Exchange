// Check if MetaMask (or another wallet) is installed
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    alert('MetaMask not detected! Install MetaMask extension or use a compatible wallet.');
}

// Connect to MetaMask
const connectButton = document.getElementById('connectButton');

connectButton.addEventListener('click', async () => {
    try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Get the connected account
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const account = await signer.getAddress();

        console.log('Connected account:', account);
        window.location.href='form.html'
    } catch (error) {
        console.error('Error connecting to wallet:', error);
    }
});
