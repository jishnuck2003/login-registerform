document.getElementById("loginBtn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});

document.querySelector("registerBtn").addEventListener("click", function() {
    document.querySelector("#loginpopup").style.display = "none";
    document.querySelector("#registerpopup").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});