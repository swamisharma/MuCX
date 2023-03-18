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
    changeSongDetails(playList[currentSong]);
    audioElement.src = playList[currentSong].audio;
    audioElement.play();
});

forwardButton.addEventListener("click", () => {
    if (currentSong < playList.length-1){
        currentSong++;
    }
    changeSongDetails(playList[currentSong]);
    audioElement.src = playList[currentSong].audio;
    audioElement.play();
});

function changeSongDetails(obj){
    document.querySelector(".song-cover img").remove();
    let imgDiv = document.querySelector(".song-cover");

    let newImg = document.createElement("img");
    newImg.setAttribute('src', obj.cover);
    imgDiv.appendChild(newImg);

    document.querySelector(".song-name").textContent = obj.name;
    document.querySelector(".song-artist").textContent = obj.artist;
}

//PLAYLIST-SIDE-BAR
let sidebarMenu = document.querySelector(".fa-list");
let closeMenu = document.querySelector(".fa-xmark");
let overlay = document.querySelector(".overlay");

sidebarMenu.addEventListener('click', () => {
    document.querySelector(".playlist-side-bar").classList.remove("playlist-side-bar-close");
    document.querySelector(".overlay").classList.add("overlay-open");
});

closeMenu.addEventListener("click", () => {
    document.querySelector(".playlist-side-bar").classList.add("playlist-side-bar-close");
    document.querySelector(".overlay").classList.remove("overlay-open");
});

overlay.addEventListener("click", () => {
    document.querySelector(".playlist-side-bar").classList.add("playlist-side-bar-close");
    document.querySelector(".overlay").classList.remove("overlay-open");
});

//PLAYLIST-SIDE-BAR-CONTENT
let playlistContentDiv = document.querySelector(".playlist-content");
playList.forEach((song) => {
    let playlistSongDetail = document.createElement("div");
    playlistSongDetail.classList.add("playlist-song-detail");
    
    let contentSongImg = document.createElement("div");
    contentSongImg.classList.add("content-song-img");
    let image = document.createElement("img");
    image.setAttribute("src", song.cover);
    image.setAttribute("alt", "Cover");
    contentSongImg.appendChild(image);

    let contentSongDetail = document.createElement("div");
    contentSongDetail.classList.add("content-song-detail");

    let h4 = document.createElement("h4");
    h4.classList.add("content-song-name");
    h4.textContent = song.name;
    let h6 = document.createElement("h6");
    h6.classList.add("content-song-artist");
    h6.textContent = song.artist;

    contentSongDetail.appendChild(h4);
    contentSongDetail.appendChild(h6);

    playlistSongDetail.appendChild(contentSongImg);
    playlistSongDetail.appendChild(contentSongDetail);
    
    playlistContentDiv.appendChild(playlistSongDetail);
})

//PLAYLIST-SEARCH-FEATURE
let searchbar = document.querySelector(".search-section input");

searchbar.addEventListener("keyup", (e) => {
    let songlist = document.querySelectorAll(".content-song-detail");

    songlist.forEach((song) => {
        if (song.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) < 0){
            song.parentElement.style.display = "none";
        }
        else {
            song.parentElement.style.display = "flex";
        }
    });
});

// UPDATE-SEEKBAR
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
    //timeSpan[0].textContent = `${Math.floor(audioElement.currentTime/60)}:${Math.floor(audioElement.currentTime%60)}`;
})