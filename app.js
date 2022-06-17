const items = ['scissors', 'rock', 'paper'];

function computerSelection() {
    const min = 0, max = 2;
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function playerSelection() {
    const selection = prompt(`# Choose your weapon:
    
✂️ - Scissors
🪨 - Rock
📄 - Paper
`);
    return items.indexOf(selection.toLowerCase());
}

