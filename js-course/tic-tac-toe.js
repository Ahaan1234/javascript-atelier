const gameBoard = (function() {
    const grid=[setBox(1), setBox(2), setBox(3),
                setBox(4), setBox(5), setBox(6),
                setBox(7), setBox(8), setBox(9)];

    const checkWinner = () => {
        const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8], // rows
            [0,3,6], [1,4,7], [2,5,8], // cols
            [0,4,8], [2,4,6]           // diagonals
        ];

        return winningCombos.some(combo => {
            const [a, b, c] = combo;
            return setBox(a).value !== undefined && setBox(a).value === setBox(b).value && setBox(a).value === setBox(c).value;
        });
    }
})

function setBox(coor) {
    let value;

    const setValue = (val) => value = val;

    return {coor, value};
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

*/
