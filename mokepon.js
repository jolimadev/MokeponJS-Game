//vars from startGame function:
const sectionAttackSelect = document.getElementById('attack-select')
const resetSection = document.getElementById('reset')
const buttonPlayerPet = document.getElementById("button-pet")

const resetButton = document.getElementById('button-reset')
//vars from function selectPlayerPet:
const sectionPetSelect = document.getElementById('pet-select')
const spanPlayerPet = document.getElementById('player-pet')
//var's from function selectEnemyPet:
const spanEnemyPet = document.getElementById('enemy-pet')
//vars's from Combat function:
const spanPlayerLifes = document.getElementById('player-lifes')
const spanEnemyLifes = document.getElementById('enemy-lifes')
//vars' from createMessage function:
const sectionMessages = document.getElementById('result')
const attacksFromPlayer = document.getElementById('attacks-from-player')
const attacksFromEnemy = document.getElementById('attacks-from-enemy')
const cardsContainer = document.getElementById('cardsContainer')
const containerAttacks = document.getElementById('containerAttacks')
//Global var:
let mokepones = []
let playerAttack = []
let enemyAttack
let optionMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let playerPet
let attacksMokepon
let attacksMokeponEnemy 
let fireButton
let waterButton
let earthButton
let buttons = []
let indexAttackPlayer
let indexAttackEnemy
let victoriesPlayer = 0
let victoriesEnemy = 0
let playerLifes = 3
let enemyLifes = 3

class Mokepon {
    constructor(name, picture, life) {
        this.name = name
        this.picture = picture
        this.life = life
        this.attacks = []
    }
}
//now built our mokepon objects
let hipodoge = new Mokepon('Hipodoge', './images/hipodoge.jpg', 5)
let capipepo = new Mokepon('Capipepo', './images/capipepo.jpg', 5)
let ratigueya = new Mokepon('Ratigueya', './images/ratigueya.jpg', 7)
let langostelvis = new Mokepon('Langostelvis', './images/langostelvis.jpg', 6)
let tucapalma = new Mokepon('Tucapalma', './images/tucapalma.jpg', 5)

hipodoge.attacks.push(
    { name: '🌊', id: 'button-water' },
    { name: '🌊', id: 'button-water' },
    { name: '🌊', id: 'button-water' },
    { name: '🔥', id: 'button-fire' },
    { name: '🌱', id: 'button-earth' }
)
capipepo.attacks.push(
    { name: '🌱', id: 'button-earth' },
    { name: '🌱', id: 'button-earth' },
    { name: '🌱', id: 'button-earth' },
    { name: '🔥', id: 'button-fire' },
    { name: '🌊', id: 'button-water' },
)
ratigueya.attacks.push(
    { name: '🔥', id: 'button-fire' },
    { name: '🔥', id: 'button-fire' },
    { name: '🔥', id: 'button-fire' },
    { name: '🌊', id: 'button-water' },
    { name: '🌱', id: 'button-earth' }
)
langostelvis.attacks.push(
    { name: '🌊', id: 'button-water' },
    { name: '🌊', id: 'button-water' },
    { name: '🌱', id: 'button-earth' },
    { name: '🔥', id: 'button-fire' },
    { name: '🌱', id: 'button-earth' },
)
tucapalma.attacks.push(
    { name: '🌱', id: 'button-earth' },
    { name: '🌊', id: 'button-water' },
    { name: '🌊', id: 'button-water' },
    { name: '🔥', id: 'button-fire' },
    { name: '🔥', id: 'button-fire' },
)
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma);


function startGame() {
    // let sectionAttackSelect = document.getElementById('attack-select')
    sectionAttackSelect.style.display = 'none' //to hide some elements,review the page
    mokepones.forEach((mokepon) => {
        optionMokepones = `
        <input type="radio" name="pet" id=${mokepon.name} />
        <label class="card-mokepon" for=${mokepon.name}>
            <p>${mokepon.name}</p>
            <img src=${mokepon.picture} alt=${mokepon.name}>
        </label>        
        `
        cardsContainer.innerHTML += optionMokepones
        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputLangostelvis = document.getElementById("Langostelvis")
        inputTucapalma = document.getElementById("Tucapalma")
    })
    // let resetSection = document.getElementById('reset')
    resetSection.style.display = 'none'
    //declare an variable and select their id.
    // let buttonPlayerPet = document.getElementById("button-pet")
    buttonPlayerPet.addEventListener("click", selectPlayerPet)

    //RESET BUTTON TO RELOAD GAME:
    // let resetButton = document.getElementById('button-reset')
    resetButton.addEventListener('click', resetGame)
}
//function who r gonna execute after the click(below)
function selectPlayerPet() {
    // let sectionPetSelect = document.getElementById('pet-select')
    sectionPetSelect.style.display = 'none' //now you can see this element
    // let sectionAttackSelect = document.getElementById('attack-select')
    sectionAttackSelect.style.display = 'flex'
    //with innerHtml we manipulate the DOM  
    if (inputHipodoge.checked) {
        spanPlayerPet.innerHTML = inputHipodoge.id
        playerPet = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanPlayerPet.innerHTML = inputCapipepo.id
        playerPet = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanPlayerPet.innerHTML = inputRatigueya.id
        playerPet = inputRatigueya.id
    } else if (inputLangostelvis.checked) {
        spanPlayerPet.innerHTML = inputLangostelvis.id
        playerPet = inputLangostelvis.id
    } else if (inputTucapalma.checked) {
        spanPlayerPet.innerHTML = inputTucapalma.id
        playerPet = inputTucapalma.id
    } else {
        alert('Select some Pet!')
    }
    extractAttacks(playerPet)
    selectEnemyPet()
}

