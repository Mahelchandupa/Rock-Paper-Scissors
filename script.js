const body = document.querySelector('body')
const gameGrid = document.createElement('div')
const resultbody = document.createElement('div')
const title = document.createElement('h1')
const buttonContainer = document.createElement('div')
const userChoiseDisplay = document.createElement('div')
const computerChoiseDisplay = document.createElement('div')
const resualtDisplay = document.createElement('div')
const Svg = document.createElement('img')

const choiceUserTitle = document.createElement('p')
const choiceUserImage = document.createElement('img')

const choiceComputerTitle = document.createElement('p')
const choiceComputerImage = document.createElement('img')


const choises = ['Rock', 'Paper', 'Scissors']
let seconds = 3
title.innerHTML = "Rock Paper Scissors"
title.classList.add('title')
Svg.classList.add("svg-img")

body.append(title,gameGrid,Svg)

gameGrid.classList.add('gameGrid')
gameGrid.appendChild(resultbody)
gameGrid.appendChild(buttonContainer)

resultbody.append(userChoiseDisplay,computerChoiseDisplay,resualtDisplay)

resultbody.classList.add('result-container')
buttonContainer.classList.add('button-container')

document.querySelectorAll('.result-container div').forEach((element,index) =>{
  element.classList.add('dicess')
})

userChoiseDisplay.append(choiceUserTitle,choiceUserImage)
computerChoiseDisplay.append(choiceComputerTitle,choiceComputerImage)

resualtDisplay.classList.add('res-dis')
userChoiseDisplay.classList.add('user-dis')
computerChoiseDisplay.classList.add('computer-dis')

document.querySelector('.computer-dis img').style.visibility = 'hidden';
document.querySelector('.user-dis img').style.visibility = 'hidden';
Svg.style.visibility = 'hidden'

document.querySelector('.user-dis p').innerHTML = "Your Choice"
document.querySelector('.computer-dis p').innerHTML = "Computer Choice"


const handleClick = (e) =>{

    userChoiseDisplay.removeAttribute('id')
    computerChoiseDisplay.removeAttribute("id")
    document.querySelector('.computer-dis img').src = "";
    document.querySelector('.computer-dis img').style.visibility = 'hidden';
    Svg.src = ''
    Svg.style.visibility = 'hidden'
    resualtDisplay.innerHTML = ""
    resualtDisplay.style.visibility = 'hidden'
   

   const value = e.target.id
   const getImageElement = document.querySelector('.user-dis img');
   getImageElement.style.visibility = 'visible'
   getImageElement.src = `./images/${value}.jpg`;
   CountDown(value)
}

const CountDown = (userChoice) =>{
    seconds = 3
    let count = setInterval(() => {
        if (seconds <= 0) {
            clearTimeout(count)
            computerChoice(userChoice)
        }
        else {
            document.querySelector('.computer-dis p').innerHTML = `${seconds}`;
        }
        seconds--

    }, 1000)
}

const computerChoice = (userChoice) =>{
    const computerChoice = choises[Math.floor(Math.random() * choises.length)]
    const getImageElement = document.querySelector('.computer-dis img');
    getImageElement.style.visibility = 'visible'
    getImageElement.src = `./images/${computerChoice}.jpg`;
    choiseWinner(userChoice,computerChoice)
}

const choiseWinner = (userChoice,computerChoice) =>{
   switch(userChoice + computerChoice){
    case "PaperRock":
    case "ScissorsPaper":
    case "RockScissors":
      resualtDisplay.innerHTML = 'YOU WIN!'
      Svg.style.visibility = 'visible'
      Svg.src = './images/winking_face (1).gif'
      resualtDisplay.style.visibility = 'visible'
      break
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
        resualtDisplay.innerHTML = 'YOU LOSE!'
        Svg.style.visibility = 'visible'
        Svg.src = './images/zany_face.gif'
        resualtDisplay.style.visibility = 'visible'
        break
    case "PaperPaper":
    case "ScissorsScissors":
    case "RockRock":
        resualtDisplay.innerHTML = 'DROW!'
        Svg.style.visibility = 'visible'
        Svg.src = './images/smirking_face.gif'
        resualtDisplay.style.visibility = 'visible'
        break
   }
}


choises.forEach( choise =>{
    const button = document.createElement('button')
    button.style.backgroundImage = `url(./images/${choise}.jpg)`
    button.id = choise
    buttonContainer.appendChild(button)
    button.addEventListener('click', handleClick)
})
