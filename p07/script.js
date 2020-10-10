// Grab DOM elements from HTML
const word = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const message = document.getElementById('win-lose');
const restartButton = document.getElementById('restart');
const notification = document.getElementById('slider-container');

const hangmanParts = document.querySelectorAll('.hangman-part');
// An aray 
const wordPool = ['javascript','computer','facebook','hangman','youTube'];

let selectedword = wordPool[Math.floor(Math.random()* wordPool.length)];
// Arrays to classify
const correctletters = [];
const incorrectletters = [];
//funcation to display the word
function displaySelectedWord (){

    word.innerHTML = `
        ${selectedword 
        .split('')
        .map(
            letter => `
                <span class ="letter">
                ${correctletters.includes(letter) ? letter : ''}
                </span>
            `
        )
        .join('')
        }
    `;
    const WordText = word.innerText.replace(/\n/g, '');
    if( WordText === selectedword ) {
        message.innerText = 'You won!';
        popup.style.display = 'flex';

    }
};
// Function to display the slidng notification
function shownotification(){
    notification.classList.add('show');
    setTimeout(()=>{ notification.classList.remove('show');},3000);
   
}

//Function to Update Incorrect Letters
function updateWrongLetters(){
    //Update the Display for Wrong Letters
    wrongLetters.innerHTML = `
        ${incorrectletters.length > 0 ? `<p>Wrong</p>` : ''}
        ${incorrectletters.map( letter => `<span>${letter}</span>`)}
        
    `;
    //Display Hangman Parts on incorrect Letters
        hangmanParts.forEach( ( part, index) => {
        const errors = incorrectletters.length;
    
        if( index < errors ) { 
        part.style.display = 'block';
      } else {
          part.style.display = 'none';
      }
    
    });
    //Show popup if lost
    if(incorrectletters.length === hangmanParts.length){
        message.innerText = 'You Lost!';
        popup.style.display = 'flex';
    } 
}

//Event Handlers
//1. Event handler for keybord
window.addEventListener('keydown', e => {
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;
        if(selectedword.includes(letter) ) {
            if(!correctletters.includes(letter)){
                correctletters.push(letter);
                displaySelectedWord();

            }else {
                shownotification();
            }

        }else {
            if(!incorrectletters.includes(letter) ) {
                incorrectletters.push(letter);
                updateWrongLetters();
            }else{
                shownotification();
            }
        }

    }

})

//2/ Event listener for restart button
restartButton.addEventListener('click', () => {
        // Empty arrays
        correctletters.splice(0);
        incorrectletters.splice(0);

        // Get a new selected word form the pool
         selectedword = wordPool[Math.floor(Math.random()* wordPool.length)];
        
        displaySelectedWord();

        //Clear the Wrong Letters Div
         updateWrongLetters();
        
         // Hide the popup
         popup.style.display = 'none';
})








displaySelectedWord();