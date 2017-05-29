window.addEventListener("keypress", scorePlayer1, false);

function scorePlayer1(e) {
    if (e.charCode === 119) {
        var game = new CheckPosition();
        game.triangulatorP1();
        $("#p1-score").html(p1Score);
    }
};

window.addEventListener("keydown", scorePlayer2, false);

function scorePlayer2(e) {
    if (e.charCode === 38) {
        var game = new CheckPosition();
        game.triangulatorP2();
        $("#p2-score").html(p2Score);
    }
};