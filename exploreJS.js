const music = new Audio("Assets/songs/0.mp3");
masterPoster.src = `Assets/imgs/defaultMp.jpg`;
let songIndex = 0;
// const songs = [

//     {
//         id: "0",
//         songName: "Aradhya",
//         poster: "Assets/imgs/uppenantha.jpg"


//     },





pcmain1.addEventListener("click", function () {
    if (music.paused || music.currentTime <= 0) {
        music.play();
    }

    else {
        music.pause();

    }

})






let gif = document.getElementById('gif');
gif.style.opacity = "0";
gif.style.transition = "opacity 1.0s";





function togglePlayPause() {
    // Toggle play/pause

   

    if (music.paused) {
        pb.value = 0;
        music.play();
        gif.style.opacity = "1";
        mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/pause.svg';  // Change the image to the pause icon
        si = document.getElementById(songIndex).src = 'Assets/imgs/pause.svg';
        mainBB.id = replace("pcmain1", songIndex);
        newid = songIndex;
    }

    else {
        music.pause();
        gif.style.opacity="0";
        si = document.getElementById(songIndex).src = 'Assets/imgs/playcircle.svg';
        document.getElementById('pcmain1').src = 'Assets/imgs/playcircle.svg';  // Change the image to the play icon
    }

}






// Event listener for pcmain1 element
document.getElementById("pcmain1").addEventListener("click", function () {
    togglePlayPause();
});


// Event listener for other elements with the "playit" class
Array.from(document.getElementsByClassName("playit")).forEach(function (element) {
    element.addEventListener("click", function (e) {
        
        var newSongIndex = parseInt(e.target.id);

        // Check if the new song is different from the current one
        if (songIndex !== newSongIndex) {
            // Set the new song
            music.src = `Assets/songs/${newSongIndex}.mp3`;
            masterPoster.src = `Assets/imgs/${newSongIndex}.jpg`;
            document.getElementById(songIndex). src = 'Assets/imgs/playcircle.svg';
            songIndex = newSongIndex;
        }

        // Toggle play/pause
        togglePlayPause();
    });
});



document.getElementById("pcNext").addEventListener("click", function(){
    if(songIndex>=77){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }

    music.src = `Assets/songs/${songIndex}.mp3`;
    mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/pause.svg';
    document.getElementById(songIndex-1).src = 'Assets/imgs/playcircle.svg';
    document.getElementById(songIndex).src = 'Assets/imgs/pause.svg';
    masterPoster.src = `Assets/imgs/${songIndex}.jpg`;
    music.currentTime = 0;
    music.play();

})


document.getElementById("pcPrev").addEventListener("click", function(){
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }

    music.src = `Assets/songs/${songIndex}.mp3`;
    mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/pause.svg';
    document.getElementById(songIndex+1).src = 'Assets/imgs/playcircle.svg';
    document.getElementById(songIndex).src = 'Assets/imgs/pause.svg';
    masterPoster.src = `Assets/imgs/${songIndex}.jpg`;
    music.currentTime = 0;
    music.play();

});




let pbTime = document.getElementById('pbTime');
let pbTotalTime = document.getElementById('pbTotalTime');
let pb = document.getElementById('pb');

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);
    pbTotalTime.innerHTML = "00:00";
    // console.log(min1);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    pbTotalTime.innerHTML = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }

    pbTime.innerHTML = `${min2}:${sec2}`;
    pbTotalTime.innerHTML = `${min1}:${sec1}`;

   


    let progressBar = parseInt((music_curr / music_dur)*100);
    pb.value = progressBar;
    // console.log(pb.value);
    // let pbVal = pb.value;
    

    if(min1 == min2 && sec1 == sec2){
        document.getElementById(songIndex). src = 'Assets/imgs/playcircle.svg';
        document.getElementById('pcmain1').src = 'Assets/imgs/playcircle.svg';
        masterPoster.src = `Assets/imgs/defaultMp.jpg`;
        gif.style.opacity = "0";
        pb.value = 0;
    }

});


pb.addEventListener('change', ()=>{
    music.currentTime = pb.value * music.duration / 100;
});



let volCtrl = document.getElementById('volCtrl');
volCtrl.addEventListener('input', () => {
    let vol1 = volCtrl.value;
    music.volume = vol1 / 100;
});

