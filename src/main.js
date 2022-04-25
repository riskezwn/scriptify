const songsList = [
  "https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3",
  "https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3",
  "https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3"
];

const playPauseButton = document.querySelector(".play");
const playPauseIcon = document.querySelector(".play-icon");
const url = songsList[1];
const song = new Audio(url);

const playSong = () => {
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

const updateSongData = () => {
  const cleanSong = cleanName(url);
  const artist = "Monkey Island";

  document.querySelector(".song-name").textContent = cleanSong;
  document.querySelector(".song-artist").textContent = artist;
};

const cleanName = (url) => {
  return url.replace("https://scummbar.com/mi2/MI1-CD/", "").replace(".mp3", "").replaceAll("%20", " ");
};

playPauseButton.addEventListener("click", () => playSong());
