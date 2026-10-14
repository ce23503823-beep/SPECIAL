// ===============================
// Floating Hearts
// ===============================

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

setInterval(createHeart, 250);

// ===============================
// Music Button
// ===============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {

    if (playing) {

        music.pause();

        musicBtn.innerHTML = "🎵";

    } else {

        music.play();

        musicBtn.innerHTML = "🔊";

    }

    playing = !playing;

};

// ===============================
// Envelope Animation
// ===============================

const envelope = document.getElementById("envelope");
const openHeart = document.getElementById("openHeart");

openHeart.addEventListener("click", () => {

    envelope.classList.add("open");

    burstHearts();

    if (navigator.vibrate) {
        navigator.vibrate(250);
    }

    setTimeout(() => {

        document.body.style.transition = "1.5s";
        document.body.style.opacity = "0";

    }, 1200);

    setTimeout(() => {

        window.location.href = "letter.html";

    }, 2600);

});

// ===============================
// Heart Explosion
// ===============================

function burstHearts() {

    for (let i = 0; i < 50; i++) {

        const h = document.createElement("div");

        h.innerHTML = "💖";

        h.style.position = "fixed";

        h.style.left = "50%";

        h.style.top = "50%";

        h.style.fontSize = (15 + Math.random() * 20) + "px";

        h.style.pointerEvents = "none";

        h.style.transition = "1.5s";

        document.body.appendChild(h);

        const x = (Math.random() - 0.5) * 900;
        const y = (Math.random() - 0.5) * 700;

        setTimeout(() => {

            h.style.transform = `translate(${x}px,${y}px) scale(2)`;

            h.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            h.remove();

        }, 1500);

    }

}

// ===============================
// Mouse Heart Trail
// ===============================

document.addEventListener("mousemove", (e) => {

    if (window.innerWidth < 768) return;

    const trail = document.createElement("div");

    trail.innerHTML = "💕";

    trail.style.position = "fixed";

    trail.style.left = e.clientX + "px";

    trail.style.top = e.clientY + "px";

    trail.style.pointerEvents = "none";

    trail.style.fontSize = "18px";

    trail.style.transition = "1s";

    document.body.appendChild(trail);

    setTimeout(() => {

        trail.style.transform = "translateY(-35px)";

        trail.style.opacity = "0";

    }, 20);

    setTimeout(() => {

        trail.remove();

    }, 1000);

});

// ===============================
// Sparkles
// ===============================

setInterval(() => {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * window.innerHeight + "px";

    star.style.fontSize = (10 + Math.random() * 20) + "px";

    star.style.pointerEvents = "none";

    star.style.transition = "2s";

    document.body.appendChild(star);

    setTimeout(() => {

        star.style.opacity = "0";

        star.style.transform = "scale(2) rotate(180deg)";

    }, 100);

    setTimeout(() => {

        star.remove();

    }, 2000);

}, 700);