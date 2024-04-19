document.addEventListener('DOMContentLoaded', function () {
  const progressBar = document.querySelector('.progress-fill');
  const modal = document.getElementById('myModal');
  const closeButton = document.getElementsByClassName('close')[0];
  const startButton = document.getElementById('startButton');

  // Open the modal
  modal.style.display = 'block';

  // When the user clicks on the close button, close the modal
  closeButton.onclick = function() {
    modal.style.display = 'none';
  }

  // When the user clicks the start button, start the update
  startButton.onclick = function() {
    const minutes = parseInt(document.getElementById('minutes').value, 10);
    const seconds = parseInt(document.getElementById('seconds').value, 10);

    const durationInMilliseconds = (minutes * 60000) + (seconds * 1000); // Convert to milliseconds

    modal.style.display = 'none';

    // Set the width of the progress bar to 0% initially
    progressBar.style.width = '0%';

    // Animate the progress bar to 100% over the specified duration
    progressBar.style.transition = `width ${durationInMilliseconds}ms linear`;
    progressBar.style.width = '100%';

    // Hide the cursor
    document.body.style.cursor = 'none';

    setTimeout(() => {
      alert('macOS Update Complete!');
      // Optionally, reset the progress bar and reopen the modal here
      // Show the cursor again
      document.body.style.cursor = 'auto';
    }, durationInMilliseconds);
  }


  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
});
