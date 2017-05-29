function CheckPosition() {
    this.shipSelector;
    this.player1Selector;
    // this.player2Selector;

    this.shipSelector = $(".space-ship").offset();
    this.player1Selector = $("#player1").offset();
    // this.player2Selector = $("#player2").offset();

    this.shipPosition = this.shipSelector.left;
    this.player1Position = this.player1Selector.left;

    // need to get the .left of player
    CheckPosition.prototype.triangulatorP1 = function () {
        if (this.player1Position >= this.shipPosition - 200 && this.player1Position <= this.shipPosition + 200) {
            console.log("a");
        } else {
            console.log("b");
        }
    };
    this.triangulatorP1();
}

