window.addEventListener("keydown", function(e) {
        var game = new CheckPosition();

        if (e.keyCode === 87) {
            game.triangulatorP1();
            $("#p1-score").html(p1Score);
            
        } else if (e.keyCode === 38) {
            game.triangulatorP2();
            $("#p2-score").html(p2Score);
        }
        else if (e.keyCode === 68) {
            game.moveP1("right");
        }
});
