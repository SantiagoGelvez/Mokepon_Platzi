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
}

window.addEventListener("load", initGame)