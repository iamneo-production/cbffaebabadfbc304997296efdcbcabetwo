// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let res= document.querySelector('#reset');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    console.log(0);
    // Your game logic here
    if (cells[index] || !cells.includes('')) return;

    cells[index] = currentPlayer;
    element.value = currentPlayer;

    for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            // Update the result message to display the winner
            result.textContent = `Player ${currentPlayer} wins!`;

            // Disable all buttons since the game is over
            btns.forEach((btn) => btn.setAttribute('disabled', true));
            return;
        }
    }
    if (!cells.includes('')) {
        result.textContent = "It's a draw!";
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    result.textContent = `Current player: ${currentPlayer}`;
    
};

// Function to reset the game
const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';

    // Clear the result message
    result.textContent = "Current player: X";

    // Re-enable all buttons
    btns.forEach((btn) => {
        btn.removeAttribute('disabled');
        btn.value = ''; // Clear the cell display
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);
