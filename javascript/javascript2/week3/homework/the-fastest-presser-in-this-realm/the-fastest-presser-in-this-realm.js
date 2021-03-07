const defaultGameDuration = 30;
const startButton = document.getElementById("startButton");
const lElement = document.getElementById("lElement");
const lCountElement = document.getElementById("lCountElement");
const sElement = document.getElementById("sElement");
const sCountElement = document.getElementById("sCountElement");
const timerElement = document.querySelector(".timer");
const messageElement = document.getElementById("messageElement");
const messageImageElement = document.getElementById("messageImageElement");

let blowingAudio = new Audio('audio/blowing.mp3');
let popAudio = new Audio('audio/pop.mp3');

const lConfetti = new ConfettiGenerator({ target: 'lCanvas' });
const sConfetti = new ConfettiGenerator({ target: 'sCanvas' });

function quiverLetters() {
    sElement.style.fontWeight = Math.floor(Math.random() * 8) * 100;
    sElement.style.transform = "rotate(" + (Math.floor(Math.random() * 20) - 10) + "deg)";
    lElement.style.fontWeight = Math.floor(Math.random() * 8) * 100;
    lElement.style.transform = "rotate(" + (Math.floor(Math.random() * 20) - 10) + "deg)";
}

let countDownTimeOut;
function countDown() {
    gameTimeLeft--;
    timerElement.innerHTML = gameTimeLeft;
    if (gameTimeLeft > 0) {
        countDownTimeOut = setTimeout(countDown, 1000);
    }
    else {
        gameStarted = false;
        messageElement.innerHTML = "Time's Up!";
        if (lPressCount >= sPressCount) {
            lConfetti.render();
            lElement.innerHTML = ".";
        }
        if (lPressCount <= sPressCount) {
            sConfetti.render();
            sElement.innerHTML = ".";
        }
        popAudio.play();
    }
}

let quiverInterval;
let gameStarted = false;
function go() {
    messageElement.innerHTML = "Go!!!";
    messageImageElement.src = "img/green.png";
    lCountElement.innerHTML = 0;
    sCountElement.innerHTML = 0;
    gameStarted = true;
    quiverInterval = setInterval(quiverLetters, 100);
    timerElement.innerHTML = gameTimeLeft;
    setTimeout(countDown, 1000);
}

function ready() {
    messageElement.innerHTML = "Ready?";
    messageImageElement.src = "img/yellow.png";
    setTimeout(go, 2000);
}

function wait() {
    messageElement.innerHTML = "Wait for it!";
    messageImageElement.style.visibility = "visible";
    setTimeout(ready, 2000);
}

let gameTimeLeft;
startButton.addEventListener("click", () => {
    gameTimeLeft = parseInt(inputTimeElement.value);
    if (isNaN(gameTimeLeft)) {
        gameTimeLeft = defaultGameDuration;
    }
    resetGame();
    wait();
});

function getNewFontSize(count) {
    count = Math.floor(count / 10);
    return count < 14 ? ((count + 2) + "em") : "16em";
}

let lPressCount = 0;
let sPressCount = 0;
function keyCounter(e) {
    if (gameStarted) {
        if (e.key == "l") {
            lPressCount++;
            if (lPressCount % 5 == 0) {
                blowingAudio.play();
            }
        } else if (e.key == "s") {
            sPressCount++;
            if (sPressCount % 5 == 0) {
                blowingAudio.play();
            }
        }
    }
    lCountElement.innerHTML = lPressCount;
    lElement.style.fontSize = getNewFontSize(lPressCount);
    sCountElement.innerHTML = sPressCount;
    sElement.style.fontSize = getNewFontSize(sPressCount);
}
document.addEventListener("keyup", keyCounter);

function resetGame() {
    if (countDownTimeOut != null) {
        clearTimeout(countDownTimeOut);
    }
    lPressCount = 0;
    sPressCount = 0;
    lConfetti.clear();
    sConfetti.clear();
    clearInterval(quiverInterval);
    sElement.innerHTML = "S";
    sElement.style.fontWeight = "bold";
    sElement.style.transform = "rotate(0deg)";
    lElement.innerHTML = "L";
    lElement.style.fontWeight = "bold";
    lElement.style.transform = "rotate(0deg)";
    messageImageElement.src = "img/red.png";
    messageImageElement.style.visibility = "hidden";
    timerElement.innerHTML = "00:00";
}

