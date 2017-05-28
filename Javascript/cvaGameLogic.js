
var player1Selector = $("#player1").offset();
var player2Selector = $("#player2").offset();

function CheckPosition(player) {
    this.player = player;
    this.shipSelector;
    this.shipSelector = $(".space-ship").offset();

    console.log(this.shipSelector);

    CheckPosition.prototype.triangulator = function () {
        this.shipPosition = this.shipSelector;
        if (this.player >= this.shipPosition - 10 && this.player <= this.shipPosition + 10) {
            console.log("a");
        }
        else {
            console.log("b");
        }
    };
};




