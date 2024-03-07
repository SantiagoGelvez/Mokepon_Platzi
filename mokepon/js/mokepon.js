const inputKatara = document.getElementById("katara")
const inputAnng = document.getElementById("aang")
const inputToph = document.getElementById("toph")
const inputZuko = document.getElementById("zuko")

const buttonWater = document.getElementById("button-water")
const buttonFire = document.getElementById("button-fire")
const buttonEarth = document.getElementById("button-earth")
const buttonRestart = document.getElementById("button-restart")
const buttonSelectCharacter = document.getElementById("button-select-character")

const sectionAttackSelection = document.getElementById("attack-selection")
const sectionCharacterAttacks = document.getElementById("character-attacks")
const sectionCharacterSelection = document.getElementById("character-selection")
const sectionMessage = document.getElementById("result")
const sectionEnemyAttacks = document.getElementById("enemy-attacks")

const spanCharacterSelected = document.getElementById("character-selected")
const spanCharacterLives = document.getElementById("character-selected-lives")
const spanEnemyCharacter = document.getElementById("enemy-character")
const spanEnemyCharacterLives = document.getElementById("enemy-character-lives")

const cardsContainer = document.getElementById('cards-container')


let mokepones = []
let petAttack = null
let enemyAttack = null
let resultFight = null
let mokeponOption = null
let characterLives = 3
let enemyLives = 3


class Mokepon {
    constructor(name, photo, life) {
        this.name = name
        this.photo = photo
        this.life = life
        this.attacks = []
    }
}

let aang = new Mokepon('Aang', './assets/aang.webp', 3)
let katara = new Mokepon('Katara', './assets/katara.webp', 3)
let toph = new Mokepon('Toph', './assets/toph.webp', 3)
let zuko = new Mokepon('Zuko', './assets/zuko.webp', 3)
let sokka = new Mokepon('Sokka', './assets/sokka.webp', 3)
let azula = new Mokepon('Azula', './assets/azula.webp', 3)
let suki = new Mokepon('Suki', './assets/suki.webp', 3)


aang.attacks.push(
    {nombre: '💨 Air 💨', id: 'button-air'},
    {nombre: '💨 Air 💨', id: 'button-air'},
    {nombre: '💧 Water 💧', id: 'button-water'},
    {nombre: '🌱 Earth 🌱', id: 'button-earth'},
    {nombre: '🔥 Fire 🔥', id: 'button-fire'},
)

katara.attacks.push(
    {nombre: '💧 Water 💧', id: 'button-water'},
    {nombre: '💧 Water 💧', id: 'button-water'},
    {nombre: '🌱 Earth 🌱', id: 'button-earth'},
    {nombre: '🔥 Fire 🔥', id: 'button-fire'},
    {nombre: '💨 Air 💨', id: 'button-air'},
)

toph.attacks.push(
    {nombre: '🌱 Earth 🌱', id: 'button-earth'},
    {nombre: '🌱 Earth 🌱', id: 'button-earth'},
    {nombre: '🔥 Fire 🔥', id: 'button-fire'},
    {nombre: '💨 Air 💨', id: 'button-air'},
    {nombre: '💧 Water 💧', id: 'button-water'},
)

zuko.attacks.push(
    {nombre: '🔥 Fire 🔥', id: 'button-fire'},
    {nombre: '🔥 Fire 🔥', id: 'button-fire'},
    {nombre: '💨 Air 💨', id: 'button-air'},
    {nombre: '💧 Water 💧', id: 'button-water'},
    {nombre: '🌱 Earth 🌱', id: 'button-earth'},
)

mokepones.push(aang, katara, toph, zuko, sokka, azula, suki)

function randomChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function initGame() {
    sectionAttackSelection.style.display = "none"

    mokepones.forEach((mokepon) => {
        console.log(mokepon.name)
        mokeponOption = `
        <input type="radio" name="character" id="${mokepon.name}">
        <label class="character-card" for="${mokepon.name}">
            <p>${mokepon.name}</p>
            <img src="${mokepon.photo}" alt="${mokepon.name}">
        </label>
        `

        cardsContainer.innerHTML += mokeponOption
    })

    buttonSelectCharacter.addEventListener("click", selectCharacter)
    
    buttonFire.addEventListener("click", fireAttack)
    buttonWater.addEventListener("click", waterAttack)
    buttonEarth.addEventListener("click", earthAttack)

    buttonRestart.addEventListener("click", restartGame)
    buttonRestart.style.display = "none"
}

function selectCharacter() {
    let isCharacterSelected = false

    if (inputAnng.checked) {
        spanCharacterSelected.innerHTML = "Aang"
        isCharacterSelected = true
    } else if (inputKatara.checked) {
        spanCharacterSelected.innerHTML = "Katara"
        isCharacterSelected = true
    } else if (inputToph.checked) {
        spanCharacterSelected.innerHTML = "Toph"
        isCharacterSelected = true
    } else if (inputZuko.checked) {
        spanCharacterSelected.innerHTML = "Zuko"
        isCharacterSelected = true
    } else {
        alert("Select a character")
    }

    if (isCharacterSelected) {
        sectionAttackSelection.style.display = "flex"
        getEnemyCharacter()
        sectionCharacterSelection.style.display = "none"
    }
}

function getEnemyCharacter() {
    let randomCharacter = randomChoice(1, 4)
    
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
    petAttack = "🔥 Fire 🔥"
    getEnemyAttack()
}

function waterAttack() {
    petAttack = "💧 Water 💧"
    getEnemyAttack()
}

function earthAttack() {
    petAttack = "🌱 Earth 🌱"
    getEnemyAttack()
}

function getEnemyAttack() {
    let randomAttack = randomChoice(1, 3)

    if (randomAttack == 1) {
        enemyAttack = "🔥 Fire 🔥"
    } else if (randomAttack == 2) {
        enemyAttack = "💧 Water 💧"
    } else {
        enemyAttack = "🌱 Earth 🌱"
    }

    getFightResult()
}

function getFightResult() {
    if (petAttack == enemyAttack) {
        resultFight = "It's a TIE 🙈"

    } else if (petAttack == "🔥 Fire 🔥" && enemyAttack == "🌱 Earth 🌱") {
        resultFight = "You WIN 🥳"
        enemyLives--

    } else if (petAttack == "💧 Water 💧" && enemyAttack == "🔥 Fire 🔥") {
        resultFight = "You WIN 🥳"
        enemyLives--

    } else if (petAttack == "🌱 Earth 🌱" && enemyAttack == "💧 Water 💧") {
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
    let newCharacterAttack = document.createElement("p")
    let newEnemyAttack = document.createElement("p")

    sectionMessage.innerHTML = resultFight
    newCharacterAttack.innerHTML = petAttack
    newCharacterAttack.style.textAlign = "center"    
    
    newEnemyAttack.innerHTML = enemyAttack
    newEnemyAttack.style.textAlign = "center"

    sectionCharacterAttacks.appendChild(newCharacterAttack)
    sectionEnemyAttacks.appendChild(newEnemyAttack)
}

function getWinner() {
    if (enemyLives == 0) {
        createFinalMessage("Congrats!!! You are the WINNER! 🏆⭐")
    } else if (characterLives == 0) {
        createFinalMessage("I'm sorry, you LOSE ... 🫂⛈️")
    }
}

function createFinalMessage(result) {
    sectionMessage.innerHTML = result

    buttonFire.disabled = true
    buttonWater.disabled = true
    buttonEarth.disabled = true

    buttonRestart.addEventListener("click", restartGame)
    buttonRestart.style.display = "block"
}

function restartGame() {
    location.reload()
}

window.addEventListener("load", initGame)