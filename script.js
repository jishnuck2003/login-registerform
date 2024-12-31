document.getElementById("loginBtn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".popup").style.transition = "opacity 3s";
    document.querySelector(".popup").style.opacity = "1";
});


document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});

document.getElementById('registerBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginpopup').style.display = 'none';
    document.getElementById('registerpopup').style.display = 'block';
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});