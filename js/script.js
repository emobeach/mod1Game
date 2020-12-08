//FUNCTIONS

//Opponent move call, dependant on difficulty
function makeMove(){

}

//cleaned rng with input
function inputRandom(num){
    return Math.floor(Math.random() * num)
}

//Random Column decider
//Returns a number from 0-6 inclusive
function randomColumn(){ 
    return inputRandom(7)
}


//Ends Game
function endGame(){

}

//Decides Winner
function decideWinner(){

}
//returns board to original state
function resetBoard(){

}

//Checks board to see if player has won
function hasPlayerWon(board){

}

//Checks to see if there is a possible win outcome on board
function isWinPossible(board){

}

//Updates the board for a given move
//x = column a piece was played in
function updateBoard(board, x, team){
    
}



//Execution Code


//Board Init
//Origin is in bottom left
//x axis first array y axis 2nd
let board = new Array(7)
for(let i = 0; i < board.length; i++){
    board[i] = new Array(6)
}