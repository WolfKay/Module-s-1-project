// this part is to find out the elemnets position within it's parent (the game board)
// var shipSelector;
var player1Selector = $("#player1").offset();
// var player2Selector = $("#player2").offset();

function CheckPosition(player) {
    this.player = player;
    this.shipSelector;
    this.shipSelector = $(".space-ship").offset();
    // this.player1Position = player1Selector.left;
    // this.player2Position = player2Selector.left;
    console.log(this.shipSelector);

    CheckPosition.prototype.triangulator = function () {
        shipPosition = this.shipSelector;
        if (this.player >= this.shipPosition - 10 && this.player <= this.shipPosition + 10) {
            console.log("a");
        }
        else {
            console.log("b");
        }
    };
};

// var game = new CheckPosition();



