// const container = document.getElementsByClassName("container")

// const square = document.createElement("div");
// square.classList.add("box");

// square.textContent = "box";

// function Box(coor) {
//     let value;
//     const setValue = (val) => value = val;
//     container.append(square);
//     return {coor, value};
// }

// const gameBoard = (function() {
//     const grid=[Box(0), Box(1), Box(2),
//                 Box(3), Box(4), Box(5),
//                 Box(6), Box(7), Box(8)];

//     const checkWinner = () => {
//         const winningCombos = [
//             [0,1,2], [3,4,5], [6,7,8], // rows
//             [0,3,6], [1,4,7], [2,5,8], // cols
//             [0,4,8], [2,4,6]           // diagonals
//         ];

//         return winningCombos.some(combo => {
//             const [a, b, c] = combo;
//             return Box(a).value !== undefined && Box(a).value === Box(b).value && Box(a).value === Box(c).value;
//         });
//     }
// });

let board = Array(9).fill(null);
let gameOn;
function gameLoop() {
    index = 0;
    while(!winnerExists()){
        let coord = prompt("enter grid number: ");
        if(index % 2 === 0){
            board[coord] = "X";
            index++;
        } else {
            board[coord] = "O";
            index++;
        }
    }
}

function winnerExists() {
    const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8], // rows
            [0,3,6], [1,4,7], [2,5,8], // cols
            [0,4,8], [2,4,6]           // diagonals
        ];

        return winningCombos.some(combo => {
            const [a, b, c] = combo;
            return Box(a).value !== undefined && Box(a).value === Box(b).value && Box(a).value === Box(c).value;
        });
}

/*
PLAN:
Grid = [Box, Box, Box,
        Box, Box, Box,
        Box, Box, Box]

        update -> if (boxes along column or row or diagonals have same value) - set Player Winner = True; Popup with "winner"

Player  winner = True / False
        method setBox -> checks if box already has value;
                        if it doesnt: changes "value" of box to 1 or 2 ; calls update method
                        else does nothing

Box  coor => returns {coor, value=(X or O)}
*/
