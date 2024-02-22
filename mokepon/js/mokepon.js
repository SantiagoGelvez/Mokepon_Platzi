let petAttack = null
let enemyAttack = null

function initGame() {
    let buttonPet = document.getElementById("button-pet")
    buttonPet.addEventListener("click", selectPet)
    
    let buttonFire = document.getElementById("button-fire")
    buttonFire.addEventListener("click", fireAttack)
    
    let buttonWater = document.getElementById("button-water")
    buttonWater.addEventListener("click", waterAttack)
    
    let buttonEarth = document.getElementById("button-earth")
    buttonEarth.addEventListener("click", earthAttack)
}

function selectPet() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")

    let spanPetSelected = document.getElementById("pet-selected")

    if (inputHipodoge.checked) {
        spanPetSelected.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanPetSelected.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanPetSelected.innerHTML = "Ratigueya"
    } else {
        alert("Select a pet")
    }

    getEnemyPet()
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

function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getEnemyAttack() {
    let randomAttack = randomChoice(1, 3)

    if (randomAttack == 1) {
        enemyAttack = "Fire"
    } else if (randomAttack == 2) {
        enemyAttack = "Water"
    } else {
        enemyAttack = "Earth"
    }
    alert("Enemy's pet attack with " + enemyAttack)
}

function fireAttack() {
    petAttack = "Fire"
    alert("Your pet attack with " + petAttack)
    getEnemyAttack()
}

function waterAttack() {
    petAttack = "Water"
    alert("Your pet attack with " + petAttack)
    getEnemyAttack()
}

function earthAttack() {
    petAttack = "Earth"
    alert("Your pet attack with " + petAttack)
    getEnemyAttack()
}


window.addEventListener("load", initGame)