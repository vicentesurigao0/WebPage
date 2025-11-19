// LIKE button function
function likeFunction(btn) {
    btn.style.fontWeight = "bold";
    btn.innerHTML = "✓ Liked";
}

// Show/Hide reply sections
function myFunction(id) {
    let x = document.getElementById(id);
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Scroll Reveal Animation
window.addEventListener("scroll", revealElements);

function revealElements() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

// Auto-activate first reply dropdown
document.getElementById("myBtn")?.click();
