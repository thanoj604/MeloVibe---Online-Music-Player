document.getElementById('searchInput').addEventListener('input', function() {
    search();
});

function search() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var songItems = document.getElementsByClassName('songItem');

    var resultSong = document.getElementById('resultSong');
    resultSong.innerHTML = '';

    var output_name = document.getElementById('output_name');

    for (var i = 0; i < songItems.length; i++) {
        var songTitle = songItems[i].getElementsByClassName('Songtitle')[0].textContent.toLowerCase();
        var songId = songItems[i].getElementsByTagName('img')[1].id;

        var songnam = songId+'t';
        if (songTitle.includes(searchInput)) {
            resultSong.innerHTML += `<img src="Assets/imgs/${songId}.jpg" alt="${songTitle}">`;
            resultSong.innerHTML += `<img id="${songId}" src="Assets/imgs/playcircle.svg" fill = "white" class="bi plyBtn bi-play-circle playit" alt="#"></img>`;
            output_name.innerHTML += `<p id="${songnam}+'t'" class="Songtitle floattitle">${songTitle}</p>`;
            return; // Stop searching after finding the first match
        }
    }

    resultSong.innerHTML = "<p>Song not found.</p>";
}
z