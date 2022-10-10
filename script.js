// get button from DOM
startButton = document.getElementById('start')

let words = ["plume", "grimoir", "pierre", "dragon", "bouclier", "corbeau", "tour", "chevalier"]
let secretBoxes = document.getElementsByClassName('secret-word')
let displayedTimer = document.getElementById('time')
let sumbitButton = document.getElementById('submit-answer')
let currentScore = document.getElementById('score')

function start() {
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
        selectedLocation.innerHTML = selectedWord

        console.log(selectedWord)
        
        var points = 0
        let currentScore = document.getElementById('score')
        
        function getInputValue() {
            // Selecting the input element and get its value 
        let playersanswer = document.getElementById("inputId").value;
            // Displaying the value
            console.log(selectedWord + "" + playersanswer)
           if(playersanswer == selectedWord){
            points ++
            console.log(points)
            currentScore.innerHTML = points
           }
           else{
            alert("Oups ! Ce n'est pas le bon mot... 😞")
           }
        }

        sumbitButton.addEventListener('click', () => {
            getInputValue()
        })
        
    }

    else {
        alert('Une partie est déjà en cours !')
    }

    // start timer
    const timer = () => {
        if (displayedTimer.innerHTML == 45) {
            var sec = 45
            var timer = setInterval(function () {
                displayedTimer.innerHTML = sec
                sec--
                if (sec < -1) {
                    clearInterval(timer)
                    if(!alert("Fin de la partie ! Vous avez trouvé " + points + " mot(s) !")){window.location.reload();} 
                }
            }, 1000)
        }
    }
    timer()
    
}

// start game when player hits button
startButton.addEventListener("click", () => {
    start()
})