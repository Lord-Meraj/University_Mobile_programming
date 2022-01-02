const musiccontainer = document.getElementById('music-container');
const playbtn = document.getElementById('playbtn');
const prevbtn = document.getElementById('prevbtn');
const nextbtn = document.getElementById('nextbtn');
const audio = document.getElementById('audio');
const progress = document.getElementById('progressbar');
const title = document.getElementById('singer');
const cover = document.getElementById('cover');
const currtime = document.getElementById('currtime');
const durtime = document.getElementById('durtime');
//add music
const songs = ['Adele-Million-Years-Ago-128', 'Cecilia_Krull_My_Life_Is_Going_On_128', 'Sting-Shape-of-My-Heart-128', 'Taylor-Swift-Last-Christmas-128'];
var choosensong = sessionStorage.getItem('songname');
let index = songs.indexOf(choosensong);
let songindex;
if (index >= 0)
    songindex = index;
else
    songindex = 3;
loadsong(songs[songindex]);




function loadsong(song) {
    title.innerHTML = song;
    audio.src = "assets/music/" + song + ".mp3";
}




function playsong() {
    musiccontainer.classList.add('play');
    playbtn.querySelector('i.fa').classList.remove('fa-play');
    playbtn.querySelector('i.fa').classList.add('fa-pause');
    audio.play();
}




function pausesong() {
    musiccontainer.classList.remove('play');
    playbtn.querySelector('i.fa').classList.remove('fa-pause');
    playbtn.querySelector('i.fa').classList.add('fa-play');
    audio.pause();
}




function prevsong() {
    songindex--;
    if (songindex < 0)
        songindex = songs.length - 1;
    loadsong(songs[songindex]);
    playsong();
}




function nextsong() {
    songindex++;
    if (songindex > songs.length - 1)
        songindex = 0;
    loadsong(songs[songindex]);
    playsong();
}




function progressValue() {
    progress.max = audio.duration;

    if (progress.addEventListener("click", changeProgressBar))
        changeProgressBar();
    else
        progress.value = audio.currentTime;

    currtime.innerHTML = formatTime(audio.currentTime);
    durtime.innerHTML = formatTime(audio.duration);
}


function formatTime(sec) {

    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}



setInterval(progressValue, 500);
function changeProgressBar() {
    audio.currentTime = progress.value;
}


progress.addEventListener("click", changeProgressBar);


playbtn.addEventListener('click', () => {
    const isplaying = musiccontainer.classList.contains('play');
    if (isplaying) {
        pausesong();
    } else {
        playsong();
    }
});



prevbtn.addEventListener('click', prevsong);
nextbtn.addEventListener('click', nextsong);
audio.addEventListener('ended', nextsong);