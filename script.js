let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner() {
    // Get selected player choice
    const playerChoice = document.querySelector('input[name="choice"]:checked');

    if (!playerChoice) {
        document.getElementById("message").textContent = "Please select an option!";
        return;
    }

    const playerSelection = playerChoice.value;
    const computerSelection = getComputerChoice();

    let resultMessage = `Computer chose ${computerSelection}. `;

    if (playerSelection === computerSelection) {
        tieScore++;
        document.getElementById("tieScore").textContent = tieScore;
        resultMessage += "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        document.getElementById("playerScore").textContent = playerScore;
        resultMessage += "You win!";
    } else {
        computerScore++;
        document.getElementById("computerScore").textContent = computerScore;
        resultMessage += "You lose!";
    }

    // Display result
    document.getElementById("message").textContent = resultMessage;
}
document.querySelectorAll('input[name="choice"]').forEach(choice => {
    choice.addEventListener("change", determineWinner);
});
