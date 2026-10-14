// 💗 Surprise Page JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // 🎵 Music button
    const musicButton = document.getElementById("musicButton");
    const music = document.getElementById("backgroundMusic");

    if (musicButton && music) {
        musicButton.addEventListener("click", function () {
            if (music.paused) {
                music.play();
                musicButton.textContent = "⏸️";
            } else {
                music.pause();
                musicButton.textContent = "🎵";
            }
        });
    }

    // 💝 Anniversary timer
    const startDate = new Date("2025-10-14T00:00:00");

    function updateTimer() {
        const timer = document.getElementById("loveTimer");

        if (!timer) return;

        const now = new Date();
        const difference = now - startDate;

        if (difference < 0) {
            timer.textContent = "Our beautiful journey is waiting ❤️";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );
        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );
        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        timer.textContent =
            `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }

    updateTimer();
    setInterval(updateTimer, 1000);

    // 🎁 Final surprise button
    const surpriseButton = document.getElementById("finalSurpriseButton");

    if (surpriseButton) {
        surpriseButton.addEventListener("click", function () {
            window.location.href = "surprise.html";
        });
    }

    // 💕 Floating hearts animation
    function createHeart() {
        const heart = document.createElement("span");

        heart.textContent = ["❤️", "💕", "💗", "💖"][
            Math.floor(Math.random() * 4)
        ];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (12 + Math.random() * 15) + "px";
        heart.style.opacity = "0.7";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "transform 6s linear, opacity 6s linear";

        document.body.appendChild(heart);

        requestAnimationFrame(() => {
            heart.style.transform =
                `translateY(-${window.innerHeight + 60}px) rotate(360deg)`;
            heart.style.opacity = "0";
        });

        setTimeout(() => heart.remove(), 6100);
    }

    setInterval(createHeart, 900);

});