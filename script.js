// get button from DOM
startButton = document.getElementById('start')

//Choose a random word from a "words" list when player hits button

const start = ()=>{
let words = ["plume", "grimoir", "pierre", "dragon", "bouclier", "corbeau", "tour", "chevalier"]
let wordNumber = Math.floor(Math.random()*(words.length))
let selectedWord = words[wordNumber]
console.log(selectedWord)

// Select a random location on the interface in which the word will appear
const selectDiv = ()=>{
    let secretBoxes = document.getElementsByClassName('secret-word')
let wordLocation = Math.floor(Math.random()*(secretBoxes.length))
let selectedLocation = secretBoxes[wordLocation]

console.log(selectedLocation)

selectedLocation.innerHTML += `selectedWord`
}
startButton.addEventListener("click", () => {
    start()
})


// TODO : set timer / unite functions