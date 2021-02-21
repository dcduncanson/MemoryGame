const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

let firstCard;
let secondCard;
let revealedCards = 0;
let clickable = true;
let cardPairs = COLORS.length / 2;
let cardMatches = 0;


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  if (clickable !== true) {
    return;
  }

  event.target.style.backgroundColor = event.target.classList;
  revealedCards++;

  if (revealedCards === 1) {
    firstCard = event.target;
    return;
  } else if (revealedCards === 2) {
    clickable = false;
    secondCard = event.target;
    if (firstCard === secondCard) {
      secondCard = null;
      revealedCards--;
      clickable = true;
      return;
    } else {
      clickable = false;
      if (firstCard.className === secondCard.className) {
        firstCard.removeEventListener;
        secondCard.removeEventListener;
        firstCard = secondCard = null;
        revealedCards = 0;
        cardMatches++;
        clickable = true;
      } else {
        setTimeout(function () {
          firstCard.style.backgroundColor = secondCard.style.backgroundColor = null;
          firstCard = secondCard = null;
          revealedCards = 0;
          clickable = true;
        }, 1200);
      }

    }
    return;
  } else {
    return;
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
