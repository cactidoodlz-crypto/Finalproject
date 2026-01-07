// Get the audio element by its ID
const audio = document.getElementById('background-music');
// Set a lower volume if desired
audio.volume = 0.5;

// Function to start the music
function startMusic() {
    // Attempt to play the audio
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Autoplay started!
            console.log("Music started playing on user scroll.");
        }).catch(error => {
            // Autoplay was prevented. Show a UI element to let the user manually play it.
            console.log("Autoplay was blocked. User interaction required to start music.");
            // You could show a visible play button here if needed
        });
    }

    // Remove the event listener after the first interaction
    window.removeEventListener('click', startMusic);
}

// Add an event listener to the window for the 'scroll' event
window.addEventListener('click', startMusic);

// Alternatively, you can use other user interactions like 'click', 'keydown', etc.
// window.addEventListener('click', startMusic);
