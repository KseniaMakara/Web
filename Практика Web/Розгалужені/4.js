var x= 0, y= 0;
var positionX = 1+Math.floor((10)*Math.random()) 
var positionY = 1+Math.floor((10)*Math.random()) 
var x1 = +prompt("Enter x = ", " ");
var y1 = +prompt("Enter y = ", " ");
var points=0;
if (x1 ==positionX && y1 == positionY ){
    points+=150;
    alert("You won!")
}
else{
    x1 =+prompt("Enter another x = ", " ");
    y1 =+prompt("Enter another y = ", " ");
    var positionX = 1+Math.floor((10)*Math.random()) 
    var positionY = 1+Math.floor((10)*Math.random()) 
    if (x1 ==positionX && y1 == positionY){
        points+=50;
        alert("You won!");
    }
    else 
        alert("You loose!");
}
   
