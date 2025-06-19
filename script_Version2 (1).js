// Music Player Implementation
function initMusicPlayer() {
    const audio = document.getElementById('background-music');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const muteBtn = document.getElementById('mute-btn');
    const volumeSlider = document.getElementById('volume-slider');
    
    // Set initial volume
    audio.volume = volumeSlider.value / 100;
    
    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Mute functionality
    muteBtn.addEventListener('click', function() {
        if (audio.muted) {
            audio.muted = false;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            volumeSlider.value = audio.volume * 100;
        } else {
            audio.muted = true;
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
    
    // Volume control
    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value / 100;
        
        // Update icon based on volume level
        if (this.value == 0) {
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            audio.muted = true;
        } else {
            if (this.value < 50) {
                muteBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
            } else {
                muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
            audio.muted = false;
        }
    });
}

// Add to your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Other initializations...
    
    // Initialize music player
    initMusicPlayer();
});
