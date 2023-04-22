const playList = [
    {
        name: "All The Stars",
        cover: "https://images.genius.com/bd3eb1cc914cca2ea8cad1f301b6b88b.1000x1000x1.png",
        artist: "Kendrick Lamar | SZA",
        audio:
            "https://dl.sndup.net/g9ds/All%20The%20Stars.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Pray For Me",
        cover: "https://m.media-amazon.com/images/I/918mX9aiWmL.jpg",
        artist: "The Weeknd | Kendrick Lamar",
        audio:
            "https://dl.sndup.net/py94/Pray%20For%20Me.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Last Breath",
        cover: "https://i1.sndcdn.com/artworks-000506100843-y0h335-t500x500.jpg",
        artist: "Future",
        audio:
            "https://dl.sndup.net/59bj/Last%20Breath.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Runnin",
        cover: "https://images.genius.com/a482d648c4b21447ae97b6918b1210bd.1000x1000x1.jpg",
        artist: "A$AP Rocky| A$AP Ferg | Nicki Minaj",
        audio:
            "https://dl.sndup.net/6vy2/Runnin.mp3",
        color: ["#1C1A1D", "#757376"],

        liked: false,
    },
    {
        name: "Dil Galti Kar Baitha hai",
        cover:
            "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/c7/83/bd/c783bd16-31bf-6980-72bc-3b82ad79b9f9/source/600x600bb.jpg",
        artist: "JalRaj",
        audio:
            "https://res.cloudinary.com/blazzingcdn/video/upload/v1638806016/Songs/X2Download.com_-_Dil_Galti_Kar_Baitha_hai_Reprise_-_JalRaj_-_Latest_Hindi_Cover_2021_-REUPLOAD-_128_kbps_wmewm8.mp3",
        color: ["#F7CBE2", "#D34156"],
        liked: false,
    }
]

function getSong(uri){
    let songIndex;
    playList.forEach((song, index) => {
        if (song.name === decodeURI(uri)){
            songIndex = index;
        } 
    })
    if (!songIndex) {
        songIndex = 0;
    }
    console.log(songIndex)
}

getSong("Pray%20For%20Me")