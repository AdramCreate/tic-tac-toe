const Player = (name, marker) => {
    let wins = 0;

    const increaseWins = () => {
        wins++;
    };

    return { name, marker, increaseWins };
};

const gameBoard = (() => {
    let board = [
        ['O', 'X', 'X'],
        ['X', 'O', 'O'],
        ['X', 'O', 'O'],
    ];

    const getBoard = () => {
        return board;
    };

    const checkForWinner = () => {};

    return {
        getBoard,
    };
})();

const displayController = ((document) => {
    const rootElement = document.getElementById('root');
    const players = [Player('Bob', 'X'), Player('Jim', 'O')];
    let currentPlayer = 'Bob';

    //TODO: Probably dont need this; too verbose
    const getCurrentPlayerMarker = () => {
        const playerFound = players.find(
            (player) => player.name === currentPlayer
        );

        return playerFound.marker;
    };

    const outputBoard = () => {
        // TODO: Make as seperate function
        gameBoard.getBoard().forEach((row) => {
            const newRowElement = document.createElement('div');
            newRowElement.classList.add('gameboard-row');
            row.forEach((element) => {
                // TODO: Make as seperate function
                const newSpaceElement = document.createElement('div');

                newSpaceElement.innerHTML = element;
                newSpaceElement.classList.add('gameboard-space');
                newSpaceElement.addEventListener('click', (e) => {
                    //TODO: make as seperate function
                    const element = e.target;

                    if (!element.dataset.hasOwnProperty('isSelected')) {
                        console.log(`${element} is selected`);
                        element.innerHTML = getCurrentPlayerMarker();
                        element.setAttribute('data-is-selected', '');
                    }
                });
                newRowElement.appendChild(newSpaceElement);
            });
            rootElement.appendChild(newRowElement);
        });
    };

    const outputPlayers = () => {
        const playerOneElement = document.createElement('div');
        const playerTwoElement = document.createElement('div');

        playerOneElement.textContent = playerOne.name;
        playerTwoElement.textContent = playerTwo.name;
        rootElement.appendChild(playerOneElement);
        rootElement.appendChild(playerTwoElement);
    };

    const startGame = () => {
        outputBoard();
    };

    return {
        startGame,
        outputBoard,
    };
})(document);

displayController.startGame();
