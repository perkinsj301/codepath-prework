//Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const maxStrikes = 3; //strikes before game is over

// Global Variables
var clueHoldTime = 1000;
var minButton = 1;
var maxButton = 4;
var pattern = [0, 0, 0, 0, 0, 0, 0, 0];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var strikeCount = 0;

function playClueSequence(){
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  clueHoldTime = 1000 - progress * 100; //decrease clue hold time every turn to increase difficulty
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function startGame(){
  // initialize game variables
  progress = 0;
  strikeCount = 0;
  clueHoldTime = 1000;
  
  //randomize pattern
  for(let i=0;i<pattern.length;i++){
    pattern[i] = 0; //reset pattern to zero before adding random number
    
    //randomize array element i
    pattern[i] += Math.floor(Math.random() * ( Math.floor(maxButton) -  Math.ceil(minButton) + 1) +  Math.ceil(minButton));
  }
  gamePlaying = true;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence()

}

function stopGame(){
  // update status
  gamePlaying = false;
  
  // swap stop and start buttons back to original state
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("Button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("Button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function strike(){
  strikeCount++;
  if(strikeCount != maxStrikes){ //give strike message if game is not over
    alert("Wrong choice! Strike " + strikeCount);
  }
}


function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){ //player is done inputting guesses for the turn
      if (pattern.length - 1 == progress){ //game was won
        winGame();
    }
      else{ //pattern was correct, start next turn
        progress++;
        playClueSequence();
      }
    }
    else{ //turn is not over
      guessCounter++;
    }
  }
  else{ // guess was wrong
    //strike
    strike();
    if (strikeCount == maxStrikes){ //player loses
      loseGame();
    }
    else {//increment strike counter and restart turn
     playClueSequence(); 
    }
  }

  
  // add game logic here
}

function loseGame(){
  stopGame();
  alert("Strike " + maxStrikes + ". You lost.");
}

function winGame(){
  stopGame();
  alert("You Won, High Five!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 440,
  2: 329.63,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


