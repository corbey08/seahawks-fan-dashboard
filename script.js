// Schedule (Static data for simplicity)
const schedule = [
    { date: "2024-12-22", opponent: "Vikings", location: "Home", time: "9.05 PM" },
    { date: "2025-12-27", opponent: "Bears", location: "Away", time: "1:15 AM" },
    { date: "2025-01-03", opponent: "Rams", location: "Away", time: "TBD" }
];

// Trivia
const trivia = [
    "The Seahawks have won one Super Bowl. Super Bowl XLVIII in 2014 against the Broncos",
    "The 12th Man is a tribute to the fans' impact during games.",
    "The Seahawks are the only NFL team to switch conferences between the NFC and AFC twice."
];

// Display Schedule
function displaySchedule() {
    const scheduleDiv = document.getElementById("schedule");
    schedule.forEach(game => {
        const gameDiv = document.createElement("div");
        gameDiv.innerText = `${game.date}: vs ${game.opponent} (${game.location}) at ${game.time}`;
        scheduleDiv.appendChild(gameDiv);
    });
}

// Display a random trivia
function showTrivia() {
    const triviaDiv = document.getElementById("trivia");
    triviaDiv.innerText = trivia[Math.floor(Math.random() * trivia.length)];
}

// Change background to Seahawks colors
function changeColors() {
    document.body.style.background = "linear-gradient(#002244, #69BE28)";
}

// Display fan chant
function fanChant() {
    alert("SEA! HAWKS!");
}

// Initialise dashboard
document.addEventListener("DOMContentLoaded", () => {
    displaySchedule();
    showTrivia();

    document.getElementById("colorButton").addEventListener("click", changeColors);
    document.getElementById("chantButton").addEventListener("click", fanChant);
});
