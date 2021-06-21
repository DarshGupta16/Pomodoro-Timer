// * DOM Elements

const startBtn = document.getElementById("startBtn");
const cancelBtn = document.getElementById("cancelBtn");

cancelBtn.style["display"] = "none";

const whatTime = document.getElementById("whatTime");
const timerDisplay = document.getElementById("timerDisplay");

const pomodoroCountDisplay = document.getElementById("pomodoroCount");

// * Elements for program

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
      // TODO make alarm ring when time over
      breakTime = !breakTime;

      if (breakTime == false) {
        whatTime.textContent = "Work";
        time = 10;
        pomodoroCount += 1;
        pomodoroCountDisplay.textContent = pomodoroCount;
      } else {
        // TODO make this buttom say 'Start Break' if break time
        whatTime.textContent = "Break";

        // TODO make this 30 minutes if 5 pomodoros are over
        time = 5;
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
