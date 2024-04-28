const music = new Audio("Assets/songs/700.mp3");
masterPoster.src = `Assets/imgs/700.jpg`;
masterPoster2.src = `Assets/imgs/700.jpg`;
let songIndex = 700;
// const songs = [

//     {
//         id: "0",
//         songName: "Aradhya",
//         poster: "Assets/imgs/uppenantha.jpg"


//     },

let newHitsLink = document.getElementById("NHL");
let musicSystem = document.getElementById("MS");
// newHitsLink.style.display = "none";
musicSystem.style.display = "none";


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


let gif2 = document.getElementById('gif2');
gif2.style.opacity = "0";
gif2.style.transition = "opacity 1.0s";



let loopfun = false
let loop = document.getElementById("pcLoop");

loop.addEventListener("click", function(){
    if(loopfun == false){
        loopfun = true;
        autoplayfun = false
        autoplay.style.background = "none";
        loop.style.background = "#04bcbc";
        console.log(loopfun);
    }
    else{
        loopfun = false
        autoplayfun = true;
        loop.style.background = "none";
        autoplay.style.background = "#04bcbc";
        console.log(loopfun);
    }
});


let autoplayfun = false;
let autoplay = document.getElementById("pcAutoPlay");

autoplay.addEventListener("click", function(){
    if(autoplayfun == false){
        autoplayfun = true;
        loopfun = false
        loop.style.background = "none";
        autoplay.style.background = "#04bcbc";
        console.log(autoplayfun);
        console.log(loopfun);
    }
    else{
        autoplayfun = false
        loopfun = true;
        loop.style.background = "#04bcbc";
        autoplay.style.background = "none";
        console.log(autoplayfun);
        console.log(loopfun);
    }
});



function togglePlayPause() {
    // Toggle play/pause

   

    if (music.paused || music.currentTime <= 0) {
        pb.value = 0;
        music.play();
        gif.style.opacity = "1";
        gif2.style.opacity = "1";
        mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/pause.svg';  // Change the image to the pause icon
        si = document.getElementById(songIndex).src = 'Assets/imgs/pause.svg';
        mainBB.id = replace("pcmain1", songIndex);
        newid = songIndex;
        newHitsLink.style.display = "none";
        musicSystem.style.display = "flex";
        
        

        
    }

    else {
        music.pause();
        gif.style.opacity="0";
        gif2.style.opacity = "0";
        si = document.getElementById(songIndex).src = 'Assets/imgs/playcircle.svg';
        document.getElementById('pcmain1').src = 'Assets/imgs/playcircle.svg';  // Change the image to the play icon
        newHitsLink.style.display = "none";
        musicSystem.style.display = "flex";
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
            masterPoster2.src = `Assets/imgs/${newSongIndex}.jpg`;
            document.getElementById(songIndex). src = 'Assets/imgs/playcircle.svg';
            songIndex = newSongIndex;
        }

        //changes the song name at the banner
        let idCreate = songIndex + "t";
        let songnam = document.getElementById(idCreate).innerHTML;
        console.log(songnam);
        trackDis = document.getElementById("trackDis").innerHTML = songnam;
        newHitsLink.style.display = "none";
        musicSystem.style.display = "flex";

        // Toggle play/pause
        togglePlayPause();
    });
});



document.getElementById("pcNext").addEventListener("click", function(){
    if(songIndex>=714){
        songIndex = 701;
    }
    else{
        songIndex += 1;
    }

    music.src = `Assets/songs/${songIndex}.mp3`;
    mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/pause.svg';
    document.getElementById(songIndex-1).src = 'Assets/imgs/playcircle.svg';
    document.getElementById(songIndex).src = 'Assets/imgs/pause.svg';
    masterPoster.src = `Assets/imgs/${songIndex}.jpg`;
    masterPoster2.src = `Assets/imgs/${songIndex}.jpg`;
    music.currentTime = 0;
    music.play();

     //changes the song name at the banner
     let idCreate = songIndex + "t";
     let songnam = document.getElementById(idCreate).innerHTML;
     console.log(songnam);
     trackDis = document.getElementById("trackDis").innerHTML = songnam;
     newHitsLink.style.display = "none";
     musicSystem.style.display = "flex";

})


document.getElementById("pcPrev").addEventListener("click", function(){
    if(songIndex<=700){
        songIndex = 700;
    }
    else{
        songIndex -= 1;
    }

    music.src = `Assets/songs/${songIndex}.mp3`;
    mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/pause.svg';
    document.getElementById(songIndex+1).src = 'Assets/imgs/playcircle.svg';
    document.getElementById(songIndex).src = 'Assets/imgs/pause.svg';
    masterPoster.src = `Assets/imgs/${songIndex}.jpg`;
    masterPoster2.src = `Assets/imgs/${songIndex}.jpg`;
    music.currentTime = 0;
    music.play();

    //changes the song name at the banner
    let idCreate = songIndex + "t";
    let songnam = document.getElementById(idCreate).innerHTML;
    console.log(songnam);
    trackDis = document.getElementById("trackDis").innerHTML = songnam;
    newHitsLink.style.display = "none";
    musicSystem.style.display = "flex";

});




