// List of music tracks
const tracks = [
    { 
        title: "Hall of Fame", 
        artist: "The Script", 
        duration: "3:54",
        url: "https://www.dropbox.com/scl/fi/20cx7ztdcccnvz3svu3av/The-Script-Hall-of-Fame.mp3?rlkey=up2bup4fywiv9m9e470y535kr&st=vl2flm0q&dl=1" 
    },
    { 
        title: "Kompa", 
        artist: "Rarin", 
        duration: "1:43",  
        url: "https://www.dropbox.com/scl/fi/2zvn8e9ysgtz5ro47oyyy/Rarin-Kompa.mp3?rlkey=335nt137qrpsanoavkl77etos&st=5pt7k619&dl=1" 
    },
    { 
        title: "Forever", 
        artist: "Andromedik", 
        duration: "4:59",  
        url: "https://www.dropbox.com/scl/fi/uiyurcsiltstwap4unw4q/Forever.mp3?rlkey=sdjij2cini1lzq1lwu0ffnw3g&st=fgqzyh1u&dl=1" 
    },
    { 
        title: "30", 
        artist: "Fukkit", 
        duration: "2:41",  
        url: "https://www.dropbox.com/scl/fi/b2aytkmkytbxgu2jlui1x/Fukkit-30-Prod.-CaptainCrunch.mp3?rlkey=l9qqoh6c04468zm36gzawzk6l&st=r6su9tib&dl=1" 
    },
    { 
        title: "So What", 
        artist: "Rarin", 
        duration: "3:24",  
        url: "https://www.dropbox.com/scl/fi/zby0c1pm3s77jm6yc9j2n/Rarin-SO-WHAT-feat.-BrxkenBxy-Official-Lyric-Video.mp3?rlkey=fizkqzndredbg64gwcmw27t3l&st=sxugopsc&dl=1" 
    },
    { 
        title: "Ex List", 
        artist: "Rarin , Tommy Ice", 
        duration: "2:53",  
        url: "https://www.dropbox.com/scl/fi/qav48nm5w7a9vywktym88/Rarin-Tommy-Ice-Ex-List-Official-Visualizer.mp3?rlkey=49o0rehdsm04xouetw25aimvy&st=coh2onpn&dl=1" 
    },
    { 
        title: "2 Dangerous", 
        artist: "Rarin , Lil Story", 
        duration: "2:33",  
        url: "https://www.dropbox.com/scl/fi/ca7rdvv3z8lmtcyylrhe8/Rarin-Lil-Story-2-Dangerous-Official-Visualizer.mp3?rlkey=b6qu5vr7rz846r91mdazjatfs&st=ji9s9l2b&dl=1" 
    },
    { 
        title: "Fe!n", 
        artist: "Travis Scott", 
        duration: "3:14",  
        url: "https://www.dropbox.com/scl/fi/7qwied8abwu1y6gdtr5ny/Travis-Scott-FE-N-Official-Audio.mp3?rlkey=dwyyooo9ghcy3o9vurrukfvw2&st=voqkq0be&dl=1" 
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

let isPlaying = false;  // Track whether the audio is currently playing
let currentTrack = null;  // Track the current song being played

// Function to open modal with selected track details
function openModal(track) {
    const modal = document.getElementById("audio-modal");
    const modalTitle = document.getElementById("modal-track-title");
    const modalArtist = document.getElementById("modal-track-artist");
    const audioPlayer = document.getElementById("now-playing-audio");
    const modalSeekBar = document.getElementById("modal-seek-bar");

    modalTitle.textContent = track.title;
    modalArtist.textContent = track.artist;

    // Check if the same track is being clicked again
    if (currentTrack !== track.url) {
        currentTrack = track.url;
        audioPlayer.src = track.url;
        audioPlayer.currentTime = 0;  // Reset time only if a new track is selected
    }

    // Play the audio if it was already playing or if it's a new track
    if (!isPlaying || currentTrack !== track.url) {
        audioPlayer.play();
        isPlaying = true;
    }

    modal.style.display = "flex";

    // Show "Now Playing" box
    showNowPlaying(track);

    // Synchronize the seek bar with the audio player
    audioPlayer.addEventListener("timeupdate", () => {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        modalSeekBar.value = progress;
    });

    // Allow seeking in the track via the modal's seek bar
    modalSeekBar.addEventListener("input", () => {
        const seekTo = (modalSeekBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTo;
    });
}

// Function to show the "Now Playing" box
function showNowPlaying(track) {
    const nowPlaying = document.getElementById("now-playing");
    const nowPlayingTitle = document.getElementById("now-playing-title");
    const nowPlayingArtist = document.getElementById("now-playing-artist");

    nowPlayingTitle.textContent = track.title;
    nowPlayingArtist.textContent = track.artist;

    nowPlaying.style.display = "flex";
}

// Sync playback control between the modal and "Now Playing" bar
document.getElementById("modal-audio-player").addEventListener("play", () => {
    document.getElementById("now-playing-audio").play();
});

document.getElementById("modal-audio-player").addEventListener("pause", () => {
    document.getElementById("now-playing-audio").pause();
});

document.getElementById("now-playing-audio").addEventListener("play", () => {
    document.getElementById("modal-audio-player").play();
});

document.getElementById("now-playing-audio").addEventListener("pause", () => {
    document.getElementById("modal-audio-player").pause();
});

// Ensure audio continues playing even if modal is closed
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

// JavaScript to handle dropdown toggle on click or touch
document.querySelector('.dropbtn').addEventListener('click', function() {
    const dropdown = this.parentElement;
    dropdown.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

// Initial display of tracks
displayTracks();