document.addEventListener('DOMContentLoaded', function () {
  const progressBar = document.querySelector('.progress-fill');

  // Show a popup message to the user
  alert("Welcome to the Fake macOS Update Screen!\n\nThis website is created by Zigao Wang.\n\nTo set the time for the update, please enter the number of minutes and seconds when prompted.\n\nYour mouse cursor will be hided during the update.");

  // Prompt the user for the time in minutes and seconds
  const minutes = parseInt(prompt('Enter the number of minutes for the update:', '5'), 10);
  const seconds = parseInt(prompt('Enter the number of seconds for the update:', '0'), 10);

  if (isNaN(minutes)) {
      minutes = 5; // Default to 5 minutes if the input is empty or invalid
  }

  if (isNaN(seconds)) {
      seconds = 0; // Default to 0 seconds if the input is empty or invalid
  }

  const durationInMilliseconds = (minutes * 60000) + (seconds * 1000); // Convert minutes and seconds to milliseconds

  // Set the width of the progress bar to 0% initially
  progressBar.style.width = '0%';

  // Animate the progress bar from 0% to 100% based on the user's input duration
  progressBar.style.transition = `width ${durationInMilliseconds}ms linear`;
  progressBar.style.width = '100%';

  // After the specified duration, you can perform an action, for example, display a message
  setTimeout(() => {
      alert('macOS Update Complete');
  }, durationInMilliseconds);
});
