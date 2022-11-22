
var vid = document.querySelector("#videoplayer");

// loop, autoplay
vid.autoplay = false;
vid.loop = false;
vid.load;

// play video
var playBtn = document.getElementById("play").addEventListener("click", playVideo);

function playVideo() {
  vid.play();
}

// pause video
var pauseBtn = document.getElementById("pause").addEventListener("click", pauseVideo);

function pauseVideo() {
  vid.pause();
}

// slow down video
var slowBtn = document.getElementById("slower").addEventListener("click", slowDownVideo);

function slowDownVideo() {
  let videoSpeed = vid.playbackRate;  

  if (videoSpeed == 0.5) {
    window.alert("Video is at slowest speed!");
  }

  else {
    if (videoSpeed == 1) {
        videoSpeed = 0.5;
        vid.playbackRate = videoSpeed;
    }

    else if (videoSpeed == 2) {
        videoSpeed = 1;
        vid.playbackRate = videoSpeed;
    }
  }

}

// speed up video
var fastBtn = document.getElementById("faster").addEventListener("click", speedUpVideo);

function speedUpVideo() {
  let videoSpeed = vid.playbackRate; 

  if (videoSpeed == 2) {
    window.alert("Video is at fastest speed!");
  }

  else {
    if (videoSpeed == 1) {
        videoSpeed = 2;
        vid.playbackRate = videoSpeed;
    }

    else if (videoSpeed == 0.5) {
        videoSpeed = 1;
        vid.playbackRate = videoSpeed;
    }
  }
}

// skip ahead
var skipBtn = document.querySelector("#skip");
skipBtn.addEventListener("click", function() {

  let timeStamp = vid.currentTime;

  if (timeStamp >= vid.duration) {
    skipBtn.innerHTML = "Video Restarted";
    vid.pause();
    vid.play();
  }

  else if (timeStamp >= 0) {
    skipBtn.innerHTML = "Skip Ahead";
    timeStamp += 15;
    vid.currentTime = timeStamp;
  }
});


// mute video
var muteBtn = document.querySelector("#mute");
muteBtn.addEventListener("click", muteVideo);

function muteVideo() {
  if (vid.muted == true) {
    vid.muted = false;
    muteBtn.innerHTML = "Mute";
  }

  else if (vid.muted == false) {
    vid.muted = true;
    muteBtn.innerHTML = "Unmute";
  }

}

// volume slider
var volSlider = document.querySelector("#slider");
volSlider.addEventListener("change", volChange);

function volChange() {
  vid.volume = volSlider.value / 100;
  document.querySelector("#volume").innerHTML = volSlider.value + "%";

}