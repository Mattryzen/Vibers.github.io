// List of music tracks
const tracks = [
    { title: "A Song", url: "https://www.dropbox.com/s/example1.mp3?dl=1" },
    { title: "B Song", url: "https://www.dropbox.com/s/example2.mp3?dl=1" },
    { title: "Hall of Fame - The Script", url: "https://www.dropbox.com/scl/fi/20cx7ztdcccnvz3svu3av/The-Script-Hall-of-Fame.mp3?rlkey=up2bup4fywiv9m9e470y535kr&st=vl2flm0q&dl=1" },
    { title: "Kompa - Rarin", url: "https://www.dropbox.com/scl/fi/2zvn8e9ysgtz5ro47oyyy/Rarin-Kompa.mp3?rlkey=335nt137qrpsanoavkl77etos&st=5pt7k619&dl=1" },
    // Add more tracks here
];

// Function to sort tracks alphabetically by title
tracks.sort((a, b) => a.title.localeCompare(b.title));

// Function to generate the HTML for each track and add to the page
function displayTracks() {
    const musicList = document.getElementById("music-list");

    tracks.forEach(track => {
        const listItem = document.createElement("li");

        const trackTitle = document.createElement("h3");
        trackTitle.textContent = track.title;

        const audioPlayer = document.createElement("audio");
        audioPlayer.controls = true;
        audioPlayer.src = track.url;

        listItem.appendChild(trackTitle);
        listItem.appendChild(audioPlayer);
        musicList.appendChild(listItem);
    });
}

// Call the function to display tracks
displayTracks();
