// List of music tracks
const tracks = [
    { 
        title: "Hall of Fame", 
        artist: "The Script", 
        duration: "1:47",
        url: "https://www.dropbox.com/scl/fi/20cx7ztdcccnvz3svu3av/The-Script-Hall-of-Fame.mp3?rlkey=up2bup4fywiv9m9e470y535kr&st=vl2flm0q&dl=1" 
    },
    { 
        title: "Kompa", 
        artist: "Rarin", 
        duration: "2:21",  
        url: "https://www.dropbox.com/scl/fi/2zvn8e9ysgtz5ro47oyyy/Rarin-Kompa.mp3?rlkey=335nt137qrpsanoavkl77etos&st=5pt7k619&dl=1" 
    },
   
    // Add more tracks here
];

// Sort tracks alphabetically by title
tracks.sort((a, b) => a.title.localeCompare(b.title));

// Function to display tracks
function displayTracks(filteredTracks = tracks) {
    const musicList = document.getElementById("music-list");
    musicList.innerHTML = ""; // Clear existing tracks

    filteredTracks.forEach(track => {
        const listItem = document.createElement("li");
        listItem.className = "track-item";

        const trackInfo = document.createElement("div");
        trackInfo.className = "track-info";

        const trackTitle = document.createElement("h3");
        trackTitle.textContent = track.title;
        trackTitle.className = "track-title";

        const trackArtist = document.createElement("p");
        trackArtist.textContent = track.artist;
        trackArtist.className = "track-artist";

        const trackDuration = document.createElement("span");
        trackDuration.textContent = track.duration;
        trackDuration.className = "track-duration";

        const audioPlayer = document.createElement("audio");
        audioPlayer.controls = true;
        audioPlayer.src = track.url;
        audioPlayer.className = "audio-player";

        trackInfo.appendChild(trackTitle);
        trackInfo.appendChild(trackArtist);

        listItem.appendChild(trackInfo);
        listItem.appendChild(trackDuration);
        listItem.appendChild(audioPlayer);

        musicList.appendChild(listItem);
    });
}

// Function to search tracks
function searchTracks() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredTracks = tracks.filter(track => track.title.toLowerCase().includes(query));
    displayTracks(filteredTracks);
}

// Initial display of tracks
displayTracks();
