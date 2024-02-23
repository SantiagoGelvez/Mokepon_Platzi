let petAttack = null
let enemyAttack = null
let resultFight = null
let characterLives = 3
let enemyLives = 3

function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function initGame() {
    let sectionAttackSelection = document.getElementById("attack-selection")
    sectionAttackSelection.style.display = "none"

    let buttonSelectCharacter = document.getElementById("button-select-character")
    buttonSelectCharacter.addEventListener("click", selectCharacter)
    
    let buttonFire = document.getElementById("button-fire")
    buttonFire.addEventListener("click", fireAttack)
    let buttonWater = document.getElementById("button-water")
    buttonWater.addEventListener("click", waterAttack)
    let buttonEarth = document.getElementById("button-earth")
    buttonEarth.addEventListener("click", earthAttack)

    let buttonRestart = document.getElementById("button-restart")
    buttonRestart.addEventListener("click", restartGame)
    buttonRestart.style.display = "none"
}

function selectCharacter() {
    let isCharacterSelected = false
    let inputAnng = document.getElementById("aang")
    let inputKatara = document.getElementById("katara")
    let inputToph = document.getElementById("toph")
    let inputZuko = document.getElementById("zuko")

    let spancharacterSelected = document.getElementById("character-selected")

    if (inputAnng.checked) {
        spancharacterSelected.innerHTML = "Aang"
        isCharacterSelected = true
    } else if (inputKatara.checked) {
        spancharacterSelected.innerHTML = "Katara"
        isCharacterSelected = true
    } else if (inputToph.checked) {
        spancharacterSelected.innerHTML = "Toph"
        isCharacterSelected = true
    } else if (inputZuko.checked) {
        spancharacterSelected.innerHTML = "Zuko"
        isCharacterSelected = true
    } else {
        alert("Select a character")
    }

    if (isCharacterSelected) {
        let sectionAttackSelection = document.getElementById("attack-selection")
        let sectionCharacterSelection = document.getElementById("character-selection")
        
        sectionAttackSelection.style.display = "block"
        getEnemyCharacter()
        sectionCharacterSelection.style.display = "none"
    }
}

function getEnemyCharacter() {
    let randomCharacter = randomChoice(1, 4)
    let spanEnemyCharacter = document.getElementById("enemy-character")
    
    if (randomCharacter == 1) {
        spanEnemyCharacter.innerHTML = "Aang"
    } else if (randomCharacter == 2) {
        spanEnemyCharacter.innerHTML = "Katara"
    } else if (randomCharacter == 3) {
        spanEnemyCharacter.innerHTML = "Toph"
    } else {
        spanEnemyCharacter.innerHTML = "Zuko"
    }
}


function fireAttack() {
    petAttack = "Fire 🔥"
    getEnemyAttack()
}

function waterAttack() {
    petAttack = "Water 💧"
    getEnemyAttack()
}

function earthAttack() {
    petAttack = "Earth 🌱"
    getEnemyAttack()
}

function getEnemyAttack() {
    let randomAttack = randomChoice(1, 3)

    if (randomAttack == 1) {
        enemyAttack = "Fire 🔥"
    } else if (randomAttack == 2) {
        enemyAttack = "Water 💧"
    } else {
        enemyAttack = "Earth 🌱"
    }

    getFightResult()
}

function getFightResult() {

    let spanCharacterLives = document.getElementById("character-selected-lives")
    let spanEnemyCharacterLives = document.getElementById("enemy-character-lives")

    if(petAttack == enemyAttack) {
        resultFight = "It's a TIE 🙈"

    } else if(petAttack == "Fire 🔥" && enemyAttack == "Earth 🌱") {
        resultFight = "You WIN 🥳"
        enemyLives--

    } else if(petAttack == "Water 💧" && enemyAttack == "Fire 🔥") {
        resultFight = "You WIN 🥳"
        enemyLives--

    } else if(petAttack == "Earth 🌱" && enemyAttack == "Water 💧") {
        resultFight = "You WIN 🥳"
        enemyLives--

    } else {
        resultFight = "You LOSE ☠️"
        characterLives--
    }

    spanCharacterLives.innerHTML = characterLives
    spanEnemyCharacterLives.innerHTML = enemyLives

    createMessage()
    getWinner()
}

function createMessage() {
    let sectionMessage = document.getElementById("messages")
    
    let newMessage = document.createElement("p")
    newMessage.innerHTML = "Your pet attacks with " + petAttack + ". The enemy's pet attack with " + enemyAttack + " - " + resultFight
    
    sectionMessage.appendChild(newMessage)
}

function getWinner() {
    if (enemyLives == 0) {
        createFinalMessage("Congrats!!! You are the WINNER! 🏆⭐")
    } else if (characterLives == 0) {
        createFinalMessage("I'm sorry, you LOSE ... 🫂⛈️")
    }
}

function createFinalMessage(result) {
    let sectionMessage = document.getElementById("messages")
    
    let newMessage = document.createElement("p")
    newMessage.innerHTML = result
    
    sectionMessage.appendChild(newMessage)

    let buttonFire = document.getElementById("button-fire")
    buttonFire.disabled = true
    let buttonWater = document.getElementById("button-water")
    buttonWater.disabled = true
    let buttonEarth = document.getElementById("button-earth")
    buttonEarth.disabled = true

    let buttonRestart = document.getElementById("button-restart")
    buttonRestart.addEventListener("click", restartGame)
    buttonRestart.style.display = "block"
}


function restartGame() {
    location.reload()
}

window.addEventListener("load", initGame)