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

        listItem.appendChild(trackInfo);
        listItem.appendChild(trackDuration);

        trackInfo.appendChild(trackTitle);
        trackInfo.appendChild(trackArtist);

        // Add event listener to open modal on click
        listItem.addEventListener("click", () => openModal(track));

        musicList.appendChild(listItem);
    });
}

// Function to open modal with selected track details
function openModal(track) {
    const modal = document.getElementById("audio-modal");
    const modalTitle = document.getElementById("modal-track-title");
    const modalArtist = document.getElementById("modal-track-artist");
    const modalAudio = document.getElementById("modal-audio-player");

    modalTitle.textContent = track.title;
    modalArtist.textContent = track.artist;
    modalAudio.src = track.url;

    modal.style.display = "flex";
}

// Close modal when the close button is clicked
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("audio-modal").style.display = "none";
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
    const modal = document.getElementById("audio-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Function to search tracks
function searchTracks() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredTracks = tracks.filter(track => track.title.toLowerCase().includes(query));
    displayTracks(filteredTracks);
}

// Initial display of tracks
displayTracks();