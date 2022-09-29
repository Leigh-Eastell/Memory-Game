document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "captain price",
      img: "images/captain price.jpg",
    },
    {
      name: "captain price",
      img: "images/captain price.jpg",
    },
    {
      name: "fortnite",
      img: "images/fortnite.jpg",
    },
    {
      name: "fortnite",
      img: "images/fortnite.jpg",
    },
    {
      name: "GOW",
      img: "images/GOW.jpg",
    },
    {
      name: "GOW",
      img: "images/GOW.jpg",
    },
    {
      name: "mastechief",
      img: "images/masterchief.jpg",
    },
    {
      name: "mastechief",
      img: "images/masterchief.jpg",
    },
    {
      name: "minecraft",
      img: "images/minecraft",
    },
    {
      name: "minecraft",
      img: "images/minecraft",
    },
    {
      name: "rocket league",
      img: "images/rocket league.jpg",
    },
    {
      name: "rocket league",
      img: "images/rocket league.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.jpg");
      cards[optionTwoId].setAttribute("src", "images/blank.jpg");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  // flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
