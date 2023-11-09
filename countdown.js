document.addEventListener('DOMContentLoaded', function () {
    const countdownContainer = document.getElementById('countdown');

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
});
