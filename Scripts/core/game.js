///<reference path="_reference.ts"/> 
var canvas;
var stage;
var helloLabel;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60); //set framerate to 60 frames per second
    createjs.Ticker.on("tick", gameLoop);
    main();
}
function gameLoop(event) {
    helloLabel.rotation -= 8;
    stage.update();
}
function main() {
    console.log("game started");
    helloLabel = new createjs.Text("Hello Lab One!!!", "60px Consolas", "#0000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
    }

//# sourceMappingURL=game.js.map