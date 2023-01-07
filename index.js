var mySong = document.getElementById("mySong");
    var icon = document.getElementById("icon");
    const video = document.getElementById('myvideo');
    icon.onclick = function(){
        if(mySong.paused && video.paused){
            mySong.play();
            video.play();
            icon.src = "./data img etc/pause.png";
        }else{
            mySong.pause();
            video.pause();
            icon.src = "./data img etc/play.png";
        }
    }