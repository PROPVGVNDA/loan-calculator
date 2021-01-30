'use strict'
// Licten for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
    // Hide results
    document.getElementById('results').style.display = 'none';
    

    // Show loader

    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);
    e.preventDefault();
});


// Calculate results
function calculateResults() {
    // UI variables
    const UIamount = document.getElementById('amount');
    const UIinterest = document.getElementById('interst');
    const UIyears = document.getElementById('years');
    const UImonthlyPayment = document.getElementById('monthly-payment');
    const UItotalPayment = document.getElementById('total-payment');
    const UItotalInterest = document.getElementById('total-interest');

    const principal = parseFloat(UIamount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if(isFinite(monthly)) {
        UImonthlyPayment.value = monthly.toFixed(2);
        UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
        UItotalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    } else {
        document.getElementById('loading').style.display = 'none';
        showError('Please check your numbers');
    }
}

// Show Error
function showError(errorMsg) {
    // Create div
    const errorDiv = document.createElement('div');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(errorMsg));

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear Error

function clearError() {
    document.querySelector('.alert').remove();
}