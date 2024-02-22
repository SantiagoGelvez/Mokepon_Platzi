let petAttack = null
let enemyAttack = null
let resultFight = null
let petLives = 3
let enemyLives = 3

function initGame() {
    let sectionAttackSelection = document.getElementById("attack-selection")
    sectionAttackSelection.style.display = "none"

    let buttonPet = document.getElementById("button-pet")
    buttonPet.addEventListener("click", selectPet)
    
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

function selectPet() {
    let isPetSelected = false
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")

    let spanPetSelected = document.getElementById("pet-selected")

    if (inputHipodoge.checked) {
        spanPetSelected.innerHTML = "Hipodoge"
        isPetSelected = true
    } else if (inputCapipepo.checked) {
        spanPetSelected.innerHTML = "Capipepo"
        isPetSelected = true
    } else if (inputRatigueya.checked) {
        spanPetSelected.innerHTML = "Ratigueya"
        isPetSelected = true
    } else {
        alert("Select a pet")
    }

    if (isPetSelected) {
        let sectionAttackSelection = document.getElementById("attack-selection")
        let sectionPetSelection = document.getElementById("pet-selection")
        
        sectionAttackSelection.style.display = "block"
        getEnemyPet()
        sectionPetSelection.style.display = "none"
    }
}

function getEnemyPet() {
    let randomPet = randomChoice(1, 3)
    let spanEnemyPet = document.getElementById("enemy-pet")
    
    if (randomPet == 1) {
        spanEnemyPet.innerHTML = "Hipodoge"
    } else if (randomPet == 2) {
        spanEnemyPet.innerHTML = "Capipepo"
    } else {
        spanEnemyPet.innerHTML = "Ratigueya"
    }
}

function createMessage() {
    let sectionMessage = document.getElementById("messages")
    
    let newMessage = document.createElement("p")
    newMessage.innerHTML = "Your pet attacks with " + petAttack + ". The enemy's pet attack with " + enemyAttack + " - " + resultFight
    
    sectionMessage.appendChild(newMessage)
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

function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getFightResult() {

    let spanPetLives = document.getElementById("pet-selected-lives")
    let spanEnemyPetLives = document.getElementById("enemy-pet-lives")

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
        petLives--
    }

    spanPetLives.innerHTML = petLives
    spanEnemyPetLives.innerHTML = enemyLives

    createMessage()
    getWinner()
}

function getWinner() {
    if (enemyLives == 0) {
        createFinalMessage("Congrats!!! You are the WINNER! 🏆⭐")
    } else if (petLives == 0) {
        createFinalMessage("I'm sorry, you LOSE ... 🫂⛈️")
    }
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

function restartGame() {
    location.reload()
}

window.addEventListener("load", initGame)