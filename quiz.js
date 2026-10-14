const quizForm = document.getElementById("quizForm");

const resultSection = document.getElementById("resultSection");
const errorMessage = document.getElementById("errorMessage");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const scorePercentage = document.getElementById("scorePercentage");
const scoreDetails = document.getElementById("scoreDetails");
const resultTitle = document.getElementById("resultTitle");
const loveMessage = document.getElementById("loveMessage");
const nextHint = document.getElementById("nextHint");

const nextButton = document.getElementById("nextButton");
const retryButton = document.getElementById("retryButton");


// Correct answers — keep these private ❤️
const correctAnswers = {
    q1: "c",
    q2: "a",
    q3: "b",
    q4: "d",
    q5: "b"
};

const totalQuestions = Object.keys(correctAnswers).length;


// Update progress as answers are selected
quizForm.addEventListener("change", function () {

    let answered = 0;

    for (const question in correctAnswers) {
        if (quizForm.querySelector(`input[name="${question}"]:checked`)) {
            answered++;
        }
    }

    progressText.textContent = `${answered} of ${totalQuestions} answered`;

    progressBar.style.width =
        `${(answered / totalQuestions) * 100}%`;

    errorMessage.textContent = "";
});


// Submit quiz
quizForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let score = 0;
    let unanswered = [];

    for (const question in correctAnswers) {

        const selected = quizForm.querySelector(
            `input[name="${question}"]:checked`
        );

        if (!selected) {
            unanswered.push(question);
        } else if (selected.value === correctAnswers[question]) {
            score++;
        }
    }

    // All five questions must be answered
    if (unanswered.length > 0) {

        errorMessage.textContent =
            `💕 Please answer all 5 questions first! You still have ${unanswered.length} question(s) left.`;

        const firstUnanswered = quizForm.querySelector(
            `input[name="${unanswered[0]}"]`
        );

        firstUnanswered.closest(".question-card").scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        return;
    }

    const percentage = (score / totalQuestions) * 100;

    // Display percentage
    scorePercentage.textContent = `${percentage}%`;

    scoreDetails.textContent =
        `You got ${score} out of ${totalQuestions} questions correct!`;

    // Different messages for different scores
    if (score === 5) {

        resultTitle.textContent = "You Remember Everything! ❤️";

        loveMessage.textContent =
            "Awww, Meow! 🥹💕 You remembered every little detail of our story. Every memory is precious, and I'm so happy we share these moments together!";

        nextHint.textContent =
            "You got a perfect score! Our next little surprise is waiting for you. 💌";

        nextButton.hidden = false;
        retryButton.hidden = true;

    } else if (score >= 3) {

        resultTitle.textContent = "So Many Beautiful Memories! 💗";

        loveMessage.textContent =
            "You remembered so many of our special moments! Every memory means something to me. Let's see if you can remember all five, Meow! 🧸❤️";

        nextHint.textContent =
            "Get all 5 answers correct to unlock your next surprise! 💌";

        nextButton.hidden = true;
        retryButton.hidden = false;

    } else {

        resultTitle.textContent = "Let's Remember Our Story! 💕";

        loveMessage.textContent =
            "Our little memories are waiting for you, Meow! Take your time, think about our moments together, and give it another try. 😻";

        nextHint.textContent =
            "You can do it! Answer all five correctly to unlock the next page. ❤️";

        nextButton.hidden = true;
        retryButton.hidden = false;
    }

    // Hide quiz and display results
    quizForm.hidden = true;
    resultSection.hidden = false;

    // Scroll to the result
    resultSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// Retry the quiz
retryButton.addEventListener("click", function () {

    quizForm.reset();

    quizForm.hidden = false;
    resultSection.hidden = true;

    progressText.textContent = "0 of 5 answered";
    progressBar.style.width = "0%";

    errorMessage.textContent = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Go to the final anniversary wish page
nextButton.addEventListener("click", function () {

    window.location.href = "surprise.html";

});


// Floating hearts background
const heartsContainer = document.getElementById("floatingHearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    const heartSymbols = ["💗", "💕", "♡", "💖", "💘"];

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 15) + "px";

    const duration = 7 + Math.random() * 6;

    heart.style.animationDuration = duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 800);