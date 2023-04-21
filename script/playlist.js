import playList from "./data.js";

//PLAYLIST-SIDE-BAR
let sidebarMenu = document.querySelector(".fa-list");
let closeMenu = document.querySelector(".fa-xmark");
let overlay = document.querySelector(".overlay");
const playlistLikeBtn = document.querySelector(".search-section span");

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

playlistLikeBtn.addEventListener("click", () => {
    playlistLikeBtn.classList.toggle("favorite-filled");
    let songlist = document.querySelectorAll(".playlist-song-detail");

    if (playlistLikeBtn.classList[playlistLikeBtn.classList.length - 1] === "favorite-filled") {
        const likedSongs = JSON.parse(localStorage.getItem("likedSongs"));
    
        songlist.forEach((song) => {
            if (!likedSongs.includes(parseInt(song.classList[0]))){
                song.style.display = "none";
            }
            else {
                song.style.display = "flex";
            }
        });
    }
    else {
        songlist.forEach((song) => {
            song.style.display = "flex";
        })
    }
});

//PLAYLIST-SIDE-BAR-CONTENT
let playlistContentDiv = document.querySelector(".playlist-content");
let count = 0;

playList.forEach((song) => {
    let playlistSongDetail = document.createElement("div");
    playlistSongDetail.classList.add(`${count}`);
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
    count++
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