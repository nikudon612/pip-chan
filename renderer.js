const audioFiles = [
  "assets/audio/line1_test.mp3",
  "assets/audio/line2_test.mp3",
];

function playRandomLine() {
  const random = Math.floor(Math.random() * audioFiles.length);
  const audio = new Audio(audioFiles[random]);
  audio.play();
}

playRandomLine(); // Play once immediately
setInterval(playRandomLine, 60 * 1000); // Then every minute
