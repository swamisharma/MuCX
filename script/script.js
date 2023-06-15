import playList from "./data.js";

let currentSong = 0;
if (window.location.pathname.slice(1)) {
    let songIndex;
    let uri = decodeURI(window.location.pathname.slice(1));

    playList.forEach((song, index) => {
        if (song.name === uri){
            songIndex = index;
        } 
    })

    if (!songIndex) {
        songIndex = isNaN(localStorage.getItem("currentSong")) ? 0 : parseInt(localStorage.getItem("currentSong"));
    }

    currentSong = songIndex;
}
else if (localStorage.getItem("currentSong")) {
    currentSong = parseInt(localStorage.getItem("currentSong"));
}

let likedSongs = [];
if (!localStorage.getItem("likedSongs")) {
    localStorage.setItem("likedSongs", JSON.stringify([]));
}
else {
    likedSongs = JSON.parse(localStorage.getItem("likedSongs"));
}

let audioElement = new Audio(playList[currentSong].audio);
let slider = document.querySelector(".slider");
let timeSpan = document.querySelectorAll(".slider-bar span");
const likeBtn = document.querySelector("span.favorite");
const loopBtn = document.querySelector("span.repeat_one");
const shareBtn = document.querySelector("span.share");

//PLAY-PAUSE-TOGGLE
const play_pause = document.querySelector(".play-pause");

play_pause.addEventListener("click", () => {
    if (play_pause.classList.contains("fa-play")){
        play_pause.classList.remove("fa-play");
        play_pause.classList.add("fa-pause");
        audioElement.play();
        document.title = playList[currentSong].name;
    }
    else {
        play_pause.classList.remove("fa-pause");
        play_pause.classList.add("fa-play");
        audioElement.pause()
        document.title = "Mu-CX";
    }
});

//PAGE-LOAD
document.querySelector("body").addEventListener("load", pageSetUp());

//SONG-TRAVERSING
let backButton = document.querySelector(".fa-backward-step");
let forwardButton = document.querySelector(".fa-forward-step");

backButton.addEventListener("click", () => {
    if (currentSong > 0){
        currentSong--;
    }
    else {
        currentSong = playList.length-1;
    }
    onSongChange();
    debounce(changeSongMedia());
});

forwardButton.addEventListener("click", () => {
    if (currentSong < playList.length-1){
        currentSong++;
    }
    else {
        currentSong = 0;
    }
    onSongChange();
    debounce(changeSongMedia());
});

//PLAY-SONG-FROM-PLAYLIST
let playlistdiv = document.querySelectorAll(".playlist-song-detail");

playlistdiv.forEach((div) => {
    div.addEventListener("click", () => {
        currentSong = div.classList[0];
        onSongChange();
        changeSongMedia();
    });
})

//SONG-MEDIA-LOADING
audioElement.addEventListener("loadeddata", () => {
    document.querySelector(".play-pause").style.display = "flex";
    document.querySelector(".buttons img").style.display = "none";

    slider.value = 0;
    highlightSongInPlaylist();

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

    localStorage.setItem("currentSong", `${currentSong}`);
});

audioElement.addEventListener("ended", () => {
    if (loopBtn.textContent === "repeat_one_on") {
        audioElement.play();
        return;
    }
    if (currentSong < playList.length-1){
        currentSong++;
    }
    else {
        currentSong = 0;
    }
    onSongChange();
    changeSongMedia();
});

audioElement.addEventListener("loadstart", () => {
    slider.value = 0;
    document.querySelector(".play-pause").style.display = "none";
    document.querySelector(".buttons img").style.display = "flex";
    if (likedSongs.includes(currentSong)){
        likeBtn.classList.add("favorite-filled");
    }
    else {
        likeBtn.classList.remove("favorite-filled");
    }
});

//UPDATE-SEEKBAR
audioElement.addEventListener('timeupdate', ()=>{ 
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*1000); 
    slider.value = progress;
    timeSpan[0].textContent = `${Math.floor(audioElement.currentTime/60)}:${Math.floor(audioElement.currentTime%60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })}`;
});

slider.addEventListener('change', ()=>{
    audioElement.currentTime = slider.value * audioElement.duration/1000;
    timeSpan[0].textContent = `${Math.floor(audioElement.currentTime/60)}:${Math.floor(audioElement.currentTime%60)}`;
});

//FORWARD-BACKWARD

window.addEventListener('popstate', () => {
    currentSong = parseInt(window.location.pathname.slice(1));
    onSongChange();
}, false);

//EXTRA-BUTTONS
likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("favorite-filled");
    if (!likedSongs.includes(currentSong)){
        likedSongs.push(currentSong);
    }
    else {
        let pos = likedSongs.indexOf(currentSong);
        likedSongs[pos] = likedSongs[likedSongs.length-1];
        likedSongs.pop();
    }
    localStorage.setItem("likedSongs",JSON.stringify(likedSongs));
});

loopBtn.addEventListener("click", () => {
    loopBtn.textContent = (loopBtn.textContent === "repeat_one") ? "repeat_one_on" : "repeat_one";
});

shareBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(`${window.location.href}`);
    alert("Link copied, Share song with your friends!!!")
});

//KEYBOARD 
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        if (play_pause.classList.contains("fa-play")){
            play_pause.classList.remove("fa-play");
            play_pause.classList.add("fa-pause");
            audioElement.play();
            document.title = playList[currentSong].name;
        }
        else {
            play_pause.classList.remove("fa-pause");
            play_pause.classList.add("fa-play");
            audioElement.pause()
            document.title = "Mu-CX";
        }
    }
})
 
//DEBOUNCE-AND-OTHER-CALLBACK-FUNC
function debounce(func, timeout=300) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {func()}, timeout);
    }
};

function onSongChange() {
    document.querySelector(".song-cover img").remove();
    let imgDiv = document.querySelector(".song-cover");

    let newImg = document.createElement("img");
    newImg.setAttribute('src', playList[currentSong].cover);
    imgDiv.appendChild(newImg);

    document.querySelector(".song-name").textContent = playList[currentSong].name;
    document.querySelector(".song-artist").textContent = playList[currentSong].artist;
    document.title = playList[currentSong].name;
    history.pushState({}, "", `/${encodeURI(playList[currentSong].name)}`);
};

function changeSongMedia() {
    audioElement.src = playList[currentSong].audio;
};

function pageSetUp() {
    let imgDiv = document.querySelector(".song-cover");
    let newImg = document.createElement("img");

    newImg.setAttribute('src', playList[currentSong].cover);
    imgDiv.appendChild(newImg);

    document.querySelector(".song-name").textContent = playList[currentSong].name;
    document.querySelector(".song-artist").textContent = playList[currentSong].artist;
    document.querySelectorAll(".playlist-song-detail")[currentSong].classList.add("current-playing");
    history.pushState({}, "", `/${encodeURI(playList[currentSong].name)}`);
};

function highlightSongInPlaylist() {
    document.querySelector(".current-playing").classList.remove("current-playing");
    document.querySelectorAll(".playlist-song-detail")[currentSong].classList.add("current-playing");
};