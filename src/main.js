const songsList = [
  new Audio("https://scummbar.com/mi2/MI1-CD/01%20-%20Opening%20Themes%20-%20Introduction.mp3"),
  new Audio("https://scummbar.com/mi2/MI1-CD/02%20-%20Chapter%20Screen.mp3"),
  new Audio("https://scummbar.com/mi2/MI1-CD/03%20-%20The%20Scumm%20Bar.mp3")
];

const playPauseButton = document.querySelector(".play");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const playPauseIcon = document.querySelector(".play-icon");
const durationBar = document.querySelector(".inner-bar");

let currentSong = 1;
let song = songsList[currentSong];

const updateTime = () => {
  song.addEventListener("timeupdate", (e) => onUpdateSongDuration(e));
};

const playSong = () => {
  /* url = songsList[currentSong];
  song = new Audio(url); */
  if (song.paused) {
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
    song.play();
    durationBar.style.width = 0;
    updateSongData();
    updateTime();
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
    durationBar.style.width = 0;
    updateSongData();
  }
};

const nextSong = () => {
  if (currentSong < songsList.length - 1) {
    song.pause();
    currentSong++;
    song = songsList[currentSong];
    durationBar.style.width = 0;
    updateSongData();
  }
};

const updateSongData = () => {
  const cleanSong = cleanName(song.src);
  const artist = "Monkey Island";

  document.querySelector(".song-name").textContent = cleanSong;
  document.querySelector(".song-artist").textContent = artist;
};

const onUpdateSongDuration = (e) => {
  console.log(song.currentTime);
  const actualSecond = song.currentTime;
  const barWidth = Math.floor((actualSecond * 100) / song.duration);
  durationBar.style.width = `${barWidth}%`;
};

const cleanName = (url) => {
  return url.replace("https://scummbar.com/mi2/MI1-CD/", "").replace(".mp3", "").replaceAll("%20", " ");
};

playPauseButton.addEventListener("click", () => playSong());
prevButton.addEventListener("click", () => prevSong());
nextButton.addEventListener("click", () => nextSong());
