//global var:
let playerAttack
let enemyAttack
let playerLifes = 3
let enemyLifes = 3

function startGame() {
    let sectionAttackSelect = document.getElementById('attack-select')
    sectionAttackSelect.style.display = 'none' //to hide some elements,review the page
    //hide reset button = section reset
    let resetSection = document.getElementById('reset')
    resetSection.style.display = 'none'
    //declare an variable and select their id.
    let buttonPlayerPet = document.getElementById("button-pet")
    buttonPlayerPet.addEventListener("click", selectPlayerPet)
    let fireButton = document.getElementById('button-fire')
    fireButton.addEventListener('click', fireAttack)
    let waterButton = document.getElementById('button-water')
    waterButton.addEventListener('click', waterAttack)
    let earthButton = document.getElementById('button-earth')
    earthButton.addEventListener('click', earthAttack)
    //RESET BUTTON TO RELOAD GAME:
    let resetButton = document.getElementById('button-reset')
    resetButton.addEventListener('click', resetGame)
}
//function who r gonna execute after the click(below)
function selectPlayerPet() {
    let sectionPetSelect = document.getElementById('pet-select')
    sectionPetSelect.style.display = 'none' //now you can see this element

    let sectionAttackSelect = document.getElementById('attack-select')
    sectionAttackSelect.style.display = 'flex'

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputTucapalma = document.getElementById("tucapalma")
    let spanPlayerPet = document.getElementById('player-pet')
    //with innerHtml we manipulate the DOM  
    if (inputHipodoge.checked) {
        spanPlayerPet.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanPlayerPet.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanPlayerPet.innerHTML = 'Ratigueya'
    } else if (inputLangostelvis.checked) {
        spanPlayerPet.innerHTML = 'Langostelvis'
    } else if (inputTucapalma.checked) {
        spanPlayerPet.innerHTML = 'Tucapalma'
    } else {
        alert('Select some Pet')
    }
    selectEnemyPet()
}
/////built a function to choose some random pet for my enemy
function selectEnemyPet() {
    let randomPet = random(1, 5)
    let spanEnemyPet = document.getElementById('enemy-pet')

    if (randomPet == 1) {
        spanEnemyPet.innerHTML = 'Hipodoge'
    } else if (randomPet == 2) {
        spanEnemyPet.innerHTML = 'Capipepo'
    } else if (randomPet == 3) {
        spanEnemyPet.innerHTML = 'Ratigueya'
    } else if (randomPet == 4) {
        spanEnemyPet.innerHTML = 'Langostelvis'
    } else {
        spanEnemyPet.innerHTML = 'Tucapalma'
    }
}
//powers of the pets:
function fireAttack() {
    playerAttack = 'FIRE'
    randomEnemyAttack()
}
function waterAttack() {
    playerAttack = 'WATER'
    randomEnemyAttack()
}
function earthAttack() {
    playerAttack = 'EARTH'
    randomEnemyAttack()
}
//function to obtain random enemy attack
function randomEnemyAttack() {
    let randomAttack = random(1, 3)

    if (randomAttack == 1) {
        enemyAttack = 'FIRE'
    } else if (randomAttack == 2) {
        enemyAttack = 'WATER'
    } else {
        enemyAttack = 'EARTH'
    }

    combat()
}
//combat, //logic(cycle) to know if we lose or win:
function combat() {
    let spanPlayerLifes = document.getElementById('player-lifes')
    let spanEnemyLifes = document.getElementById('enemy-lifes')

    if (enemyAttack == playerAttack) {
        createMessage(' DRAW 🥱')
    } else if (playerAttack == 'FIRE' && enemyAttack == 'EARTH') {
        createMessage(' YOU WON 💪')
        enemyLifes-- //rest a life
        spanEnemyLifes.innerHTML = enemyLifes
    } else if (playerAttack == 'WATER' && enemyAttack == 'FIRE') {
        createMessage(' YOU WON 💪')
        enemyLifes-- //rest a life
        spanEnemyLifes.innerHTML = enemyLifes
    } else if (playerAttack == 'EARTH' && enemyAttack == 'WATER') {
        createMessage(' YOU WON 💪')
        enemyLifes-- //rest a life
        spanEnemyLifes.innerHTML = enemyLifes
    } else {
        createMessage(' YOU LOSE 😭')
        playerLifes-- //rest a life
        spanPlayerLifes.innerHTML = playerLifes
    }
    //function to check available Lifes:
    lifesCheck()
}

function lifesCheck() {
    if (enemyLifes == 0) {
        createFinalMessage('YOUUUU WIN MOTHAFAKAA😎')
    } else if (playerLifes == 0) {
        createFinalMessage('YOU LOSE 💀 TRY AGAIN')
    }
}
//Create message:
function createMessage(battleResult) {
    //finish to insert the paragraph like this: (a)
    let sectionMessages = document.getElementById('messages')
    //choose what tag you want to create
    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'Your Pet attack with ' + playerAttack + ', and the enemy pet attack with ' + enemyAttack + '-' + battleResult
    //finish to insert the paragraph like this: (b)
    sectionMessages.appendChild(paragraph)
}
///////////////////////CREATE FINAL MESSAGE:
function createFinalMessage(finalResult) {
    let sectionMessages = document.getElementById('messages')
    let paragraph = document.createElement('p')
    paragraph.innerHTML = finalResult
    sectionMessages.appendChild(paragraph)
    //power button disabled, when any player life's == 0
    let fireButton = document.getElementById('button-fire')
    fireButton.disabled = true 
    let waterButton = document.getElementById('button-water')
    waterButton.disabled = true
    let earthButton = document.getElementById('button-earth')
    earthButton.disabled = true 
    //disabled reset button
    let resetSection = document.getElementById('reset')
    resetSection.style.display = 'block'
}
//reset the Game
function resetGame(){
    location.reload() //to reload the game(pressing the reset)
}
//random function:
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//when the html is loading we r gonna execute the function startGame
window.addEventListener('load', startGame)
//window = window browser


//if at least 1 condition is true = true (using OR ||)
//but if we use &&, both have to be true
//AND > &&
// OR > ||
// NOT > ! = if is not FALSE is TRUE, or TRUE is FALSE(the NOT, change the conditional)
