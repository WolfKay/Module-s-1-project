window.addEventListener("keypress", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.charCode === 97) {
        CheckPosition(player1Selector);
        CheckPosition.triangulator();

    }

        if (e.charCode === 32) {
        alert("The 'Spacebar' is pressed.");
    }
}
