const songs = [
    {
        title: "Worth It",
        artist: "Kid Ink",
        src: "songs/song1.mpeg",
        cover: "images/cover1.jpeg"
    },
    {
        title: "A Thousand Years",
        artist: "Christina Perri",
        src: "songs/song2.mpeg",
        cover: "images/cover2.jpeg"
    },
    {
        title: "Make it Right",
        artist: "BTS",
        src: "songs/song3.mpeg",
        cover: "images/cover3.jpeg"
    }
];

// Selecting Elements
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

let currentSong = 0;

// Load Song
function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;

    audio.src = song.src;
    cover.src = song.cover;

    audio.load();
}

// Initial Load
loadSong(songs[currentSong]);

// Play / Pause
playBtn.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }

});

// Next Song
nextBtn.addEventListener("click", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(songs[currentSong]);
    audio.play();
    playBtn.textContent = "⏸";

});

// Previous Song
prevBtn.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);
    audio.play();
    playBtn.textContent = "⏸";

});

// Update Progress Bar
audio.addEventListener("timeupdate", () => {

    const progressPercent =
        (audio.currentTime / audio.duration) * 100;

    progress.value = progressPercent || 0;

});

// Change Song Progress
progress.addEventListener("input", () => {

    audio.currentTime =
        (progress.value / 100) * audio.duration;

});

// Volume Control
volume.addEventListener("input", () => {

    audio.volume = volume.value;

});