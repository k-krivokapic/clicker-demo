// This is your click counter logic
let count = 0;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clicker');
  const counterDisplay = document.getElementById('counter');

  button.addEventListener('click', () => {
    count++; // Increment the count
    counterDisplay.textContent = count; // Update the counter display
  });
});
