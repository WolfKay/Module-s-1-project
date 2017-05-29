window.addEventListener("keypress", scorePlayer1, false);

function scorePlayer1(e) {
    if (e.charCode === 97) {
        var game = new CheckPosition();
        game.triangulatorP1();
    }

    if (e.charCode === 32) {
       var game = new CheckPosition();
        game.triangulatorP2();
    }
}
