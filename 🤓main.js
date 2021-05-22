// 80 (line no. 43) = P//

//variables
var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
 var player_object="";
 var block_object="";
 //variables

 //events
 window.addEventListener("keydown", keyDown);
 //events

 //functions
 function pu(){
     fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
         player_object=Img;
         player_object.scaleToWidth(150);
         player_object.scaleToHeight(150);
         player_object.set({
top:player_y,
left:player_x
         });
         canvas.add(player_object);
     });
 }
 function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
    block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
top:player_y,
left:player_x
        });
        canvas.add(block_object);
    });
}
function keyDown(e){
keypressed=e.keyCode;
if(e.shiftKey==true&&keypressed=="80") {
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("cw").innerHTML=block_width;
    document.getElementById("ch").innerHTML=block_height;
}
if (e.shiftKey==true&&keypressed=="77") {
    block_height=block_height-10;
    block_width=block_width-10;
    document.getElementById("ch").innerHTML=block_height;
    document.getElementById("cw").innerHTML=block_width;
}
if (keypressed=="70") {
    newImage("https://i.postimg.cc/hGnyTPLB/ironman-face.png");
}
if (keypressed=="66") {
    newImage("https://i.postimg.cc/FscwL6M0/spiderman-body.png");
}
if (keypressed=="76"){
newImage("https://i.postimg.cc/KzF6GDqt/hulk-legs.png");
}
if (keypressed=="82") {
    newImage("https://i.postimg.cc/8s8BGtwS/thor-right-hand.png");
}
if (keypressed=="72") {
   newImage("https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png") 
}
if (keypressed=="38") {
    up();
}
if (keypressed=="40") {
    down();
}
if (keypressed=="37") {
    left();
}
if (keypressed=="39") {
    right();
}
}
function up(){
    if (player_y>=0) {
      player_y=player_y-block_height;
      canvas.remove(player_object);
      pu();  
    }
}
function down(){
    if (player_y<=500) {
      player_y=player_y+block_height;
      canvas.remove(player_object);
      pu();  
    }
}
function left(){
    if (player_x>=0) {
      player_x=player_x-block_width;
      canvas.remove(player_object);
      pu();  
    }
}
function right(){
    if (player_x<=850) {
      player_x=player_x+block_width;
      canvas.remove(player_object);
      pu();  
    }
}

