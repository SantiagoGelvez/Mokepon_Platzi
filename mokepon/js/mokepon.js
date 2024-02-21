function initGame() {
    let buttonPet = document.getElementById("button-pet")
    buttonPet.addEventListener("click", selectPet)
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

    selectEnemyPet()
}

function selectEnemyPet() {
    let randomAttack = randomChoice(1, 3)
    let spanEnemyPet = document.getElementById("enemy-pet")
    
    if (randomAttack == 1) {
        spanEnemyPet.innerHTML = "Hipodoge"
    } else if (randomAttack == 2) {
        spanEnemyPet.innerHTML = "Capipepo"
    } else {
        spanEnemyPet.innerHTML = "Ratigueya"
    }
}

function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", initGame)