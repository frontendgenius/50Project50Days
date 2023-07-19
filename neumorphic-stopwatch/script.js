// Get the necessary elements
const watch = document.querySelector(".watch");
const playButton = document.querySelector(".fa-play");
const resetButton = document.querySelector(".fa-rotate-right");

let startTime; // Variable to store the start time
let elapsedTime = 0; // Variable to store the elapsed time
let timerInterval; // Variable to store the setInterval instance

function formatTime(milliseconds) {
  // Format the time in HH:MM:SS format
  const hours = Math.floor(milliseconds / 3600000)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((milliseconds / 60000) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((milliseconds / 1000) % 60)
    .toString()
    .padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  // Store the start time
  startTime = Date.now() - elapsedTime;

  // Update the stopwatch every 100 milliseconds
  timerInterval = setInterval(() => {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // Update the display with the formatted time
    watch.textContent = formatTime(elapsedTime);
  }, 100);

  // Add active class to watch and play button
  watch.classList.add("active");
  playButton.parentElement.classList.add("active");
}

function stopTimer() {
  // Stop the timer by clearing the interval
  clearInterval(timerInterval);

  // Remove active class from watch and play button
  watch.classList.remove("active");
  playButton.parentElement.classList.remove("active");
}

function resetTimer() {
  // Stop the timer if running
  stopTimer();

  // Reset the elapsed time and update the display
  elapsedTime = 0;
  watch.textContent = "00:00:00";
  if (playButton.classList.contains("fa-pause")) {
    startTimer();
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
  }
}

// Add click event listeners to the buttons
playButton.addEventListener("click", () => {
  if (playButton.classList.contains("fa-play")) {
    startTimer();
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-pause");
  } else {
    stopTimer();
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
  }
});

resetButton.addEventListener("click", resetTimer);
