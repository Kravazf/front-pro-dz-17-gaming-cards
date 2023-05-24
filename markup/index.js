cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
cardSuits = ["clubs", "spades", "diamonds", "hearts"];

gamingCards = [];


for (let i = 0; i < cardValues.length; i++) {
  for (let j = 0; j < cardSuits.length; j++) {
    value = cardValues[i];
    suit = cardSuits[j];
    
    if (!isNaN(value)) {
    card = (`<div class = "card">
      <div class="card__info">${value}
        <img src="images/${suit}.svg" alt="${suit}">
      </div>
      <div class="card__info">${value}
        <img src="images/${suit}.svg" alt="${suit}">
      </div>
    </div>`);
      } else {personImage = (value === 'J') ? 'jack' : (value === 'Q') ? 'queen' : (value === 'K') ? 'king' : suit;
        card = (`<div class = "card card--person">
        <div class="card__info">${value}
          <img class="card__info" src="images/${suit}.svg" alt="${suit}">
        </div>
        <img class="person" src="images/${personImage}.svg" alt="${personImage}">
        <div class="card__info">${value}
          <img class="card__info" src="images/${suit}.svg" alt="${suit}">
        </div>
      </div>`);
      }

  gamingCards.push(card);
  }
}

document.write(`<div class = "wrapper">${gamingCards.join('')}</div>
`)