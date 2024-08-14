const playCheckbox = document.getElementById("checkbox");
const loader = document.querySelector(".loader");
const audio = document.querySelector("audio");
loader.style.display = "none";
document.getElementById("checkbox_label").addEventListener("click", function() {
    console.log("clicked!!!!");
    if (playCheckbox.checked == false) {
        loader.style.display = "flex";
        audio.play();
        console.log(true);
    } else {
        loader.style.display = "none";
        audio.pause();
        audio.load();
        console.log(false);
    }
});


// Reload page when visited with browser's "Back" button
window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
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
        console.log(userData.now_playing.song.text);

        })
    .catch(error => {
        console.error('Error:', error);
        });

  setTimeout(() => get_now_playing(), 30000)
}

get_now_playing();
 