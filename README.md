# High-Card

![Final Result](final-result.png)

## Instructions
Create a browser-based card game where a player plays cards against a computer.  

### User Stories/game logic

- The player should be able to draw a card from their hand and then it should be displayed against a computer's card.

- The highest card Wins and they get a point. So the User and Comp should have their scores displayed and updated each turn.

- The game should be at least 13 cards with values from 2 to 14 (refer to /images).

- Make sure the cards come out in a different order each time you play the game.


### Setup 

- Check that your index.html and your .js and .css files are all linked up. If you did this correctly, you should see a green background with the logo War!! when you open the index.html in your browser.


### Part 1: Programatically create game elements
 -Create a `div` with the class of `container` to contain all of the parts of the game.

 ```
// Create container element
let container = document.createElement('div');

container.setAttribute('class', 'container');

// Append to DOM
document.body.appendChild(container)
 ```

 -Create two `img` tags that will show the player card, and the computer card. Set the class attribute to `playerCard` and `cpuCard`, append the card elements to the `container`:

```
// Create card elements
let playerCard = document.createElement('img');
playerCard.setAttribute('class','playerCard');
playerCard.setAttribute('src','./images/back.png');

// Append playerCard to Container
container.appendChild(playerCard);

// Do the same for cpuCard
```

 -Add a `div` with class `scoreContainer` and append to the document body:

 ```
// Create Score Container
let scoreContainer = document.createElement('div');
scoreContainer.setAttribute('class','scoreContainer')
document.body.appendChild(scoreContainer);
 ```

 -Add two new `div` elements of class `playerScore` and `cpuScore`. Set the `innerHTML` to "Player: 0" and "CPU: 0"

```
 // Create Player Score
let playerScore = document.createElement('div');
playerScore.setAttribute('class','playerScore');
playerScore.innerHTML="Player: 0";
scoreContainer.appendChild(playerScore);

// Do the same for cpuScore
```

 -Add a `button` with class `dealButton`, append to the document body:

 ```
// Create Deal Button
let dealButton = document.createElement('button');
dealButton.setAttribute("class", "dealButton");
document.body.appendChild(dealButton);
 ```

 If you followed all the prior steps correctly, you should get something that looks like this:
 
 ![Initial Result](initial-result.png)

 If you got this result, you're good to start adding the game functionality. Refer to the next steps to add functionality to your game!

### Part 2: The Game Object and its methods

-Initialize the `game` object with all of its necessary attributes

``` 
let game = {

    // Player Score
    playerScore: 0,
    
    // CPU Score
    CPUScore: 0,
    
    // Card Deck
    deck: [],
}
```
-Create the `getCards()` function to parse the card images from `/images` into the `deck` array. For each `img` element, set attribute `src` to `./images/card#.png` , and set attribute `value` to `#`

```
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
```


-Create a `shuffle()` function to shuffle the `deck` randomly

```
// Shuffle Method
shuffle: function() {
    game.deck.sort(function() { return 0.5 - Math.random() });
},
```

-Create the `deal()` function to deal out cards to the Player and the Computer. Add an event listener to the `dealButton` from Part 1, and connect this game method to that button element.

<em>Hint: Use the array method `shift()` to remove a card from the game `deck`. Make sure the deck has enough cards to deal!</em>

```
// Deal Method
deal: function() {
    // Check if deck is empty, reshuffle deck
    if (game.deck.length <= 2) {
        game.getCards();
        game.shuffle();
    }

    // Get new card from deck
    let newPlayerCard = game.deck.shift();

    // Replace old card with new card
    let playerCard = document.querySelector('.playerCard')
    newPlayerCard.setAttribute('class', 'playerCard');
    playerCard.parentElement.replaceChild(newPlayerCard, playerCard);

    // do the same for cpuCard
    let computerCard = document.querySelector('.cpuCard')
    let newCPUCard = game.deck.shift();
    newCPUCard.setAttribute('class', 'cpuCard');
    computerCard.parentElement.replaceChild(newCPUCard, computerCard);

    // check score
    game.checkScore();
},
```

-Create function to check and update the player score

<em>Hint: you will use the `getAttribute('value')` method to get the card value. Make sure to use `parseInt()`, because the values are currently strings, we need to compare them as numbers.</em>
```
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
        score.innerHTML="CPU: " + game.CPUScore;
    }
}
```