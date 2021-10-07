
$(document).ready(function () {

  const spaces = [];
  const drawIndexes = [];
  const choiceO = "O";
  const choiceX = "X";
  let currentPlayer = choiceO;
  let gameWon = false;


const $boxes = $('#box').toArray();

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

$('h1').funText(35, 'candy');

const checkForDraw = function () {
  if (drawIndexes.length === 9 && gameWon === false){
    $('#drawn').html('This game is a draw!');
    refreshPage();
  }
  }
  $('#btn1').on('click', function () {
    location.reload();
  })

const refreshPage = function () {
  $('#btn1').on('click', function () {
    location.reload();
})
}

$('#box-0').on('click', function (e) {
  const id = e.target.id.slice(4);
  spaces[id] = currentPlayer;
  console.log(spaces)
  drawIndexes.push(id)
  $('#box-0').html(currentPlayer).addClass('x');

  switchPlayer();
  checkForWinner();
  checkForDraw();
  $('#box-0').off();
});

//--------------------------------------------------------

$('#box-1').on('click', function (e) {
  const id = e.target.id.slice(4);
  console.log(id)
  spaces[id] = currentPlayer;
  drawIndexes.push(id)
  $('#box-1').html(currentPlayer).addClass('x');

  switchPlayer();
  checkForWinner();
 checkForDraw();
 $('#box-1').off();
});

//--------------------------------------------------------


$('#box-2').on('click', function (e) {
  const id = e.target.id.slice(4);
  drawIndexes.push(id)
  spaces[id] = currentPlayer;
  console.log(spaces)
  $('#box-2').html(currentPlayer).addClass('x');

  switchPlayer();
  checkForWinner();
  checkForDraw();
  $('#box-2').off();
})

//--------------------------------------------------------


$('#box-3').on('click', function (e) {
  const id = e.target.id.slice(4);
  spaces[id] = currentPlayer;
  drawIndexes.push(id)
  $('#box-3').html(currentPlayer).addClass('x');

  switchPlayer();
  checkForWinner();
  checkForDraw();
  $('#box-3').off();
})

//--------------------------------------------------------


$('#box-4').on('click', function (e) {
  const id = e.target.id.slice(4);
  drawIndexes.push(id)
  spaces[id] = currentPlayer;
  $('#box-4').html(currentPlayer).addClass('x');

  switchPlayer();
  checkForWinner();
  checkForDraw();
  $('#box-4').off();
})

//--------------------------------------------------------


$('#box-5').on('click', function (e) {
  const id = e.target.id.slice(4);
  drawIndexes.push(id)
  spaces[id] = currentPlayer;
  $('#box-5').html(currentPlayer).addClass('x');

  switchPlayer();
  checkForWinner();
  checkForDraw();
  $('#box-5').off();
})

//--------------------------------------------------------

$('#box-6').on('click', function (e) {
  const id = e.target.id.slice(4);
  spaces[id] = currentPlayer;
  drawIndexes.push(id)

  $('#box-6').html(currentPlayer).addClass('x');

  switchPlayer();
  checkForWinner();
  checkForDraw();
  $('#box-6').off();
})

//--------------------------------------------------------

$('#box-7').on('click', function (e) {
  const id = e.target.id.slice(4);
  spaces[id] = currentPlayer
  drawIndexes.push(id)
  $('#box-7').html(currentPlayer).addClass('x');

  switchPlayer();
  checkForWinner();
  checkForDraw();
  $('#box-7').off();
})

//--------------------------------------------------------

$('#box-8').on('click', function (e) {
  const id = e.target.id.slice(4);
  drawIndexes.push(id)
  spaces[id] = currentPlayer;
  $('#box-8').html(currentPlayer).addClass('x');

  switchPlayer();
  checkForWinner();
  checkForDraw();
  $('#box-8').off();
})





// $('box').on('click', function (e) {
//   const id = e.target.id.slice(4);
//   drawIndexes.push(id)
//   spaces[id] = currentPlayer;
//   $('box').html(currentPlayer).addClass('x');
//
//   switchPlayer();
//   checkForWinner();
//   checkForDraw();
//   // $('box').off();
// })





















});
