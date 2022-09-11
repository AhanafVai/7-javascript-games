const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitSpot;
let currentTime = 30;
let timerId = null;

const randomSquare = () => {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add("mole");

  hitSpot = randomSquare.id;
};

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitSpot) {
      result++;
      score.textContent = result;
      hitSpot = null;
    }
  });
});

const moveMole = () => {
  timerId = setInterval(randomSquare, 1000);
};

moveMole();

const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! Your final score is " + result);
  }
};

let countDownTimerId = setInterval(countDown, 1000);
