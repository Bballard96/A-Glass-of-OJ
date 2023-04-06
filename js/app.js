import { textNodes } from "../data/storyline.js";

let state = {}
let introOverlay = document.getElementById("intro-overlay");
let startButton = document.getElementById("button-7");
let gameContainer = document.getElementById("game-container");
const playButton = document.getElementById('.btn')
const startNoise = new Audio("../audio/startGame.mp3")
const optionSound = document.querySelector(".btn")
const introSound = new Audio("../audio/pouring.mp3")
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

const sounds = [
  new Audio("../audio/option1.mp3"),
  new Audio("../audio/option2.mp3"),
  new Audio("../audio/skill.mp3")
]

let backgroundState 

startButton.addEventListener("click", function() {
  introOverlay.style.display = "none";
  gameContainer.style.display = "block";
  startNoise.volume = .05
  startNoise.play()
  introSound.volume = .003
  introSound.play()
})


function startGame() {
  state = {}
  showTextNode(1)
  backgroundState = document.body.style.backgroundImage = "url('../assets/XDjgmZ.png')";
}

function render(){
  startGame()}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
function selectOption(option) {
  const nextTextNodeId = option.nextText 
  if (nextTextNodeId === -1){
    startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
  let sound = sounds[Math.floor(Math.random() * sounds.length)]
  sound.volume = .03
  sound.play()
}
render()