document.getElementById('searchInput').addEventListener('input', function() {
    search();
});

function search() {
    pb.value = 0;
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var songItems = document.getElementsByClassName('songItem');
    
   

    var resultSong = document.getElementById('resultSong');
    resultSong.innerHTML = '';

    var output_name = document.getElementById('output_name');

    for (var i = 0; i < songItems.length; i++) {
        var songTitle = songItems[i].getElementsByClassName('Songtitle')[0].textContent.toLowerCase();
        var songId = songItems[i].getElementsByTagName('img')[1].id;
        
        
        if (songTitle.includes(searchInput)) {
            pb.value = 0;
            newHitsLink.style.display = "none";
            musicSystem.style.display = "flex";
            console.log(songId);
            var newSongIndex = songId;

        // Check if the new song is different from the current one
        
            // Set the new song
            let songnam = songId + 't';
            music.src = `Assets/songs/${newSongIndex}.mp3`;
            masterPoster.src = `Assets/imgs/${newSongIndex}.jpg`;
            document.getElementById(newSongIndex).src = 'Assets/imgs/playcircle.svg';
            let idCreate = songIndex + "t";
            songnam = document.getElementById(idCreate).innerHTML;
            console.log(songnam);
            trackDis = document.getElementById("trackDis").innerHTML = songnam;
            songIndex = newSongIndex;


            pb.value = 0;
            music.currentTime = 0;
            gif.style.opacity = "0";
            gif2.style.opacity = "0";
            mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/playcircle.svg';  // Change the image to the pause icon
            si = document.getElementById(songIndex).src = 'Assets/imgs/playcircle.svg';
            
           

        }
    }
    
    
}



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
    

    if(min1 == min2 && sec1 == sec2 && loopfun == false && autoplayfun == false){
        pb.value = 0;
        music.currentTime = 0;
        gif.style.opacity = "0";
        gif2.style.opacity = "0";
        music.pause();
        mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/playcircle.svg';  // Change the image to the pause icon
        si = document.getElementById(songIndex).src = 'Assets/imgs/playcircle.svg';
        mainBB.id = replace(songIndex, "pcmain1");

        document.getElementById("pcmain1").addEventListener("click", function () {
            togglePlayPause();
        });

         //changes the song name at the banner
        let idCreate = songIndex + "t";
        let songnam = document.getElementById(idCreate).innerHTML;
        console.log(songnam);
        trackDis = document.getElementById("trackDis").innerHTML = songnam;
        newHitsLink.style.display = "none";
        musicSystem.style.display = "flex";
    
    }
    

    else if(min1 == min2 && sec1 == sec2 && loopfun == true && autoplayfun == false){

        pb.value = 0;
        music.currentTime = 0;
        music.play();
        gif.style.opacity = "1";
        gif2.style.opacity = "1";
        mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/pause.svg';  // Change the image to the pause icon
        si = document.getElementById(songIndex).src = 'Assets/imgs/pause.svg';
        mainBB.id = replace("pcmain1", songIndex);

        document.getElementById("pcmain1").addEventListener("click", function () {
            togglePlayPause();
        });

         //changes the song name at the banner
        let idCreate = songIndex + "t";
        let songnam = document.getElementById(idCreate).innerHTML;
        console.log(songnam);
        trackDis = document.getElementById("trackDis").innerHTML = songnam;
        newHitsLink.style.display = "none";
        musicSystem.style.display = "flex";
    }


    else if(min1 == min2 && sec1 == sec2 && loopfun == false && autoplayfun == true){
        pb.value = 0;
        music.currentTime = 0;
        gif.style.opacity = "0";
        gif2.style.opacity = "0";
        mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/playcircle.svg';  // Change the image to the pause icon
        si = document.getElementById(songIndex).src = 'Assets/imgs/playcircle.svg';

        if(songIndex>=714){
            songIndex = 701;
        }
        else{
            songIndex += 1;
        }
    
        music.src = `Assets/songs/${songIndex}.mp3`;
        mainBB = document.getElementById('pcmain1').src = 'Assets/imgs/pause.svg';
        document.getElementById(songIndex-1).src = 'Assets/imgs/playcircle.svg';
        document.getElementById(songIndex).src = 'Assets/imgs/pause.svg';
        masterPoster.src = `Assets/imgs/${songIndex}.jpg`;
        masterPoster2.src = `Assets/imgs/${songIndex}.jpg`;
        gif.style.opacity = "1";
        gif2.style.opacity = "1";
        music.currentTime = 0;
        setTimeout(music.play(), 5000);

        let idCreate = songIndex + "t";
        let songnam = document.getElementById(idCreate).innerHTML;
        console.log(songnam);
        trackDis = document.getElementById("trackDis").innerHTML = songnam;
        newHitsLink.style.display = "none";
        musicSystem.style.display = "flex";

        
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
