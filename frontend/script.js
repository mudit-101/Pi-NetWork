// Get the form and the input element for passphrase
const passphraseInput = document.getElementById('passphrase-input');
const submitButton = document.getElementById('submit-button');

// Function to send passphrase to server via AJAX
submitButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default form submission

  const passphrase = passphraseInput.value;

  // Validate passphrase before sending
  if (!passphrase) {
    alert('Please enter a passphrase');
    return;
  }

  // Send passphrase to the server using fetch
  fetch('/send-passphrase', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ passphrase: passphrase }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Passphrase sent successfully:', data);
      alert('Passphrase sent to your email!');
    })
    .catch(error => {
      console.error('Error sending passphrase:', error);
      alert('Failed to send passphrase');
    });
});
