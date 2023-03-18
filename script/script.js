import playList from "./data.js";

let currentSong = 0;
let audioElement = new Audio(playList[currentSong].audio);
let slider = document.querySelector(".slider");
let timeSpan = document.querySelectorAll(".slider-bar span");

//PLAY-PAUSE-TOGGLE
const play_pause = document.querySelector(".play-pause");

play_pause.addEventListener("click", () => {
    if (play_pause.classList.contains("fa-play")){
        play_pause.classList.remove("fa-play");
        play_pause.classList.add("fa-pause");
        audioElement.play();
    }
    else {
        play_pause.classList.remove("fa-pause");
        play_pause.classList.add("fa-play");
        audioElement.pause()
    }
});

//PAGE-LOAD
document.querySelector("body").addEventListener("load", pageSetUp());

function pageSetUp(){
    let imgDiv = document.querySelector(".song-cover");
    let newImg = document.createElement("img");

    newImg.setAttribute('src', playList[0].cover);
    imgDiv.appendChild(newImg);

    document.querySelector(".song-name").textContent = playList[currentSong].name;
    document.querySelector(".song-artist").textContent = playList[currentSong].artist;
}

//SONG-TRAVERSING
let backButton = document.querySelector(".fa-backward-step");
let forwardButton = document.querySelector(".fa-forward-step");

backButton.addEventListener("click", () => {
    if (currentSong > 0){
        currentSong--;
    }
    audioElement.src = playList[currentSong].audio;
    // audioElement.play();
});

forwardButton.addEventListener("click", () => {
    if (currentSong < playList.length-1){
        currentSong++;
    }
    audioElement.src = playList[currentSong].audio;
    // audioElement.play();
});

//SONG-DETAILS-RENDERING
audioElement.addEventListener("loadeddata", () => {
    document.querySelector(".play-pause").style.display = "flex";
    document.querySelector(".buttons img").style.display = "none";
    
    document.querySelector(".song-cover img").remove();
    let imgDiv = document.querySelector(".song-cover");

    let newImg = document.createElement("img");
    newImg.setAttribute('src', playList[currentSong].cover);
    imgDiv.appendChild(newImg);

    document.querySelector(".song-name").textContent = playList[currentSong].name;
    document.querySelector(".song-artist").textContent = playList[currentSong].artist;
    timeSpan[1].textContent = `${Math.floor(audioElement.duration/60)}:${Math.floor(audioElement.duration%60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })}`;

    if (play_pause.classList.contains("fa-pause")){
        audioElement.play();
    }
    else {
        audioElement.pause()
    }
});

// audioElement.addEventListener("play", () => {
//     document.querySelector(".play-pause").style.display = "flex";
//     document.querySelector(".buttons img").style.display = "none";
// });

audioElement.addEventListener("ended", () => {
    if (currentSong < playList.length-1){
        currentSong++;
    }
    audioElement.src = playList[currentSong].audio;
});

audioElement.addEventListener("progress", () => {
    document.querySelector(".play-pause").style.display = "none";
    document.querySelector(".buttons img").style.display = "flex";
});

//UPDATE-SEEKBAR
audioElement.addEventListener('timeupdate', ()=>{ 
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*1000); 
    slider.value = progress;
    timeSpan[0].textContent = `${Math.floor(audioElement.currentTime/60)}:${Math.floor(audioElement.currentTime%60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })}`;
})

slider.addEventListener('change', ()=>{
    audioElement.currentTime = slider.value * audioElement.duration/1000;
    timeSpan[0].textContent = `${Math.floor(audioElement.currentTime/60)}:${Math.floor(audioElement.currentTime%60)}`;
})