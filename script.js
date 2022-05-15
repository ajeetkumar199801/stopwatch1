//initilizing all the unit of time with 0 through array and then destructuring it
let [centiseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//getting the dom value
let timerRef = document.querySelector(".timerDisplay");
//initializing the variable for setInterval
let int = null;

//Implementing function when someone start the stopwatch
document.getElementById("startTimer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  //incresing the centisecond on per 10 milisecond
  int = setInterval(displayTimer, 10);
});

//implementing the pause button of stopwatch when someone click on pause button we just stop the running of setInterval using clearInterval function
document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
});
//implementation of reset button functionality it first stop the watch by stoping setInterval() function and then stop the setInterval() function using clearInterval() and resetting all the value to 0
document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  [centiseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 00 ";
});

// the function which is called by setInterval() function and here all the unit of time like second and minute,hour is manipulating
function displayTimer() {
  centiseconds += 1;
  if (centiseconds == 100) {
    centiseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  //converting all the unit of time in two digit even when it is in single digit using padStart()
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes.toString().padStart(2, "0");
  let s = seconds.toString().padStart(2, "0");
  let centis = centiseconds.toString().padStart(2, "0");

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${centis}`;
}
