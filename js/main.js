
$(document).ready(function () {

    const spaces = [];
    const drawIndexes = [];
    const choiceO = "O";
    const choiceX = "X";
    let currentPlayer = choiceO;
    let gameWon = false;


  const $boxes = $('#box').toArray();

// This Function switches players after each click. Starting player is 'O'
  const switchPlayer = function () {
    currentPlayer = currentPlayer === choiceO ? choiceX : choiceO;
  };

  const winningSequences = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [6, 4, 2],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
  ]


  const checkForWinner = function () {

      for(let i = 0; i < winningSequences.length; i++){

        const currentArray = winningSequences[i];

        const currentSpace = spaces[currentArray[0]] + spaces[currentArray[1]] + spaces[currentArray[2]];

        const result = currentSpace.toString();

        if (result === 'XXX') {
            $('#player-x').html('Player X has Won!');
            gameWon = true;
    }
        if (result === 'OOO'){
            $('#player-o').html('Player O has Won!');
            gameWon = true;
    }
  }
};

// h1 heading to fun text
  $('h1').funText(35, 'candy');

// This function Checks for a Draw in the game.
  const checkForDraw = function () {

    if (drawIndexes.length === 9 && gameWon === false){
        $('#drawn').html('This game is a draw!');

    }
  }

// This Function links to the refresh
  $('#btn1').on('click', function () {
    location.reload();
  })

// This Function listens for click events on the board.
  $('.box').on('click', function (e) {
    
      const id = e.target.id.slice(4);

      drawIndexes.push(id)
      spaces[id] = currentPlayer;

      $(this).html(currentPlayer).addClass('x');
      switchPlayer();
      checkForWinner();
      checkForDraw();
      $(this).off();
    })
  });
