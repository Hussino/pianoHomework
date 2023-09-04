function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
  }

  document.getElementById('soundDiv1').addEventListener('click', function() { playSound('sounds/A0.mp3'); });

  document.getElementById('soundDiv2').addEventListener('click', function() { playSound('sounds/A1.mp3'); });

  document.getElementById('soundDiv3').addEventListener('click', function() { playSound('sounds/A2.mp3'); });

  document.getElementById('soundDiv4').addEventListener('click', function() { playSound('sounds/A3.mp3'); });

  document.getElementById('soundDiv5').addEventListener('click', function() { playSound('sounds/A4.mp3'); });

  document.getElementById('soundDiv6').addEventListener('click', function() { playSound('sounds/A5.mp3'); });

  document.getElementById('soundDiv7').addEventListener('click', function() { playSound('sounds/A6.mp3'); });

  document.getElementById('soundDiv8').addEventListener('click', function() { playSound('sounds/Ab1.mp3'); });
