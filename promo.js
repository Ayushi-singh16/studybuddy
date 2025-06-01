let minutes = 25;
let seconds = 0;
let timer;
let isRunning = false;

function updateDisplay() {
    document.getElementById("minute").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("second").textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    document.getElementById("status").textContent = "Time's up! Take a break.";
                    isRunning = false;
                    return;
                }
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
        document.getElementById("status").textContent = "Focus Time!";
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("status").textContent = "Paused.";
}

function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateDisplay();
    isRunning = false;
    document.getElementById("status").textContent = "Focus Time!";
}

updateDisplay();
