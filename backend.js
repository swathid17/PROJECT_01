// Define static exchange rates (for simplicity)
const exchangeRates = {
    USD: { USD: 1, EUR: 0.91, INR: 83.14 },
    EUR: { USD: 1.10, EUR: 1, INR: 91.30 },
    INR: { USD: 0.012, EUR: 0.011, INR: 1 }
};

document.getElementById('converter-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Get input values
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // Perform conversion
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}
);
