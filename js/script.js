let currentPlayer = 1

//FUNCTIONS

//Makes move, returns new board outcome
function makeMove(column, player, board){
    if(board[column][board[column].length - 1] !== 0) return false
    for(let i = 0; i < board[column].length; i++){
        if(board[column][i] === 0){
            board[column][i] = player
            break
        }
    }
    return true;
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


//Checks board to see if player has won
function hasPlayerWon(board, player, i, j, dir, streak){
    if(streak >= 4) return true
    if(i < 0 || j < 0 || i >= board[0].length || j >= board.length || board[j][i] !== player){
       return false 
    }
    console.log(`Checking player ${player} at \nposition row: ${i} column: ${j} streak: ${streak}\n value at position: ${board[j][i]}`)
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
    printBoard(board)
    let currentMove = 1
    let userInput = ""
    console.log(board)
    while(emptySpaces(board) > 0 && decideWinner(board) === 0){
        //Get User Input
        //console.log(`It is currently Player ${currentMove}'s Turn, Please enter your move:`)

        //rl.question(`It is currently Player ${currentMove}'s Turn, Please enter your move:`, (input) =>{
        //    userInput=parseInt(input)
        //})



        makeMove(userInput, currentMove, board)

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
            if(board[i][j] === 0)
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

function drawCircle(ctx, player, position){
    let radius = 25
    let color = ''
    if(player === 1) color = 'red'
    else if (player === 2) color = 'blue'
    else color = 'white'
    //arc(x,y,r,start,finish)
    ctx.beginPath()
    ctx.arc(position[0], position[1], radius, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    ctx.stroke()
}

function swapPlayer(player){
    if(player === 1) return 2
    return 1
}

function drawBoard(board){
    const canvas = document.getElementById('board')
    //console.log(canvas)
    //console.log(`height = ${canvas.height} width = ${canvas.width}`)
    let ctx = canvas.getContext('2d')
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            //console.log(`drawing circle at ${[(i+1) * 50, canvas.width - (j+1) * 50]}`)
            //console.log(`canvas width = ${canvas.width} j = ${j}`)
            drawCircle(ctx, board[i][j], [(i+1) * 50, canvas.height - ((j+1) * 50)])
        }
    }
}
function selectColumn(column){
    if(makeMove(column, currentPlayer, board)) currentPlayer = swapPlayer(currentPlayer)
    else{
        //Notify user of invalid column selection
    }
    drawBoard(board)
    printBoard(board)
    const winner = decideWinner(board)
    console.log(`winner = ${winner}`)
    if(winner === 1) console.log(`player 1 wins`)
    else if(winner === 2) console.log(`player 2 wins`)
}


//Execution Code
console.log("lewllllll")
let board = initBoard()
$(document).ready(() =>{

    drawBoard(board)
    printBoard(board)
})
$('#column0').click(()=>{
     selectColumn(0)
})
$('#column1').click(()=>{
    selectColumn(1)
})
$('#column2').click(()=>{
    selectColumn(2)
})
$('#column3').click(()=>{
    selectColumn(3)
})
$('#column4').click(()=>{
    selectColumn(4)
})
$('#column5').click(()=>{
    selectColumn(5)
})
$('#column6').click(()=>{
    selectColumn(6)
})

//askQuestion("test")

//drawBoard(initBoard())
/*let foo = initBoard()
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
console.log(decideWinner(foo))*/