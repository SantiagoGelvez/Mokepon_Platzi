function initGame() {
    let buttonPet = document.getElementById("button-pet")
    buttonPet.addEventListener("click", selectPet)
}

function selectPet() {
    hipodoge = document.getElementById('hipodoge')
    capipepo = document.getElementById('capipepo')
    ratigueya = document.getElementById('ratigueya')
    if (hipodoge.checked) {
        alert("You select hipodoge")
    } else if (capipepo.checked) {
        alert("You select capipepo")
    } else if (ratigueya.checked) {
        alert("You select ratigueya")
    } else {
        alert("Pet no selected yet")
    }
}

window.addEventListener("load", initGame)