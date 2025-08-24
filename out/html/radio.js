const tracks = [
    {
        name: "Guarda Giu Dalla Pianura",
        image: "GuardaGiuDallaPianura.png",
        audio: "GuardaGiuDallaPianura.mp3"
    },
    {
        name: "Inno Dei Lavoratori Del Mare",
        image: "Innodeilavoratoridelmare.png",
        audio: "Innodeilavoratoridelmare.mp3"
    },
    {
        name: "Inno Dei Pezzenti",
        image: "Innodeilavoratoridelmare.png",
        audio: "InnodeiPezzenti.mp3"
    },
    {
        name: "Inno Delle Barricate",
        image: "InnodelleBarricate.png",
        audio: "InnodelleBarricate.mp3"
    },
    {
        name: "La Brigata Garibaldi",
        image: "LaBrigataGaribaldi.png",
        audio: "LaBrigataGaribaldi.mp3"
    },
    {
        name: "Son La Mondina",
        image: "Sonlamondina.png",
        audio: "Sonlamondina.mp3"
    }
]

let currentTrack = 0;

const radioImage = document.getElementById("radioImage");
const radioTitle = document.getElementById("radioTitle");
const radioPlayer = document.getElementById("radioPlayer");

function loadTrack(index) {
    const track = tracks[index];
    radioImage.src = "img/tracks/" + track.image;
    radioTitle.textContent = track.name;
    radioPlayer.src = "music/post_rev/" + track.audio;
    radioPlayer.play();
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
}

// Load first station on page load
loadTrack(currentTrack);