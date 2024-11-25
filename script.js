const playCheckbox = document.getElementById("checkbox");
const loader = document.querySelector(".loader");
const audio = document.querySelector("audio");
loader.style.display = "none";
document.getElementById("checkbox_label").addEventListener("click", function () {
    if (playCheckbox.checked == false) {
        loader.style.display = "flex";
        audio.play();

    } else {
        loader.style.display = "none";
        audio.pause();
        audio.load();

    }
});


// Reload page when visited with browser's "Back" button
window.addEventListener("pageshow", function (event) {
    var historyTraversal = event.persisted ||
        (typeof window.performance != "undefined" &&
            window.performance.navigation.type === 2);
    if (historyTraversal) {
        // Handle page restore.
        window.location.reload();
    }
});

// Specify the API endpoint for user data
apiUrl = 'https://a8.asurahosting.com/api/nowplaying/spirit_radio';

const nowPlaying = document.querySelector(".now-playing");

// Make a GET request using the Fetch API
function get_now_playing() {

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(userData => {
            // Process the retrieved user data
            nowPlaying.textContent = userData.now_playing.song.text;

        })
        .catch(error => {
            console.error('Error:', error);
        });

    setTimeout(() => get_now_playing(), 30000)
}

get_now_playing();


//modal functionality
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

document.onload(openModal());
closeModalBtn.addEventListener("click", closeModal());

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
