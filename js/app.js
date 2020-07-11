// console.log('Sanity Check')


// /* Part 2 Code Here */
// Game object
// Initialize the game object with all of its necessary attributes
let game = {
    playerScore: 2,
    CPUScore: 0,
    deck: [],
}


// // // Get Cards Method
// Create the getCards() function to parse the card images from /images into the deck array. 
// For each img element, set attribute src to ./images/card#.png , and set attribute value to #

  getCards: function () {
      for(let i = 2; i <=14; i++)
       const card = {
          element: "img",
          src: './images/card' + i +'.png',
          value: i
       }
       this.deck.push(card)
  }


// // Shuffle Method
//Create a shuffle() function to shuffle the deck
// --Fisher Yates---
function shuffel() {
    let i = 0,
        j = o,
        temp = 0
    for(i = this.deck.length -1; i>0; i--)
    j = Math.floor(Math.random()*(i+1))
    temp = this.deck[i]
    this.deck[j] = temp    

}

// // Deal Method
//Create the deal() function to deal out cards to the Player and the Computer. 
//Add an event listener to the dealButton from Part 1, and connect this game method to that button element.
//Hint: Use the array method shift() to remove a card from the game deck. Make sure the deck has enough cards to deal!

deal: function () {

}



// // Check Scores Method
//Create function to check and update the player score

// Hint: you will use the getAttribute('value') method to get the card value. Make sure to use parseInt(), 
// because the values are currently strings, we need to compare them as numbers.

checkScore: function() {
    
}




/* Part 1 Code Here */
// Create container element
let container = document.createElement('div');

// Append to DOM
document.body.appendChild(container)

// Create card elements
let playerCard = document.createElement('img');
playerCard.setAttribute('class','playerCard');
playerCard.setAttribute('src','./images/back.png');

let cpuCard = document.createElement('img');
cpuCard.setAttribute('class','cpuCard');
cpuCard.setAttribute('src','./images/back.png');

// Append to Container
container.appendChild(playerCard);
container.appendChild(cpuCard);

// Create Score Container
let scoreContainer = document.createElement('div');
scoreContainer.setAttribute('class','scoreContainer')
document.body.appendChild(scoreContainer);

// Create Player Score
let playerScore = document.createElement('div');
playerScore.setAttribute('class','playerScore');
playerScore.innerHTML="Player: 0";
scoreContainer.appendChild(playerScore);

// Create Computer score
let cpuScore = document.createElement('div');
cpuScore.setAttribute('class','cpuScore');
cpuScore.innerHTML="Computer: 0";
scoreContainer.appendChild(cpuScore);

// Create Deal Button
let dealButton = document.createElement('button');
dealButton.setAttribute("class", "dealButton");
document.body.appendChild(dealButton);
dealButton.addEventListener('click', function (dealButton);

