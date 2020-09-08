const video = document.getElementById('video');
const play  = document.getElementById('play');
const stop  = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp =document.getElementById('timestamp');

//functions for togglevideo
function toggleVideo(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }

}
//functions for updateicons
function updateIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    }else{
        play.innerHTML= '<i class="fas fa-pause fa-2x"></i>';
    }

}

//functions for progress
function updateProgress(){
progress.value = video.currentTime/video.duration*100;

//Rounding down the minutes 
let minutes = Math.floor(video.currentTime / 60);
if(minutes < 10){
    minutes = `0${minutes}`;
}

// Rounding down the seconds
let seconds = Math.floor(video.currentTime % 60);
if(seconds < 10){
   seconds = `0${seconds}`;
}
//Display Timestamp
timestamp.innerHTML = `${minutes}:${seconds}`;

}

//functions for stopvideo
function stopVideo(){
     video.pause();
     video.currentTime = 0;
}

//functions for setprogress
function setProgress(){
   video.currentTime = progress.value * video.duration/100;
    }
    

//video add listener
video.addEventListener('click', toggleVideo);

//video add listener
video.addEventListener('pause', updateIcon);

//video add listener
video.addEventListener('play', updateIcon);

//video add listener
video.addEventListener('timeupdate', updateProgress);

//play btn add listener
stop.addEventListener('click', stopVideo);

//play btn add listener
play.addEventListener('click', toggleVideo);

//play btn add listener
progress.addEventListener('change', setProgress);
