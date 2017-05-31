var p1Score = 0;
$("#p1-score").html(p1Score);
var p2Score = 0;
$("#p2-score").html(p2Score);

function CheckPosition() {
    this.shipSelector;
    this.player1Selector;
    this.player2Selector;

    this.shipSelector = $(".space-ship").offset();
    this.player1Selector = $("#player1").offset();
    this.player2Selector = $("#player2").offset();

    this.shipPosition = this.shipSelector.left;
    this.player1PositionY = this.player1Selector.left;

    this.player2Position = this.player2Selector.left;

    CheckPosition.prototype.triangulatorP1 = function () {
        if (this.player1PositionY >= this.shipPosition - 100 && this.player1PositionY <= this.shipPosition + 100 && $("#player1").hasClass("cow")) {
            p1Score += 10;

        };

        if (this.player1PositionY >= this.shipPosition - 100 && this.player1PositionY <= this.shipPosition + 100 && $("#player1").hasClass("human")) {
            p1Score -= 2;
        }
    };


    CheckPosition.prototype.triangulatorP2 = function () {
        if (this.player2Position >= this.shipPosition - 100 && this.player2Position <= this.shipPosition + 100 && $("#player2").hasClass("cow")) {
            p2Score += 10;

        }
        if (this.player2Position >= this.shipPosition - 100 && this.player2Position <= this.shipPosition + 100 && $("#player2").hasClass("human")) {
            p2Score -= 2;

        }
    };

    CheckPosition.prototype.moveP1 = function (direction) {
        this.direction = direction;
        if (this.direction === "right") {
            $("#player1").css("left", function(index) {
                this.index = index;
                this.value = this.index;
                return (index) + 2;
            });
        }
    }
}