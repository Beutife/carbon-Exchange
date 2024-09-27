const contractAddress = '0x4D26a16de37c9719F6fC5a945B47Ab1e2623b168'; // Update with your contract address
const abi = /* ABI from CarbonCreditNFT.json */

// Connect to MetaMask
async function connectWallet() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Wallet connected");
    } catch (error) {
      console.error("Wallet connection failed", error);
    }
  } else {
    alert("Please install MetaMask!");
  }
}

// Mint a new NFT
async function mintNFT(event) {
  event.preventDefault();
  
  const projectName = document.getElementById("projectName").value;
  const projectLocation = document.getElementById("projectLocation").value;
  const projectType = document.getElementById("projectType").value;
  const vintageYear = document.getElementById("vintageYear").value;
  const numberOfCredits = document.getElementById("numberOfCredits").value;
  const certificationStandard = document.getElementById("certificationStandard").value;
  const status = document.getElementById("mintStatus");

  if (!window.ethereum) {
    alert("MetaMask is required");
    return;
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    const tx = await contract.mint(
      await signer.getAddress(),
      projectName,
      projectLocation,
      projectType,
      vintageYear,
      numberOfCredits,
      certificationStandard
    );
    await tx.wait();

    status.textContent = `NFT Minted! Transaction Hash: ${tx.hash}`;
  } catch (error) {
    console.error("Error minting NFT", error);
    status.textContent = "Minting failed!";
  }
}

// Retrieve NFT Details
async function retrieveNFTDetails() {
  const tokenId = document.getElementById("tokenId").value;
  const nftDetailsDiv = document.getElementById("nftDetails");

  if (!window.ethereum) {
    alert("MetaMask is required");
    return;
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);

    const details = await contract.getCarbonCreditDetails(tokenId);

    nftDetailsDiv.innerHTML = `
      <p>Project Name: ${details.projectName}</p>
      <p>Project Location: ${details.projectLocation}</p>
      <p>Project Type: ${details.projectType}</p>
      <p>Vintage Year: ${details.vintageYear}</p>
      <p>Number of Credits: ${details.numberOfCredits}</p>
      <p>Certification Standard: ${details.certificationStandard}</p>
    `;
  } catch (error) {
    console.error("Error retrieving NFT details", error);
    nftDetailsDiv.textContent = "Error fetching details!";
  }
}

// Event listeners
document.getElementById("mintForm").addEventListener("submit", mintNFT);
document.getElementById("retrieveBtn").addEventListener("click", retrieveNFTDetails);

// On load, connect to the wallet
window.onload = connectWallet;
