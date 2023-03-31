/*-------------------------------- Constants --------------------------------*/
// 5) Define the required constants



/*---------------------------- Variables (state) ----------------------------*/
// 1) Define the required variables used to track the state of the game

let state = {}


/*------------------------ Cached Element References ------------------------*/
// 2) Store cached element references
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')



/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
// 3) Upon loading, the game state should be initialized, and a function should be 


function startGame() {
  state = {}
  showTextNode(1)
}


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
}

const textNodes = [
  {
    id: 1,
    text: 'You slowly begin to regain conciousness and awake from your drunk stupor. You arise from the floor and after rubbing your eyes and squinting intensely you realized your extremly parched. What do you grab to quinch your thirst? ',
    // FIRST STEP OPTIONS 1
    options: [
      {
        text: 'Water',
        nextText: 2
      },
      {
        text: 'Orange juice',
        setState: { orangeJuice: true },
        nextText: 2.2
      },
      {
        text: '6 shots of whatever is closest!!',
        nextText: 50
      }
    ]
  },
  // STEP 2
  {
    id: 2 /*FIRST TIME COMING TO STEP 2 WITH OJ*/,
    text: "Ah refreshing! Guessing we should get up, get out and see where the day takes us. Looks like we're still in our clothes from yesterday though. Let's take a shower and put on something new what'll it be?",
    options: [ 
      {
      text: 'Check weather by stepping outside first',
      nextText: 2.1
    },
    {
      text: 'Shorts and T-shirt',
      setState: {Cold: true },
      nextText: 2.7
    },
    {
      text: 'Pants and jacket',
      nextText: 4
    }
    ]
  },
  {
    id: 2.2 /*FIRST TIME COMING TO STEP 2*/,
    text: "Ah refreshing! You can never go wrong with some good ol' Oj. Guessing we should get up, get out and see where the day takes us. Looks like we're still in our clothes from yesterday though. Let's take a shower and put on something new what'll it be?",
    options: [ 
      {
      text: 'Check weather by stepping outside first',
      nextText: 2.1
    },
    {
      text: 'Shorts and T-shirt',
      setState: {Cold: true },
      nextText: 2.7
    },
    {
      text: 'Pants and jacket',
      nextText: 4
    }
    ]
  },
  {
    id: 2.1, /*MESSAGE AFTER CHECKING WEATHER*/
    text: "Sheesshh It's cold out!",
    options: [
      {
      text: '*Brrrrrrr*',
      nextText: 2.5
      },
      {
        text: "Yeah maybe not the right fit for the occasion let's try that again",
        requiredState: (currentState) => currentState.Cold,
        nextText: 2.5
      },
    ]
  },
  {
    id: 2.5 /*AFTER CHECKING WEATHER*/,
    text: "What'll it be?",
    options: [ 
    {
      text: 'Shorts and T-shirt',
      nextText: 2.7
    },
    {
      text: 'Pants and jacket',
      nextText: 4
    }
    ]
  },
  {
    id: 2.7,
    text: ' Guess we can hit the road!',
    options: [
      {
        text: '*proceeds to walk out of the door*',
        nextText: 2.1
      }
    ]
  },
  {
    id: 50, /* First ENDING */
    text: 'You stumble around the room until you lose your footing and fall unto the floor, Only to have to start the day again maybe tomorrow and hope for a better outcome',
    options: [
      {
        text: 'Restart',
        nextText: -1

      }
    ]
  },
  {
    id: 4,
    text: "Great! Guess it's time to get going. Upon stepping outside you realize either the sun has exploded leaving everything shrouded in darkness or it's very late at night. There a few different paths you could take " ,
    options: [
      {
      text: 'Walk East',
      nextText: 5
      },
      {
        text: 'Walk North',
        nextText: 6
      },
      {
        text: 'Walk South',
        nextText: 7
      }
    ]
  },
  {
    id: 4.1,
    text: "There are a few different paths you could take " ,
    options: [
      {
      text: 'Walk East',
      nextText: 5
      },
      {
        text: 'Walk North',
        nextText: 6
      },
      {
        text: 'Walk South',
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: "Ahead sits a large forest cloaked in darkness. Could maybe get through there but, will definitely need some kind of light" ,
    options: [
      {
      text: 'Use flashlight',
       requiredState: {flashlight: true},
      nextText: 5
      },
      {
        text: 'Walk back to path',
        nextText: 4.1
      },
    ]
  },
  {
    id: 6,
    text: 'You walk along the path for a minute or two before approaching what seems to be a pillar with a large handle',
    options: [
      {
        text: ' pull handle?',
        // requiredState: (currentState) => currentState.orangeJuice,
        nextText: 6.1
      },
      {
        text: "Don't touch the handle and head back to the path",
        nextText: 4.1
      }
    ]
  },
  {
    id: 6.1,
    text: 'You pull the handle and reveal a compartment. Theres a flashlight inside! Do you take it?',
    options: [
      {
        text: "I don't see why not",
        setState: {flashlight: true},
        nextText: 6.1
      },
      {
        text: "Def not. Gonna go ahead and head back now",
        nextText: 4.1
      }
    ]
  }

]

startGame()



// requiredState: (currentState) => currentState.orangeJuice,