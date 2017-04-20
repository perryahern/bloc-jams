var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21' },
        { title: 'Magenta', duration: '2:15' }
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, Ring, Ring', duration: '5:01' },
        { title: 'Fits In Your Pocket', duration: '3:21' },
        { title: 'Can You Hear Me Now?', duration: '3:14' },
        { title: 'Wrong Phone Number', duration: '2:15' }
    ]
};

var albumTesla = {
    title: 'Currently Alternative',
    artist: 'Nikola Tesla',
    label:  'The Coil',
    year: '1887',
    albumArtUrl: 'assets/images/album_covers/06.png',
    songs: [
        { title: 'All Sparked Up', duration: '3:45' },
        { title: 'I See Through You', duration: '5:31' },
        { title: 'Remotely Controlled', duration: '2:46' },
        { title: 'The Warden of Clyffe', duration: '3:33' },
        { title: 'Edison Was a Hack', duration: '3:24' }
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
            '<tr class="album-view-song-item">'
        +   '   <td class="song-item-number">' + songNumber + '</td>'
        +   '   <td class="song-item-title">' + songName + '</td>'
        +   '   <td class="song-item-duration">' + songLength + '</td>'
        +   '</tr>'
        ;

    return template;
};

var setCurrentAlbum = function(album) {
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);

    albumSongList.innerHTML = '';

    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);
};

document.getElementsByClassName('album-cover-art')[0].addEventListener('click', function() {
    var displayedAlbum = document.getElementsByClassName('album-view-title')[0].textContent;
    if (displayedAlbum === 'The Colors') {
        setCurrentAlbum(albumMarconi);
    } else if (displayedAlbum === 'The Telephone') {
        setCurrentAlbum(albumTesla);
    } else {
        setCurrentAlbum(albumPicasso)
    }
});
