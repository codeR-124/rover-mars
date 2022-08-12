canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add(e)
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(e)
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(e)
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover.width, rover.height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log("keyPressed")
    if (keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if (keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if (keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if (keyPressed == '39')
    {
        right();
        console.log("right");
    }
}

function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down()
{
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left()
{
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right()
{
    if(rover_x <=700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, X = " + rover_x + "Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}