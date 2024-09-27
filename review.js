// Fetch data from localStorage and display it in the review page
document.getElementById('review-project-name').textContent = localStorage.getItem('projectName');
document.getElementById('review-location').textContent = localStorage.getItem('location');
document.getElementById('review-project-type').textContent = localStorage.getItem('projectType');
document.getElementById('review-carbon-credits').textContent = localStorage.getItem('carbonCredits');
document.getElementById('review-vintage-year').textContent = localStorage.getItem('vintageCredit');
document.getElementById('review-certification-standard').textContent = localStorage.getItem('certificateStandard');
document.getElementById('review-nft-token').textContent = localStorage.getItem('nftToken');
document.getElementById('review-project-description').textContent = localStorage.getItem('projectDescription');
document.getElementById('review-wallet-address').textContent = localStorage.getItem('walletAddress');

// Optional: Add a click event for the Confirm button if needed
document.getElementById('confirmBtn').addEventListener('click', function() {
    alert('Form submitted successfully!');

    // Optionally clear localStorage after submission
    localStorage.clear();

    // Redirect to a success page (e.g., success.html)
    window.location.href = 'main.html';
});