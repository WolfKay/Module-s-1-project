var game;

window.addEventListener("keypress", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.charCode === 97) {
        game = new CheckPosition(player1Selector);
        game.triangulator();

    }

        if (e.charCode === 32) {
        alert("The 'Spacebar' is pressed.");
    }
}
