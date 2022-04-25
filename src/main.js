const songsList = [
  new Audio("https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3"),
  new Audio("https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3"),
  new Audio("https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3")
];

const playPauseButton = document.querySelector(".play");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const playPauseIcon = document.querySelector(".play-icon");

let currentSong = 1;
let song = songsList[currentSong];

const playSong = () => {
  /* url = songsList[currentSong];
  song = new Audio(url); */
  if (song.paused) {
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
    song.play();
    updateSongData();
  } else {
    playPauseIcon.classList.add("fa-play");
    playPauseIcon.classList.remove("fa-pause");
    song.pause();
  }
};

const prevSong = () => {
  if (currentSong > 0) {
    song.pause();
    currentSong--;
    song = songsList[currentSong];
    updateSongData();
  }
};

const nextSong = () => {
  if (currentSong < songsList.length - 1) {
    song.pause();
    currentSong++;
    song = songsList[currentSong];
    updateSongData();
  }
};

const updateSongData = () => {
  const cleanSong = cleanName(song.src);
  const artist = "Monkey Island";

  document.querySelector(".song-name").textContent = cleanSong;
  document.querySelector(".song-artist").textContent = artist;
};

const cleanName = (url) => {
  return url.replace("https://scummbar.com/mi2/MI1-CD/", "").replace(".mp3", "").replaceAll("%20", " ");
};

playPauseButton.addEventListener("click", () => playSong());
prevButton.addEventListener("click", () => prevSong());
nextButton.addEventListener("click", () => nextSong());
