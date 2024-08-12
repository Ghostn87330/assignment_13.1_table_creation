document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer'); // Get the audio element by its ID
    const playPauseBtn = document.getElementById('playPauseBtn'); // Get the play/pause button by its ID
    const seekBar = document.getElementById('seekBar'); // Get the seek bar by its ID

    playPauseBtn.addEventListener('click', () => { // Add click event listener to the play/pause button
        if (audioPlayer.paused) { // Check if the audio is paused
            audioPlayer.play(); // Play the audio
            playPauseBtn.textContent = 'Pause'; // Change button text to 'Pause'
        } else {
            audioPlayer.pause(); // Pause the audio
            playPauseBtn.textContent = 'Play'; // Change button text to 'Play'
        }
    });

    audioPlayer.addEventListener('timeupdate', () => { // Add timeupdate event listener to the audio element
        seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100; // Update seek bar value based on audio progress
    });

    seekBar.addEventListener('input', () => { // Add input event listener to the seek bar
        audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration; // Update audio current time based on seek bar value
    });
});