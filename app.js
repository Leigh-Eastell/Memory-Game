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

  const grid = document.querySelector(".grid");

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.jpg.png");
      card.setAttribute("data-id", i);
      // card.addEventListener('click', flipCard)
      grid.appendChild(card);
    }
  }

  createBoard();
});
