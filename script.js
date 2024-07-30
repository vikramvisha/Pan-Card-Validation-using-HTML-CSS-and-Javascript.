
document.getElementById('pan-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const panInput = document.getElementById('pan-input').value;
    const resultDiv = document.getElementById('result');
    
    if (isValidPAN(panInput)) {
        resultDiv.textContent = 'The PAN card number is valid.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = ' invalid PAN number.';
        resultDiv.style.color = 'red';
    }
});

function isValidPAN(panNumber) {
    const pattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return pattern.test(panNumber);
}
