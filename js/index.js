const video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const progress = document.querySelector("#progress");

play.addEventListener("click", handlePlay);
pause.addEventListener("click", handlePause);
backward.addEventListener("click", handleBackward);
forward.addEventListener("click", handleForward);

function handlePlay() {
  video.play();
  play.hidden = true;
  pause.hidden = false;
}
function handlePause() {
  video.pause();
  play.hidden = false;
  pause.hidden = true;
}
function handleBackward() {
  video.currentTime -= 10;
}
function handleForward() {
  video.currentTime += 10;
}

video.addEventListener("loadedmetadata", handleLoaded);
video.addEventListener("timeupdate", handleTimeUpdate);
progress.addEventListener("input", handleInput);
video.addEventListener("play", handlePlayed);
video.addEventListener("pause", handlePaused);
video.addEventListener("click", handleStart);

function handleLoaded() {
  progress.max = video.duration;
}
function handleTimeUpdate() {
  progress.value = video.currentTime;
}
function handleInput() {
  video.currentTime = progress.value;
}
function handlePlayed() {
  play.hidden = true;
  pause.hidden = false;
}
function handlePaused() {
  play.hidden = false;
  pause.hidden = true;
}
let active = false;
function handleStart() {
  if (!active) {
    active = true;
    handlePlay();
  } else {
    active = false;
    handlePause();
  }
}
