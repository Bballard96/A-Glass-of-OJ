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

// function startMenu() {
  
// }

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
    text: "You slowly begin to regain consciousness and awake from your drunken stupor. You arise from the floor, and after rubbing your eyes and squinting intensely, you realize you're very parch. What do you grab to quench your thirst?",
    // FIRST STEP OPTIONS 1
    options: [
      {
        text: 'Water.',
        nextText: 2
      },
      {
        text: 'Orange juice.',
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
    text: "Ah refreshing! Guessing we should get up, get out and see where the day takes us. It Looks like we're still in our clothes from yesterday. You should shower and put on something new what'll it be?",
    options: [ 
      {
      text: 'Check weather by stepping outside first.',
      nextText: 2.1
    },
    {
      text: 'Shorts and T-shirt.',
      setState: {Cold: true },
      nextText: 2.7
    },
    {
      text: 'Pants and jacket.',
      nextText: 4
    }
    ]
  },
  {
    id: 2.2 /*FIRST TIME COMING TO STEP 2*/,
    text: "Ah refreshing! You can never go wrong with some good ol' Oj. Guessing we should get up, get out and see where the day will take us, although it looks like we're still in our clothes from yesterday. You should shower and put on something new what'll it be?",
    options: [ 
      {
      text: 'Check weather by stepping outside first.',
      nextText: 2.1
    },
    {
      text: 'Shorts and T-shirt.',
      setState: {Cold: true },
      nextText: 2.7
    },
    {
      text: 'Pants and jacket.',
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
        text: "Maybe not the right fit for the occasion you should try that again.",
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
      text: 'Shorts and T-shirt.',
      nextText: 2.7
    },
    {
      text: 'Pants and jacket.',
      nextText: 4
    }
    ]
  },
  {
    id: 2.7,
    text: 'Time to hit the road!',
    options: [
      {
        text: '*proceeds to walk out of the door*',
        nextText: 2.1
      }
    ]
  },
  {
    id: 50, /* First ENDING */
    text: 'You stumble around the room until you lose your footing and fall onto the floor, Only to have to start the day again, maybe tomorrow, and hope for a better outcome.',
    options: [
      {
        text: 'You Lose. Restart.',
        nextText: -1

      }
    ]
  },
  {
    id: 4,
    text: "Great! Guess it's time to get going. Upon stepping outside, you realize either the sun has exploded everything shrouded in darkness, or it's very late at night. There are a few different paths you could take." ,
    options: [
      {
      text: 'Walk East.',
      nextText: 5
      },
      {
        text: 'Walk North.',
        nextText: 6
      },
      {
        text: 'Walk South.',
        nextText: 7
      }
    ]
  },
  {
    id: 4.1,
    text: "There are a few different paths you could take." ,
    options: [
      {
      text: 'Walk East.',
      nextText: 5
      },
      {
        text: 'Walk North.',
        nextText: 6
      },
      {
        text: 'Walk South.',
        nextText: 7
      },
    ]
  },
  {
    id: 5,
    text: "Ahead sits a large forest cloaked in darkness. You could maybe get through, but you will need some light." ,
    options: [
      {
      text: 'Use a flashlight to illuminate the path ahead and proceed down.',
      requiredState: (currentState) => currentState.flashLight,
      nextText: 8
      },
      {
        text: 'Walk back to path.',
        nextText: 4.1
      },
    ]
  },
  {
    id: 6,
    text: 'You walk along the path for a minute or two before approaching what seems to be a pillar with a large handle. ',
    options: [
      {
        text: 'Pull handle?',
        // requiredState: (currentState) => currentState.orangeJuice,
        nextText: 6.1
      },
      {
        text: "Don't touch the handle, and head back to the path.",
        nextText: 4.1
      }
    ]
  },
  {
    id: 6.1,
    text: "You pull the handle and reveal a compartment. There's a flashlight inside! Do you take it?",
    options: [
      {
        text: "Of course, I will take something that most likely belongs to someone else and make it my own!",
        setState: {flashLight: true},
        nextText: 4.1
      },
      {
        text: "That is not mine. I'll leave it where it was and return to the path.",
        nextText: 4.1
      }
    ]
  },
  {
    id: 7,
    text: 'It looks like you stumble upon a small stream with something shiny beneath the surface.',
    options: [
      {
        text: "Reach down and pick up whatever item this is.",
        nextText: 7.2,
      },
      {
        text: "I Don't want to take my chances on whatever else could be in that water. I'm Going to head back to the path.",
        nextText: 4.1
      },
      {
        text: "Use your flashlight to light the water and stare at yourself before returning to the path.",
        requiredState: (currentState) => currentState.flashLight,
        nextText: 4.1
      },
    ]
  },
  {
    id: 7.2,
    text: "It's a flask filled with your favorite bourbon. ",
    options: [
      {
        text: "Drink every last drop of strangers alcohol that we found at the bottom of this river. A great idea!",
        nextText: 50.1
      },
      {
        text: "I Don't want to take my chances on whatever else could be in that water. I'm Going to head back to the path.",
        nextText: 4.1
      },
    ]
  },
  {
    id: 8,
    text: "You start to walk through the forest using the flashlight to illuminate in front of you. It seems you're approaching a building.",
    options: [
      {
        text: "Approach building.",
        nextText: 9
      },
    ]
  },
  {
    id: 9,
    text: "You get closer to the building and realize there is music playing from the inside, and it looks like there could be others inside.",
    options: [
      {
        text: "It seems like I have no clue what this building is or who could be inside, so I guess I'll just let myself in and find the answers I rightly deserve.",
        nextText: 10
      },
      {
        text: "It seems as though I have no clue what could be inside could be a life-threatening trap. The only way to find out is if I let myself in.",
        nextText: 10
      },
    ]
  },
  {
    id: 10,
    text: `You step inside, and it seems we've arrived at a bar. We approach the bar to sit down. The bartender turns around, and as he's cleaning a glass, he turns to ask: "what'll it be today for you?"`,
    options: [
      {
        text: "I'll have a glass of water.",
        nextText: 10
      },
      {
        text: "Let me get 12 shots of the strongest stuff you have",
        nextText: 50.2
      },
    ]
  },
  {
    id: 50.1,
    text: "You realize you've immediately gotten alcohol poisoning from the contents in the flask as your body shuts down, and you fall face-first into the stream.",
    options: [
      {
        text: "You Lose. Restart.",
        nextText: 1
      },
    ]
  },
  {
    id: 50.2,
    text: "As everything begins to get fuzzy and you leave it up to the bar staff and ongoers to decide how they're going to get rid of you once you collapse after taking one too many drinks you realize you have failed yourself and everyone around you by falling to the temptations of liquor once again. ",
    options: [
      {
        text: "You Lose. Restart",
        nextText: 1
      },
    ]
  },

]

startGame()



// requiredState: (currentState) => currentState.orangeJuice,