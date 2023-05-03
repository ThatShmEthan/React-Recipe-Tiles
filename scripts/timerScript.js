
// Function to change display timer to time
function setDisplayTime(secondTime) {
  var displaySeconds = document.getElementById("timer-seconds");
  var displayMinutes = document.getElementById("timer-minutes");
  var displayHours = document.getElementById("timer-hours");
  var hoursLeft = Math.floor((secondTime / 60) / 60);
  var minutesLeft = Math.floor((secondTime - (hoursLeft * 60 * 60)) / 60);
  var secondsLeft = Math.floor(secondTime - minutesLeft * 60);
  displaySeconds.textContent = timerFormat(secondsLeft);
  displayMinutes.textContent = timerFormat(minutesLeft);
  displayHours.textContent = timerFormat(hoursLeft);
}

// Makes all time numbers take the 01 - 99 format
function timerFormat(x) {
  x = (x < 0) ? 0 : x;
  return (x < 10) ? '0' + x.toString() : x.toString();
}

// Sets a timer using cookies and keeps it consistent across pages. Checks once per second.
function setCookieTimer(durationSeconds) {
  setDisplayTime(durationSeconds);
  setCookie("reciPlsTimerOn", 1);
  setCookie("reciPlsTimerStart", Date.now());
  setCookie("reciPlsTimerDuration", durationSeconds * 1000);
  cookieTimerIntervalStart();
  updatePageTimer();
}

// Checks if Cookie Timer is done
function checkCookieTimerDone() {
  if (getCookie("reciPlsTimerOn") != 0 && Date.now() - getCookie("reciPlsTimerDuration") >= getCookie("reciPlsTimerStart")) {
    return true;
  } else {
    return false;
  }
}

// Updates display timer using Cookie Timer
function updatePageTimer() {
  if (getCookie("reciPlsTimerOn") == '0') {
    return;
  }
  var displaySeconds = document.getElementById("timer-seconds");
  var displayMinutes = document.getElementById("timer-minutes");
  var displayHours = document.getElementById("timer-hours");
  var millisecondsLeft =
    getCookie("reciPlsTimerDuration") -
    (Date.now() - getCookie("reciPlsTimerStart"));
  var hoursLeft = Math.floor(((millisecondsLeft / 1000) / 60) / 60);
  var minutesLeft = Math.floor(((millisecondsLeft - hoursLeft * 1000 * 60 * 60) / 1000) / 60);
  var secondsLeft = Math.round((millisecondsLeft - minutesLeft * 1000 * 60) / 1000);
  displaySeconds.textContent = timerFormat(secondsLeft);
  displayMinutes.textContent = timerFormat(minutesLeft);
  displayHours.textContent = timerFormat(hoursLeft);
}


// Starts an interval to check if Cookie Timer is done and update the timer, also 
function cookieTimerIntervalStart() {
  var cookieTimerInterval = setInterval(function() {
    if (checkCookieTimerDone()) {
      setDisplayTime(0);
      if (getCookie("reciPlsTimerOn") != '0') {
        document.getElementById("timer").style.backgroundColor = "var(--timer-done-color)";
        document.getElementById("timer").style.cursor = "pointer";
        document.getElementById("timer").onclick = function() {
          document.getElementById("timer").style.backgroundColor = "var(--secondary-theme-color)";
          document.getElementById("timer").style.cursor = "pointer"
        };
      }
      setCookie("reciPlsTimerOn", 0);
      window.alert("Timer is Done");
      clearInterval(cookieTimerInterval);
    } else {
      updatePageTimer();
    }
  }, 1000);
}
