window.addEventListener("keypress", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.charCode === 97) {
        alert("The 'a' key is pressed.");
    }

        if (e.charCode === 32) {
        alert("The 'Spacebar' is pressed.");
    }
}
