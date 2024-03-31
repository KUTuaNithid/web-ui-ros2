// Get references to the input field and button
const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');



// Add an event listener to the button
submitButton.addEventListener('click', function() {
  // Get the value of the input field
  const inputValue = inputField.value;

  // Do something with the input value (for example, alert it)
  alert('Input value is: ' + inputValue);
  console.log('Input value is: ' + inputValue);
});