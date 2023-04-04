/*-------------------------------- Constants --------------------------------*/




/*---------------------------- Variables (state) ----------------------------*/

let state = {}
let itemIcon = document.getElementById("item-icon");
let introOverlay = document.getElementById("intro-overlay");
let startButton = document.getElementById("start-button");
let gameContainer = document.getElementById("game-container");
const playButton = document.getElementById('.btn')
const startSound = document.getElementById("StartButton")
const startNoise = new Audio("../audio/startGame.mp3")
const optionSound = document.querySelector(".btn")
const optionNoise = new Audio("../audio/skill.mp3")

// const forestButton = document.getElementById("forest")
let backgroundState 


startButton.addEventListener("click", function() {
  introOverlay.style.display = "none";
  gameContainer.style.display = "block";
  startNoise.volume = .2
  startNoise.play()
})
/*------------------------ Cached Element References ------------------------*/
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
/*----------------------------- Event Listeners -----------------------------*/
/*-------------------------------- Functions --------------------------------*/
/* START GAME */
function startGame() {
state = {}
showTextNode(1)
backgroundState = document.body.style.backgroundImage = "url('../assets/XDjgmZ.png')";
// iconState = document.body.style = "url('../assets/backpackFav.ico')";
}
// document.body.style.backgroundImage = "url('../assets/XDjgmZ.png')"
// document.body.style.backgroundImage = "url('../assets/dark-forest.jpg')"
// document.body.style.backgroundImage = "url('../assets/stream-pic.png')"
// document.body.style.backgroundImage = "url('../assets/bar-pic.png')"
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
    // function showIcon(icon) {
      // }
      function selectOption(option) {
        const nextTextNodeId = option.nextText 
        if (nextTextNodeId === -1){
          startGame()
        }
        state = Object.assign(state, option.setState)
        showTextNode(nextTextNodeId)
        optionNoise.volume = .05
        optionNoise.play()
      }

// optionButtonsElement.addEventListener("click", function() {
//   if (textNodes[i].id > 4) {
//     backgroundState = document.body.style.backgroundImage = "url('../assets/dark-forest.jpg')"
//   }
// })
const textNodes = [
{
    id: 1,
    text: "You slowly begin to regain consciousness and awake from your drunken stupor. You arise from the floor, and after rubbing your eyes and squinting intensely, you immediately pat all of your pockets naturally and realize you've lost your wallet. You need to find it before it's too late. You also realize your very parch. For the moment this takes priority. What do you grab to quench your thirst?",
    options: [
      {
        text: 'Water.',
        nextText: 2,
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
    // document.body.style.backgroundImage = "url('../assets/stream-pic.png')",
    text: "Ah refreshing! Guessing you should get up, get out and see if you can retrace your steps. It Looks like your still in your clothes from yesterday. You should shower and put on something new what'll it be?",
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
      nextText: 4,
    }
    ]
  },
  {
    id: 2.2 /*FIRST TIME COMING TO STEP 2*/,
    text: "Ah refreshing! You can never go wrong with some good ol' Oj. Guessing you should get up, get out and see if you can retrace your steps, although it looks like you're still in your clothes from yesterday. You should shower and put on something new what'll it be?",
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

    text: "Ahead sits a large forest cloaked in darkness. You recognize this forest. You could maybe get through, but you will need some light." ,
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
    styling: 'stream',
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
    text: "You get closer to the building and realize there is music playing from the inside, and it looks like there could be others inside. ",
    options: [
      {
        text: "My wallet could be in here. I'll go inside and check it out.",
        nextText: 10
      },
      {
        text: "My wallet is definetly in there! I'll grab it real quick and be on my way.",
        nextText: 10
      },
    ]
  },
  {
    id: 10,
    text: `You step inside, and it seems we've arrived at a bar. We approach the bar to sit down. It's all coming back to you now! The bartender turns around, notices you, and as he's cleaning his glass, stops and says: "Hey I recognize you! You left your wallet last night."`,
    options: [
      {
        text: `*Grab Wallet*`,
        nextText: 11
      },
    ]
  },
  {
    id: 11,
    text: `"Look We can't have another night like last night so take it easy today if you are thinking about drinking. What'll it be?"`,
    options: [
      {
        text: `Take his advice to heart. "You're right. I'll just have a glass of water and be on my way."`,
        nextText: 12
      },
      {
        text: "You're not my dad! Let me get 12 shots of the strongest stuff you have.",
        nextText: 50.2
      },
      {
      text: "Yeah you're right. I actually just had some orange juice this morning still working on getting rid of this hangover. I'll just take a glass of Oj. It's my favorite.",
      requiredState: (currentState) => currentState.orangeJuice,
      nextText: 60,
      }
    ]
  },
  {
    id: 12,
    text: "You have proven yourself to be very responsible and mature with this decision. Great job",
    options: [
      {
        text: "You Win! Restart.",
        nextText: -1
      },
    ]
  },
  {
    id: 50.1,
    text: "You realize you've immediately gotten alcohol poisoning from the contents in the flask as your body shuts down, and you fall face-first into the stream.",
    options: [
      {
        text: "You Lose. Restart.",
        nextText: -1
      },
    ]
  },
  {
    id: 50.2,
    text: "As everything begins to get fuzzy and you leave it up to the bar staff and ongoers to decide how they're going to get rid of you once again. Right before you collapse after taking one too many drinks you realize you have failed yourself and everyone around you by falling to the temptations of liquor once again and leaving your wallet on the bar counter. ",
    options: [
      {
        text: "You Lose. Restart",
        nextText: -1
      },
    ]
  },
{
    id: 60,
    text: "A glass of Oj. Can never go wrong.",
    options: [
      {
        text: "You Win! Restart",
        nextText: -1
      },
    ]
  },

]
startGame()