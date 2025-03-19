const audioFiles = [
    'assets/audio/line1_test.mp3',
    'assets/audio/line2_test.mp3'
  ];
  
  function playRandom() {
    const random = Math.floor(Math.random() * audioFiles.length);
    const audio = document.getElementById('audioPlayer');
    audio.src = audioFiles[random];
    audio.play();
  }
  