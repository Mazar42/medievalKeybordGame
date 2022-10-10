// get button from DOM
startButton = document.getElementById('start')

let words = ["plume", "grimoir", "pierre", "dragon", "bouclier", "corbeau", "tour", "chevalier"]
let selectedWord = ""
let secretBoxes = document.getElementsByClassName('secret-word')
let displayedTimer = document.getElementById('time')
let sumbitButton = document.getElementById('submit-answer')
let playersanswer = ""



function start() {

    // start timer
    const timer = () => {
        if (displayedTimer.innerHTML == 120) {
            var sec = 120
            var timer = setInterval(function () {
                displayedTimer.innerHTML = sec
                sec--
                if (sec < 0) {
                    clearInterval(timer) // Change that line to end the game at the end of the timer (will need a new function or a variable gameOn set to False when timer ends)
                }
            }, 1000)
        }
    }
    timer()

    // check if boxes are empty
    let allBoxesEmpty = true

    for (box of secretBoxes) {
        if (box.innerHTML != "") {
            allBoxesEmpty = false
        }
    }

    if (allBoxesEmpty) {

        //Choose a random word from a "words" list
        let wordNumber = Math.floor(Math.random() * (words.length))
        let selectedWord = words[wordNumber]

        // Select a random location on the interface in which the word will appear
        let wordLocation = Math.floor(Math.random() * (secretBoxes.length))
        let selectedLocation = secretBoxes[wordLocation]

        // Insert selected word in selected location
        selectedLocation.innerHTML += selectedWord

        function getInputValue() {
            // Selecting the input element and get its value 
        let playersanswer = document.getElementById("inputId").value;
            // Displaying the value
           if(playersanswer == selectedWord){
            console.log('bien joué frérot')
           }
           else{
            console.log("ben non t'es nul là frérot")
           }
          }

        sumbitButton.addEventListener('click', () => {
            getInputValue()
        })
    }

    else {
        alert('Une partie est déjà en cours !')
    }
    
}

// start game when player hits button

startButton.addEventListener("click", () => {
    start()
})