var gamepattern = []
var buttonColors = ["green", "red", "yellow", "blue"]
var userChosenColor = [];
var level;
var count=true;


function nextSequence() {
    userChosenColor = [];
    level=level+1;
     $("#level-title").text("level " + level);
    var e = buttonColors[Math.floor(4 * Math.random())];
    gamepattern.push(e),
            $("#" + e).addClass("flash"),
                (MyAudio = new Audio("./" + e + ".mp3")).play(),
                setTimeout(function () {
                    $("#" + e).removeClass("flash");
                console.log(gamepattern);
        }, 600);
}


function checkAnswer(currentLevel) {
    if(userChosenColor[currentLevel] === gamepattern[currentLevel]){
        if(currentLevel+1===level){
            console.log("correct")
            setTimeout(nextSequence, 1000)
        }}
    else{
        console.log("wrong");
        for(var i=0;i<4;i++){
            document.getElementsByClassName('btn')[i].disabled=true;
        }
        new Audio("./wrong.mp3").play();
        $("#level-title").html("Game Over, Press Any Key to Continue");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
            count=true;
            }, 200)
        gamepattern = []
        
    }
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
        console.log('pressed  '+count)
        if(count===true){
            level=0
            count = false
            for(var i=0;i<4;i++){
                document.getElementsByClassName('btn')[i].disabled=false;
            }
            nextSequence();
        }
    })
    $(document).on("click", function () {
        console.log('pressed   '+count)
        
        if(count==true){
            level=0
            count = false
            for(var i=0;i<4;i++){
                document.getElementsByClassName('btn')[i].disabled=false;
            }
            nextSequence();
        }
    });
