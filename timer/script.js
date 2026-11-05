let timer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval = null;

function start() {

    if (interval !== null) return;

    interval = setInterval(() => {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        displayTime();

    }, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    clearInterval(interval);
    interval = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    displayTime();
}

function displayTime() {

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timer.innerText = `${h}:${m}:${s}`;
}

displayTime();