// Click counter logic
let count = 0;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('clicker'); // Create button
  const counterDisplay = document.getElementById('counter'); // Create the counter display

  button.addEventListener('click', () => {
    count++; // Increment the count
    counterDisplay.textContent = count; // Update the counter display
  });
});
