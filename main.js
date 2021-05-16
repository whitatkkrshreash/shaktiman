
var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerobject = "";
var blockobject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerobject);

    });
}
function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockobject = Img;
        blockobject.scaleToWidth(blockImageWidth);
        blockobject.scaleToHeight(blockImageHeight);
        blockobject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockobject);

    });
}
window.addEventListener("keydown", MyKeydown);
function MyKeydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == '80') {
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }
    if (keyPressed == '37') {
        left();

    }

    if (keyPressed == '38') {
        up();

    }

    if (keyPressed == '39') {
        right();

    }

    if (keyPressed == '40') {
        down();

    }


    if (keyPressed == '66') {
        newImage('hulk_body.png');
        console.log("hulk body")
    }

    if (keyPressed == '76') {
        newImage('ironman_legs.png');
        console.log("ironman legs")
    }

    if (keyPressed == '84') {
        newImage('thor_right_hand.png');
        console.log("thor_hand")
    }

    if (keyPressed == '70') {
        newImage('ironman_face.png');
        console.log("ironman face")
    }

    if (keyPressed == '67') {
        newImage('captain_america_left_hand (1).png');
        console.log("captain_america_hand")
    }
    

    function right() {
        if (playerX <= 850) {
            playerX = playerX + 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
    
    function left() {
        if (playerX >= 20) {
            playerX = playerX - 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
    
    function up() {
        if (playerY >= 20) {
            playerY = playerY - 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
    
    function down() {
        if (playerY <= 500) {
            playerY = playerY + 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
	function right() {
        if (playerX <= 850) {
            playerX = playerX + 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
    
    function left() {
        if (playerX >= 20) {
            playerX = playerX - 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
    
    function up() {
        if (playerY >= 20) {
            playerY = playerY - 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
    
    function down() {
        if (playerY <= 500) {
            playerY = playerY + 10;
            canvas.remove(playerobject);
            playerUpdate();
        }
    }
}

