window.addEventListener("keypress", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.charCode === 97) {
        debugger;
        alert("The 'a' key is pressed.");
    }
}