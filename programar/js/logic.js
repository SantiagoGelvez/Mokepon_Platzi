function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function choice(move) {
    if (move == 1) {
        return "🪨 (👊)"
    } else if(move == 2) {
        return "paper 📄 (✋)"
    } else if(move == 3) {
        return "scissor ✂️ (✌️)"
    } else {
        return "doesnt exists"
    }
}

let player = 0;
let pc = 0;
let winings = 0;
let loses = 0;

while (winings < 3 && loses < 3) {
    pc = randomChoice(1, 3)
    player = prompt("Choose: 1-Rock, 2-Paper, 3-Scissor")

    alert("Human choice " + choice(player))
    alert("PC choice " + choice(pc))

    if(pc == player) {
        alert("TIE")

    } else if(player == 1 && pc == 3) {
        winings += 1;
        alert("You WIN");

    } else if(player == 2 && pc == 1) {
        winings += 1;
        alert("You WIN")

    } else if(player == 3 && pc == 2) {
        winings += 1;
        alert("You WIN")

    } else {
        loses += 1;
        alert("You LOSE")
    }
}

alert("You win " + winings + " times. You lose " + loses + " times")