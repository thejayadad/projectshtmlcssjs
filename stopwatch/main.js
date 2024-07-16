let timerInterval;
let totalMilliseconds = 0;
let timerRunning = false;

const timerElement = document.getElementById('timer');
const millisecondsElement = document.getElementById('milliseconds');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    const startTime = Date.now() - totalMilliseconds; // Adjust start time by subtracting elapsed time
    timerInterval = setInterval(function() {
      const elapsedTime = Date.now() - startTime;
      totalMilliseconds = elapsedTime;
      updateTimerDisplay();
    }, 10); // Update every 10 milliseconds
  }
}

function pauseTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
  totalMilliseconds = 0;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(totalMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(totalMilliseconds % 1000);

  timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  millisecondsElement.textContent = `:${pad3(milliseconds)}`;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}

function pad3(value) {
  if (value < 10) return `00${value}`;
  if (value < 100) return `0${value}`;
  return value;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
