//FUNCTIONS

//Makes move, returns new board outcome
function makeMove(column, player, board){
    for(let i = 0; i < board[column].length; i++){
        if(board[column][i] === 0){
            board[column][i] = player
            break
        }
    }
    console.log(board)
    return board;
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


//Checks board to see if player has won
function hasPlayerWon(board, player, i, j, dir, streak){
    if(streak >= 4) return true
    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== player){
       return false 
    }
    return hasPlayerWon(board, player, i + dir[0], j + dir[1], dir, streak + 1 )

}

//Checks to see if there is a possible win outcome on board
function decideWinner(board){
    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, -1]
    ]
    const count = 1
    let winningPlayer = 0
    for(let row = 0; row < board[0].length; row++){
        for(let column = 0; column < board.length; column++){
            if(board[column][row] !== 0){
                for(let i = 0; i < directions.length; i++){
                    const winner = hasPlayerWon(board, board[column][row], row + directions[i][0], column + directions[i][1], directions[i], count)
                    if(winner){
                        console.log("\n\nwinner winner chicken dinner\n\n")
                        console.log(`column = ${column} row = ${row}`)
                        printBoard(board)
                        return board[column][row]
                        //clean up which team is winner
                    }
                }
            }
        }
    }

    return winningPlayer
}


//Sets AI Difficulty
function setDifficulty(num, difficulty){

}

function setPlayers(num){

}

function startGame(){
    let board = initBoard()
    let currentMove = 1
    while(emptySpaces(board) > 0 && decideWinner(board) === 0){
        //Get User Input
        console.log(`It is currently Player ${currentMove}'s Turn, Please enter your move:`)
        //call makeMove(input, currentMove, board)

        printBoard(board)

        
        if(currentMove = 1) currentMove = 2
        else currentMove = 1
    }
    let winner = decideWinner(board)
    if(winner === 0) console.log("DRAW")
    else if(winner === 1) console.log("Player 1 wins")
    else console.log("Player 2 wins")

}

function printBoard(board){
    let buffer = ""
    for(let i = board[0].length - 1; i >= 0; i--){
        for(let j = 0; j < board.length; j++) buffer += board[j][i]
        console.log(buffer)
        buffer = ""
    }
}

function emptySpaces(board){
    let count = 0
    for(let i = 0; i < board.length; i++)
        for(let j = 0; j < board[i].length; j++)
            if(board[i][j] !== 0)
                count += 1
    return count
}

function initBoard(){
//Board Init
//Origin is in bottom left
//x axis first array y axis 2nd
    let board = new Array(7)
    for(let i = 0; i < board.length; i++){
        board[i] = new Array(6)
        for(let j = 0; j < 6; j++) board[i][j] = 0
    }
    return board
}


//Execution Code

let foo = initBoard()
foo = makeMove(0,1,foo)
foo = makeMove(0,2,foo)
foo = makeMove(0,1,foo)
foo = makeMove(0,2,foo)
//foo = makeMove(0,1,foo)
foo = makeMove(1,2,foo)
foo = makeMove(1,1,foo)
foo = makeMove(1,1,foo)
foo = makeMove(1,1,foo)
foo = makeMove(2,1,foo)
foo = makeMove(2,1,foo)
foo = makeMove(2,1,foo)
foo = makeMove(3,1,foo)
foo = makeMove(3,1,foo)
foo = makeMove(4,1,foo)
foo = makeMove(4,1,foo)

printBoard(foo)
console.log(decideWinner(foo))