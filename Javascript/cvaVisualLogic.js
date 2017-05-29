(function toggleHumanCow1() {
    $("#player1").toggleClass("human");
    $("#player1").toggleClass("cow");
    setTimeout(toggleHumanCow1, Math.floor((Math.random() * 2000) + 1000));
})();

(function toggleHumanCow2() {
    $("#player2").toggleClass("human");
    $("#player2").toggleClass("cow");
    setTimeout(toggleHumanCow2, Math.floor((Math.random() * 2000) + 1000));
})();