const animateButton = document.getElementById("animateButton");
const targetUrl = "https://t.me/aitumusicclub"; 
animateButton.addEventListener("click", () => {
    animateButton.classList.add("animate");
    
    setTimeout(() => {
        animateButton.classList.remove("animate");
    }, 300);
    window.open(targetUrl, "_blank");
});

window.onload = function() {
    alert('Here you can view the latest updates on our upcoming shows!'); 
}


function calculateTimeRemaining(endDate) {
    const currentTime = new Date().getTime();
    const endTime = new Date(endDate).getTime();
    const timeRemaining = endTime - currentTime;

    if (timeRemaining <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

function updateCountdown(endDate, displayElementId) {
    const displayElement = document.getElementById(displayElementId);
    const timeRemaining = calculateTimeRemaining(endDate);

    displayElement.innerHTML = `${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`;
}

const endDate1 = '2023-10-30T00:00:00';
const endDate2 = '2023-12-05T00:00:00';
const endDate3 = '2024-01-07T00:00:00';

setInterval(() => {
    updateCountdown(endDate1, 'timerDisplay1');
    updateCountdown(endDate2, 'timerDisplay2');
    updateCountdown(endDate3, 'timerDisplay3');
}, 1000);






function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabContents.forEach(tab => tab.style.display = 'none');

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active-tab'));

    document.getElementById(tabId).style.display = 'block';

    event.currentTarget.classList.add('active-tab');
}

openTab(1);



