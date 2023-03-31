/*-------------------------------- Constants --------------------------------*/
// 5) Define the required constants



/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game



/*------------------------ Cached Element References ------------------------*/
// 2) Store cached element references
const textElement = document.getElementById('text')
const optionButtons = document.getElementById('option-buttons')



/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
// 3) Upon loading, the game state should be initialized, and a function should be 

let state = {}

function startGame() {
  state = {}
  showTextNode()
}
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
}

function selectOption(option) {

}
const textNodes = [
  {
    id: 1,
    text: ''
  }
]

startGame()