function extractAttacks(playerPet) {
    let attacks
    for (let i = 0; i < mokepones.length; i++) {
        if (playerPet === mokepones[i].name) {
            attacks = mokepones[i].attacks
        }
    }
    showAttacks(attacks)//create the function
}
function showAttacks(attacks) {
    attacks.forEach((attack) => {
        attacksMokepon = `
        <button id=${attack.id} class="attacks-buttons BAttack">${attack.name}</button>
        `
        containerAttacks.innerHTML += attacksMokepon
    })
    fireButton = document.getElementById('button-fire')
    waterButton = document.getElementById('button-water')
    earthButton = document.getElementById('button-earth')
    buttons = document.querySelectorAll('.BAttack')

}

function sequenceAttack() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                playerAttack.push('FIRE')
                console.log(playerAttack);
                button.style.background = '#112f58'
                button.disabled = true
            } else if (e.target.textContent === '🌊') {
                playerAttack.push('WATER')
                console.log(playerAttack);
                button.style.background = '#112f58'
                button.disabled = true
            } else {
                playerAttack.push('EARTH')
                console.log(playerAttack);
                button.style.background = '#112f58'
                button.disabled = true
            }
        });
    });

}
/////built a function to choose some random pet for my enemy
function selectEnemyPet() {
    let randomPet = random(0, mokepones.length - 1)

    spanEnemyPet.innerHTML = mokepones[randomPet].name //fuente de verdad echa con objetos anteriores
     attacksMokeponEnemy = mokepones[randomPet].attacks
    sequenceAttack()
}
//function to obtain random enemy attack
function randomEnemyAttack() {
    let randomAttack = random(0, attacksMokeponEnemy.length -1)

    if (randomAttack === 0 || randomAttack === 1) {
        enemyAttack.push('FIRE')
    } else if (randomAttack === 3 || randomAttack === 4) {
        enemyAttack.push('WATER')
    } else {
        enemyAttack.push('EARTH')
    }
        console.log(enemyAttack);
    combat()
}

function indexBothOpponent(player, enemy) {
    indexAttackEnemy = attacksFromEnemy[enemy]
    indexAttackPlayer = attacksFromPlayer[player]
}
//combat, //logic(cycle) to know if we lose or win:
function combat() {

    for (let index = 0; index < playerAttack.length; index++) {
        if (playerAttack[index] === enemyAttack[index]) {
            indexBothOpponent(index, index)
            createMessage(' DRAW 🥱')
            // NEUTRAL           
        } else if (playerAttack[index] === 'FIRE' && enemyAttack
        [index] === 'EARTH') {
            indexBothOpponent(index, index)
            createMessage(' YOU WON 💪')
            victoriesPlayer++
            spanPlayerLifes.innerHTML = victoriesPlayer
        } else if (playerAttack[index] === 'WATER' && enemyAttack[index] === 'FIRE') {
            createMessage(' YOU WON 💪')
            victoriesPlayer++
            spanPlayerLifes.innerHTML = victoriesPlayer
        } else if (playerAttack[index] === 'EARTH' && enemyAttack[index] === 'WATER') {
            indexBothOpponent(index, index)
            createMessage(' YOU WON 💪')
            victoriesPlayer++
            spanPlayerLifes.innerHTML = victoriesPlayer
        } else {
            indexBothOpponent(index, index)
            createMessage(' YOU LOSE 😭')
            victoriesEnemy++
            spanEnemyLifes.innerHTML = victoriesEnemy
        }
    }
    //function to check available Lifes:
    lifesCheck()
}

function lifesCheck() {
    if (victoriesPlayer === victoriesEnemy) {
        createFinalMessage('THIS WAS A DRAW!!')
    } else if (victoriesPlayer > victoriesEnemy) {
        createFinalMessage('YOU WON! congrats💪')
    } else {
        createFinalMessage('SORRY BUDDY, YOU LOSE😭')
    }
}
function createMessage(result) {
    //finish to insert the paragraph like this: (a)
    let newAttackFromPlayer = document.createElement('p')
    let newAttackFromEnemy = document.createElement('p')

    sectionMessages.innerHTML = result
    newAttackFromPlayer.innerHTML = playerAttack
    newAttackFromEnemy.innerHTML = enemyAttack
    //choose what tag you want to create
    attacksFromPlayer.appendChild(newAttackFromPlayer)
    attacksFromEnemy.appendChild(newAttackFromEnemy)
}
///////////////////////CREATE FINAL MESSAGE:
function createFinalMessage(finalResult) {
    // let sectionMessages = document.getElementById('result')
    sectionMessages.innerHTML = finalResult

    resetSection.style.display = 'block'
}
//reset the Game
function resetGame() {
    location.reload() //to reload the game(pressing the reset)
}
//random function:
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//when the html is loading we r gonna execute the function startGame
window.addEventListener('load', startGame)
//window = window browser


