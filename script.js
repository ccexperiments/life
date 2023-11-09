function endworlddate() {
    const currentDate = new Date().toLocaleDateString('en-US');

// Update the content with the current date
document.getElementById('currentDate').innerText = currentDate;
}

function loadendworld() {
    worldenddate = setInterval(() => {
        endworlddate()
        document.getElementById("next-button").style.display = 'none'
    }, 50)
    setTimeout(() => {
        document.getElementById("next-button").style.display = 'block'
    }, 1000);
    fetch('endworld.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('drawing-container').innerHTML = data;
        })
        .catch(error => console.error('Error fetching content:', error));
}

function loadrealworldend() {
    let countdownintervalset
    fetch('realworldend.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        })
        .catch(error => console.error('Error fetching content:', error));

        countdownintervalset = setInterval(() => {
            countdownContainer = document.getElementById('countdown');
        },100)

        setTimeout(() => {
            clearInterval(countdownintervalset)
        }, 1000)
        startCountdown()
}

function start() {
    loadendworld()
    clearInterval(animationInterval)
    setTimeout(() => {
        clearInterval(worldenddate)
    }, 1000)
}

// Wrap the countdown logic in a function
function startCountdown() {
    console.log("try")

    // Set the date we're counting down to
    const countDownDate = new Date('Sep 21, 2028 00:00:00').getTime();

    // Update the countdown every 1 second
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        countdownContainer.innerHTML = `
            <p>${days}d ${hours}h ${minutes}m ${seconds}s</p>
        `;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownContainer.innerHTML = '<p>The world may have ended.</p>';
        }
    }, 1000);
}

const fonts = ['Shadows Into Light', 'Pacifico', 'Dancing Script', 'Indie Flower'];

let currentFontIndex = 0;
let animationInterval;
let worldenddate;

animationInterval = setInterval(() => {
    document.querySelector('button').style.fontFamily = fonts[currentFontIndex];
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
}, 500);