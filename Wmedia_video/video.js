const video = document.querySelector('.video');
const playButton = document.querySelector('.play');
const playButtonIcon = document.querySelector('i');
const stopButton = document.querySelector('.stop');
const progressBar = document.querySelector('.progress');
const timestamp = document.querySelector('.timestamp');
const control = document.querySelector('.controls');

video.addEventListener('click',playPauseVideo);
progressBar.addEventListener('change',setVideoProgress);
playButton.addEventListener('click',playPauseVideo);
stopButton.addEventListener('click',stopVideo);
video.addEventListener('timeupdate',updateVideoProgress);

function playPauseVideo(){
    video.paused == true ? video.play():video.pause(); 
    playButtonToggleIncon();
}

function playButtonToggleIncon(){
    if (video.paused) {
        playButtonIcon.classList.remove("fa-pause")
        playButtonIcon.classList.add("fa-play");
    } else {
        playButtonIcon.classList.remove("fa-play");
        playButtonIcon.classList.add("fa-pause");
        // setTimeout(function(){
        //     console.log(control.style.display='none');
        // },3000);
    }
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
    playButtonToggleIncon();
    progressBar.value = 0;
}

function setVideoProgress() {
    let currentTime = Number((progressBar.value * video.duration)/100);
    video.currentTime = currentTime;
}

function updateVideoProgress() {
    progressBar.value = Number((video.currentTime / video.duration)*100);
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);
    if (minutes <10) {
        minutes = '0'+minutes;
    }
    if (seconds <10) {
        seconds = '0'+seconds;
    }
    timestamp.textContent = `${minutes}:${seconds}`;
}
