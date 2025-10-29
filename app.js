const body = document.body;
const keyButtons = [...document.querySelectorAll(".key")];
const keys = keyButtons.map((keyButton) => keyButton.dataset.key);
const keyToButtonsMap = keyButtons.reduce((acc, keyButton) => {
  acc[keyButton.dataset.key] = keyButton;
  return acc;
}, {});

let currentKeyJiggle;
let score = 0;
let timeLeft = 30;
let gameInterval;

// Create timer and score display in the DOM
const scoreBoard = document.createElement("div");
scoreBoard.id = "score-board";
scoreBoard.innerText = `Score: 0`;

const timerDisplay = document.createElement("div");
timerDisplay.id = "timer";
timerDisplay.innerText = `Time left: ${timeLeft}s`;

// Insert them above the keyboard
const wrapper = document.querySelector(".game-wrapper");
wrapper.prepend(scoreBoard);
wrapper.prepend(timerDisplay);

// Check if the pressed key is correct
const checkKey = (inputKey) => {
  const upperKey = inputKey.toUpperCase();

  if (upperKey === currentKeyJiggle) {
    score++;
    scoreBoard.innerText = `Score: ${score}`;
    setRandomKeys();
  }
};

// Choose a random key to jiggle
const setRandomKeys = () => {
  if (currentKeyJiggle) {
    keyToButtonsMap[currentKeyJiggle].classList.remove("jiggle");
  }

  const randomIndex = Math.floor(Math.random() * keys.length);
  currentKeyJiggle = keys[randomIndex];
  keyToButtonsMap[currentKeyJiggle].classList.add("jiggle");
};

// Highlight the key when it's pressed
const flashButton = (key) => {
  const button = keyToButtonsMap[key.toUpperCase()];
  if (!button) return;
  button.classList.add("pressed");
  setTimeout(() => button.classList.remove("pressed"), 150);
};

// Start the game with a countdown timer
const startGame = () => {
  score = 0;
  timeLeft = 30;
  scoreBoard.innerText = `Score: ${score}`;
  timerDisplay.innerText = `Time left: ${timeLeft}s`;
  timerDisplay.classList.remove("timer-warning");

  setRandomKeys();

  gameInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `Time left: ${timeLeft}s`;

    if (timeLeft <= 10) {
      timerDisplay.classList.add("timer-warning");
    }

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      keyToButtonsMap[currentKeyJiggle]?.classList.remove("jiggle");
      alert(`Time's up! Your score: ${score}`);
    }
  }, 1000);
};

// Keyboard event listener
body.addEventListener("keyup", (e) => {
  const typedKey = e.key;
  flashButton(typedKey);
  checkKey(typedKey);
});

// Start the game
startGame();
