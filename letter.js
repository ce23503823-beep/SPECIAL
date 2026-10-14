// ===== LOVE LETTER MESSAGE =====

const letterText = document.getElementById("letterText");

letterText.innerHTML = `
Hii En Cute Teddy ❤️🧸

En life-la nee vandhadhukku apram, enakku neraya beautiful memories kidaichirukku.
Un kooda pesura ovvoru moment-um, college-la nadakkura chinna chinna memories-um
enakku romba special. Unna paakumbodhu enakku varra happiness-um shy feeling-um
words-la solla mudiyadhu da. ❤️

Nee enna choose pannadhu enakku romba special, Meow.
Un life-la naanum oru important person-ah irukkanum nu aasai paduren.
Namma rendu perum sandhoshama irukkura moments mattum illaama,
kashtama irukkura moments-layum orutharukku oruthar support-ah irukkanum.

Enakku nee venum da, happy moments share pannavum, sad-ah irukkumbodhu
manasu vittu pesavum, enna nadandhaalum en feelings-ah purinjukka try pannavum.
Namma rendu perukkum misunderstandings vandhaalum, adha pesi solve panni,
oruvarai oruvar purinjukittu munnaadi poganum. ❤️

Namma love-ah yaar koodayum compare panna vendam.
Namma relationship namakku special. Namma rendu perum serndhu
namma life-la neraya achieve pannanum. Un dreams-ku naan support-ah irukkanum;
en dreams-kum nee support-ah irukkanum. Oru naal namma rendu perum
thirumbi indha memories-ah paathu happy-ah sirikkanum. 🥹❤️

Teddy, naan perfect person illa da.
Aana unna love panradhulayum, namma relationship-ah care panradhulayum
ennala mudinja alavukku sincere-ah iruppen. Un feelings-ah purinjukka try pannuven;
en feelings-um unakku puriyanum nu aasai paduren.

Indha first anniversary namakku oru beautiful beginning-ah irukkanum.
Innum neraya anniversaries, neraya memories, neraya happiness
namma serndhu experience pannanum. Life-la enna problems vandhaalum,
rendu perum open-ah pesi, mutual respect-oda serndhu face pannalaam. 💗

Thank you for being a special part of my life, en kutty teddy. 🧸❤️
Un kooda irukkura chinna chinna moments kooda enakku priceless.
Namma love story innum azhaga continue aaganum nu manasara aasai paduren.


Once again, Happy 1st Love Anniversary, My Meow! 🖤💗
I love you so much da, en kutty teddy.

`;
// ===== DISPLAY MESSAGE WITH SMALL GAPS =====

const letterText = document.getElementById("letterText");

if (letterText) {
    const paragraphs = message
        .trim()
        .split(/\n\s*\n/)
        .filter(paragraph => paragraph.trim() !== "");

    paragraphs.forEach(paragraph => {
        const p = document.createElement("p");

        p.textContent = paragraph.trim();

        letterText.appendChild(p);
    });
}


// ===== MUSIC BUTTON =====

function toggleMusic() {
    const music = document.getElementById("bgMusic");

    if (!music) return;

    if (music.paused) {
        music.play().catch(() => {
            console.log("Tap the music button to start playback.");
        });
    } else {
        music.pause();
    }
}


// ===== FLOATING HEARTS =====

function createHeart() {
    const heartsContainer = document.getElementById("hearts");

    if (!heartsContainer) return;

    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "❤️" : "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 14) + "px";
    heart.style.animationDuration = (7 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 1800);


// ===== NEXT PAGE =====

function nextPage() {
    window.location.href = "quiz.html";
}