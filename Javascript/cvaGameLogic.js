
var player1Selector = $("#player1").offset();
var player2Selector = $("#player2").offset();


function CheckPosition(player) {
    this.player = player;
    this.shipSelector;
    this.shipSelector = $(".space-ship").offset();

    this.shipPosition = this.shipSelector.left;
    // console.log(this.shipSelector.left);

// need to get the .left of player
    CheckPosition.prototype.triangulator = function () {
        if (this.player >= this.shipPosition - 200 && this.player <= this.shipPosition + 200) {
            console.log("a");
        }
        else {
            console.log("b");
        }
    };
};




