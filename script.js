const playCheckbox = document.getElementById("checkbox");
const loader = document.querySelector(".loader");
loader.style.display = "none";
document.getElementById("checkbox_label").addEventListener("click", function() {
    console.log("clicked!!!!");
    if (playCheckbox.checked == false) {
        loader.style.display = "flex";
        console.log(true);
    } else {
        loader.style.display = "none";
        console.log(false);
    }
});

