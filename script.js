const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#reset');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = 'stopped';

function stopWatch() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = '0' + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = '0' + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = '0' + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText =
        leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

startStopBtn.addEventListener('click', function () {

    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);

        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-pause');
        icon.id = 'pause';

        startStopBtn.replaceChildren(icon);

        timerStatus = 'started';

    } else {
        window.clearInterval(timerInterval);

        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-play');
        icon.id = 'play';

        startStopBtn.replaceChildren(icon);

        timerStatus = 'stopped';
    }

});

resetBtn.addEventListener('click', function () {

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').textContent = '00:00:00';
});



