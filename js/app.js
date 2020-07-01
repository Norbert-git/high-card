console.log('Sanity Check')

/* Part 2 Code Here */
// Game object
let game = {
    // Player Score
    playerScore: 0,
    // CPU Score
    CPUScore: 0,
    // Card Deck
    deck: [],
    // Get Cards Method
    getCards: function() {
        this.deck = []
        for (let i = 2; i < 15; i++) {
            let img = document.createElement('img');
            img.setAttribute("src", "./images/card" + i + ".png");
            img.setAttribute("value", i);
            this.deck.push(img);
        }
    },
    // Shuffle Method
    shuffle: function() {
        game.deck.sort(function() { return 0.5 - Math.random() });
    },
    // Deal Method
    deal: function() {
        if (game.deck.length <= 2) {
            game.getCards();
            game.shuffle();
        }
        let playerCard = document.querySelector('.playerCard')
        let newPlayerCard = game.deck.shift();
        newPlayerCard.setAttribute('class', 'playerCard');
        playerCard.parentElement.replaceChild(newPlayerCard, playerCard);

        let computerCard = document.querySelector('.cpuCard')
        let newCPUCard = game.deck.shift();
        newCPUCard.setAttribute('class', 'cpuCard');
        computerCard.parentElement.replaceChild(newCPUCard, computerCard);
        game.checkScore();
    },
    checkScore: function() {
        let playerCard = document.querySelector('.playerCard');
        let cpuCard = document.querySelector('.cpuCard');

        if (parseInt(playerCard.getAttribute('value')) > parseInt(cpuCard.getAttribute('value'))) {
            game.playerScore++;
            let score = document.querySelector('.playerScore');
            score.innerHTML="Player: " + game.playerScore;
        }
        else {
            game.CPUScore++;
            let score = document.querySelector('.cpuScore');
            score.innerHTML="Computer: " + game.CPUScore;
        }
    }
}

/* Part 1 Code Here */
// Create container element
let container = document.createElement('div');
container.setAttribute("class", "container");
// Append to DOM
document.body.appendChild(container)

// Create card elements
let playerCard = document.createElement('img');
playerCard.setAttribute("class","playerCard");
playerCard.setAttribute("src","./images/back.png");

let computerCard = document.createElement('img');
computerCard.setAttribute("class","cpuCard");
computerCard.setAttribute("src","./images/back.png");

// Append to Container
container.appendChild(playerCard);
container.appendChild(computerCard);

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
let computerScore = document.createElement('div');
computerScore.setAttribute('class','cpuScore');
computerScore.innerHTML="Computer: 0";
scoreContainer.appendChild(computerScore);

// Create Deal Button
let dealButton = document.createElement('button');
dealButton.setAttribute("class", "dealButton");
document.body.appendChild(dealButton);
dealButton.addEventListener("click", game.deal);

game.getCards();
game.shuffle();