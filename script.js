var video = document.getElementById('myVideo');
var gotoV1Button = document.getElementById('gotoV1Button');
var gotoV2Button = document.getElementById('gotoV2Button');
var gotoV5Button = document.getElementById('gotoV5Button');
var gotoV6Button = document.getElementById('gotoV6Button');
var restartButton = document.getElementById('restartButton');

video.addEventListener('timeupdate', function() {
    var currentTime = video.currentTime;
    var currentVideo = video.currentSrc.split('/').pop(); // Extract filename from URL to check current playing video

    if (currentVideo === "Firstchoice.mp4" && currentTime >= 0 && currentTime < 1) {
        gotoV1Button.style.display = 'block';
        gotoV2Button.style.display = 'block';
    }
    if (currentVideo === "V2.mp4" && currentTime >= 5 && currentTime < 6) {
        gotoV5Button.style.display = 'block';
        gotoV6Button.style.display = 'block';
    }
});

gotoV1Button.onclick = function() {
    video.src = "media/V1.mp4";
    video.load();
    video.play();
    hideButtons();
};

gotoV2Button.onclick = function() {
    video.src = "media/V2.mp4";
    video.load();
    video.play();
    hideButtons();
};

gotoV5Button.onclick = function() {
    video.src = "media/V5.mp4";
    video.load();
    video.play();
    hideButtons();
};

gotoV6Button.onclick = function() {
    video.src = "media/V6.mp4";
    video.load();
    video.play();
    hideButtons();
};

restartButton.onclick = function() {
    var startVideo = restartButton.getAttribute('data-start-video');
    video.src = `media/${startVideo}.mp4`;
    video.load();
    video.play();
    restartButton.style.display = 'none';
};

video.addEventListener('playing', function() {
    hideButtons();
});

video.addEventListener('ended', function() {
    var currentVideo = video.currentSrc.split('/').pop();

    switch (currentVideo) {
        case "MAIN.mp4":
            video.src = "media/Firstchoice.mp4";
            video.load();
            video.play();
            break;  
        case "Firstchoice.mp4":
            video.src = "media/V3.mp4";
            video.load();
            video.play();
            break;
        case "V3.mp4":
        case "V1.mp4":
            restartButton.setAttribute('data-start-video', 'Firstchoice');
            restartButton.style.display = 'block';
            break;
        case "V2.mp4":
            video.src = "media/V4.mp4";
            video.load();
            video.play();
            break;
        case "V4.mp4":
            restartButton.setAttribute('data-start-video', 'V2');
            restartButton.style.display = 'block';
            break;
        case "V5.mp4":
        case "V6.mp4":
            restartButton.setAttribute('data-start-video', 'Firstchoice');
            restartButton.style.display = 'block';
            break;
    }
});

function hideButtons() {
    gotoV1Button.style.display = 'none';
    gotoV2Button.style.display = 'none';
    gotoV5Button.style.display = 'none';
    gotoV6Button.style.display = 'none';
}
