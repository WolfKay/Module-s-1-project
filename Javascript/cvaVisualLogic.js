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

function startTimer(time) {
  document.getElementById('timer').innerHTML = --time;

  if (time > 0) {
    setTimeout(function () {
      startTimer(time)
    }, 1000);
  } else if (time == 0 && p1Score > p2Score) {
    $(".winner-screen").text("Player 1 wins!");
    $(".winner-screen").toggle();
    $("#p1-score").toggle();
    $("#p2-score").toggle();
    $(".play-again").toggle();
    $(".play-again").click(function () {
      location.reload();
    });
  } else if (time == 0 && p2Score > p1Score) {
    $(".winner-screen").text("Player 2 wins!");
    $(".winner-screen").toggle();
    $("#p1-score").toggle();
    $("#p2-score").toggle();
    $(".play-again").toggle();
    $(".play-again").click(function () {
      location.reload();
    });
  } else if (time == 0 && p2Score === p1Score) {
    $(".winner-screen").text("It's a TIE!");
    $(".winner-screen").toggle();
    $("#p1-score").toggle();
    $("#p2-score").toggle();
    $(".play-again").toggle();
    $(".play-again").click(function () {
      location.reload();
    });
  }
}


startTimer(200);