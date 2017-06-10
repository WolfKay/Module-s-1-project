var myAudio = new Audio('./musicAndFx/army.wav');
myAudio.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);
myAudio.play();

var audio = new Audio('./musicAndFx/pickUp.wav');

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
  this.player1PositionX = this.player1Selector.left;
  this.player2PositionX = this.player2Selector.left;

  CheckPosition.prototype.triangulatorP1 = function () {
    if (this.player1PositionX >= this.shipPosition - 100 && this.player1PositionX <= this.shipPosition + 100 && $("#player1").hasClass("cow")) {
      p1Score += 500;
      $("#p1-score").css("animation-play-state", "running");
      setTimeout(function(){
        $("#p1-score").css("animation-play-state", "paused");
      }, 500);

      $("#player1").animate({
        bottom: "100"
      }, 200);
      $("#player1").animate({
        bottom: "20"
      }, 100);
      $("#lighting").show();
      setTimeout(function () {
        $("#lighting").hide();
      }, 500)
      audio.play();
    }



    if (this.player1PositionX >= this.shipPosition - 100 && this.player1PositionX <= this.shipPosition + 100 && $("#player1").hasClass("human")) {
      p1Score -= 80;
      $("#p1-score").css("animation-play-state", "running");
      setTimeout(function(){
        $("#p1-score").css("animation-play-state", "paused");
      }, 700);
    }
  };


  CheckPosition.prototype.triangulatorP2 = function () {
    if (this.player2PositionX >= this.shipPosition - 100 && this.player2PositionX <= this.shipPosition + 100 && $("#player2").hasClass("cow")) {
      p2Score += 500;
      $("#p2-score").css("animation-play-state", "running");
      setTimeout(function(){
        $("#p2-score").css("animation-play-state", "paused");
      }, 700);

      $("#player2").animate({
        bottom: "100"
      }, 200);
      $("#player2").animate({
        bottom: "20"
      }, 100);
      $("#lighting").show();
      setTimeout(function () {
        $("#lighting").hide();
      }, 500)
      audio.play();
    }

    if (this.player2PositionX >= this.shipPosition - 100 && this.player2PositionX <= this.shipPosition + 100 && $("#player2").hasClass("human")) {
      p2Score -= 80;
      $("#p2-score").css("animation-play-state", "running");
      setTimeout(function(){
        $("#p2-score").css("animation-play-state", "paused");
      }, 700);
    }
  };


  CheckPosition.prototype.moveP1 = function (direction) {
    if (direction === "right" && document.getElementById("player1").offsetLeft < 1100) {
      document.getElementById("player1").style.left = document.getElementById("player1").offsetLeft + 150 + 'px';
    } else if (direction === "left" && document.getElementById("player1").offsetLeft > 50) {
      document.getElementById("player1").style.left = document.getElementById("player1").offsetLeft - 150 + 'px';
    }
  }

  CheckPosition.prototype.moveP2 = function (direction) {
    if (direction === "right" && document.getElementById("player2").offsetLeft < 1100) {
      document.getElementById("player2").style.left = document.getElementById("player2").offsetLeft + 150 + 'px';
    } else if (direction === "left" && document.getElementById("player2").offsetLeft > 50) {
      document.getElementById("player2").style.left = document.getElementById("player2").offsetLeft - 150 + 'px';
    }

  }

};