// get elements from DOM
let startButton = document.getElementById('start')
let secretBoxes = document.getElementsByClassName('secret-word')
let displayedTimer = document.getElementById('time')
let sumbitButton = document.getElementById('submit-answer')
let currentScore = document.getElementById('score')
let highScore = localStorage.getItem('highScore')
let highScoreDisplay = document.getElementById('high-score')  
let selectedWord
let selectedLocation

console.log(highScore);
if(highScore != null){
    highScoreDisplay.innerHTML = highScore
}

// function to write a new word on parchment
const writeWord = () => {
    //Choose a random word from a "words" list
    let wordNumber = Math.floor(Math.random() * (words.length))
    selectedWord = words[wordNumber]

    // Select a random location in which the word will appear
    let wordLocation = Math.floor(Math.random() * (secretBoxes.length))
    selectedLocation = secretBoxes[wordLocation]

    // Insert selected word in selected location
    selectedLocation.innerHTML = selectedWord

    }

// function to delete a word from parchment

const deleteCurrentWord = () =>{
    let userField = document.getElementById("inputId")
    selectedLocation.innerHTML = ""
    userField.value = ""
}

//create a words list
let words = ["plume", "krak", "lige", "épée", "fort", "herse", "tour", "douve", "sir", "pique", "bourg", "cire", "sceau", "écu", "joute", "graal", "roi"]

function start() {

     // check if boxes are empty
     let allBoxesEmpty = true
     for (box of secretBoxes) {
         if (box.innerHTML != "") {
             allBoxesEmpty = false
         }
     }

     // start timer
     const timer = () => {
        if (displayedTimer.innerHTML == 120) {
            var sec = 120
            var timer = setInterval(function () {
                displayedTimer.innerHTML = sec
                sec--
                if (sec < -1) {
                    clearInterval(timer)
                    if(highScore < points || highScore == null){console.log(localStorage.setItem('highScore', points))}
                    if(!alert("Fin de la partie ! Vous avez trouvé " + points + " mot(s) !")){window.location.reload();} 
                }
            }, 1000)
        }
    }
    timer()

    if (allBoxesEmpty) {

        writeWord()

        var points = 0
        let currentScore = document.getElementById('score')

        function getInputValue() {
            // Selecting the input element and get its value 
        let playersAnswer = document.getElementById("inputId").value
            // add points if answer is correct
           if(playersAnswer == selectedWord){
            points ++
            currentScore.innerHTML = points
            deleteCurrentWord()
            writeWord()
           }
           else{
            alert("Oups ! Ce n'est pas le bon mot... 😞")
           }
        }

        sumbitButton.addEventListener('click', () => {
            getInputValue()
        })
    } 

    else{
       alert('Une partie est déjà en cours !')  
    }
}

// start game when player hits button
startButton.addEventListener("click", () => {
    start()
})