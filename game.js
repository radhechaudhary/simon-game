var gamepattern = [],
    buttonColors = ["green", "red", "yellow", "blue"],
    userChosenColor = [],
    level = 0;
function nextSequence() {
    (userChosenColor = []), level++, $("#level-title").text("level " + level);
    var e = buttonColors[Math.floor(4 * Math.random())];
    gamepattern.push(e),
        setTimeout(function(){$("#" + e).addClass("flash"),
        (MyAudio = new Audio("./" + e + ".mp3")).play(),
        setTimeout(function () {
            $("#" + e).removeClass("flash");
        }, 100),
        console.log(gamepattern);},300)
}
function checkAnswer(e) {
    userChosenColor[e] === gamepattern[e]
        ? e == level - 1 && (console.log("correct"), setTimeout(nextSequence, 1e3))
        : (console.log("wrong"),
          new Audio("./wrong.mp3").play(),
          $("h1").text("Game Over, Press Any Key to Continue"),
          $("body").addClass("game-over"),
          (count = !0),
          setTimeout(function () {
              $("body").removeClass("game-over");
          }, 200),
          (gamepattern = []));
}
(count = !0),
    $("#red").click(function e() {
        new Audio("./red.mp3").play(),
            userChosenColor.push("red"),
            $("#red").addClass("flash"),
            setTimeout(function e() {
                $("#red").removeClass("flash");
            }, 100),
            checkAnswer(userChosenColor.length - 1);
    }),
    $("#green").click(function e() {
        new Audio("./green.mp3").play(),
            userChosenColor.push("green"),
            $("#green").addClass("flash"),
            setTimeout(function e() {
                $("#green").removeClass("flash");
            }, 100),
            checkAnswer(userChosenColor.length - 1);
    }),
    $("#blue").click(function e() {
        new Audio("./blue.mp3").play(),
            userChosenColor.push("blue"),
            $("#blue").addClass("flash"),
            setTimeout(function e() {
                $("#blue").removeClass("flash");
            }, 100),
            checkAnswer(userChosenColor.length - 1);
    }),
    $("#yellow").click(function e() {
        new Audio("./yellow.mp3").play(),
            userChosenColor.push("yellow"),
            $("#yellow").addClass("flash"),
            setTimeout(function e() {
                $("#yellow").removeClass("flash");
            }, 100),
            checkAnswer(userChosenColor.length - 1);
    }),
    $(document).on("keypress", function () {
        (level = 0), !0 == count && ((count = !1), nextSequence());
    });

    $(document).on("click", function () {
        (level = 0), !0 == count && ((count = !1), nextSequence());
    });
