document.getElementById('carbon-credit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const projectName = document.getElementById('project-name').value;
    const location = document.getElementById('location').value;
    const projectType = document.getElementById('project-type').value; 
    const carbonCredits = document.getElementById('carbon-credits').value;
    const vintageCredit = document.getElementById('vintage-year').value;
    const certificateStandard = document.getElementById('certification-standard').value;
    const nftToken = document.getElementById('nft-token').value;
    const projectDescription = document.getElementById('project-description').value;
    const walletAddress = document.getElementById('wallet-address').value;

    // Save data to localStorage
    localStorage.setItem('projectName', projectName);
    localStorage.setItem('location', location);
    localStorage.setItem('projectType', projectType);
    localStorage.setItem('carbonCredits', carbonCredits);
    localStorage.setItem('vintageCredit', vintageCredit);
    localStorage.setItem('certificateStandard', certificateStandard);
    localStorage.setItem('nftToken', nftToken);
    localStorage.setItem('projectDescription', projectDescription);
    localStorage.setItem('walletAddress', walletAddress);

    
    // Redirect to review page
    window.location.href='review.html';
});

// let form = document.querySelector('#carbon-credit-form');
// form.addEventListener('click', submitForm());
// function submitForm() {
//     console.log('submit form')
// }