function endworlddate() {
    const currentDate = new Date().toLocaleDateString('en-US');

// Update the content with the current date
document.getElementById('currentDate').innerText = currentDate;
}

function loadendworld() {
    worldenddate = setInterval(() => {
        endworlddate()
    }, 50)
    fetch('endworld.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('drawing-container').innerHTML = data;
        })
        .catch(error => console.error('Error fetching content:', error));
}

function loadrealworldend() {
    fetch('realworldend.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        })
        .catch(error => console.error('Error fetching content:', error));
}

function start() {
    loadendworld()
    clearInterval(animationInterval)
    setTimeout(() => {
        clearInterval(worldenddate)
    }, 1000)
}

const fonts = ['Shadows Into Light', 'Pacifico', 'Dancing Script', 'Indie Flower'];

let currentFontIndex = 0;
let animationInterval;
let worldenddate;

animationInterval = setInterval(() => {
    document.querySelector('button').style.fontFamily = fonts[currentFontIndex];
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
}, 500);