// * DOM Elements

const startBtn = document.getElementById("startBtn");
const cancelBtn = document.getElementById("cancelBtn");

cancelBtn.style["display"] = "none";

const whatTime = document.getElementById("whatTime");
const whatTimeButton = document.getElementById("whatTimeButton");
const timerDisplay = document.getElementById("timerDisplay");

const pomodoroCountDisplay = document.getElementById("pomodoroCount");

// * Elements for program

let signal = new Audio("./assets/Finish Signal.mp3");

let pomodoroCount = 0;
let time = 10;

let breakTime = false;

if (breakTime == false) {
  whatTime.textContent = "Work";
} else {
  whatTime.textContent = "Break";
}

let timerInterval;

pomodoroCountDisplay.textContent = pomodoroCount;

// * Program

startBtn.onclick = () => {
  let i = time;
  startBtn.style["display"] = "none";
  cancelBtn.style["display"] = "initial";
  timerInterval = setInterval(() => {
    if (i != 0) {
      i--;
      timerDisplay.textContent =
        (~~(i / 60) < 10 ? "0" : "") +
        ~~(i / 60) +
        ":" +
        (~~(i % 60) < 10 ? "0" : "") +
        ~~(i % 60);
    } else {
      breakTime = !breakTime;
      signal.play();

      if (breakTime == false) {
        whatTime.textContent = "Work";
        whatTimeButton.textContent = "Work";
        time = 10;
        pomodoroCount += 1;
        pomodoroCountDisplay.textContent = pomodoroCount;
        alert("Time to work!");
      } else {
        alert("Break time!");
        whatTime.textContent = "Break";
        whatTimeButton.textContent = "Break";

        if (pomodoroCount % 5 == 0) {
          time = 7;
        } else {
          time = 5;
        }
      }

      startBtn.style["display"] = "initial";
      cancelBtn.style["display"] = "none";

      clearInterval(timerInterval);
    }
  }, 1000);
};

cancelBtn.onclick = () => {
  clearInterval(timerInterval);
  timerDisplay.textContent = "";

  pomodoroCountDisplay.textContent = pomodoroCount;

  if (breakTime == false) {
    whatTime.textContent = "Work";
  } else {
    whatTime.textContent = "Break";
  }

  startBtn.style["display"] = "initial";
  cancelBtn.style["display"] = "none";
};
