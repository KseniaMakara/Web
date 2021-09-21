var seconds  =+prompt("Nth second = ", " ");
var hour = Math.floor(seconds/3600);
var minute = seconds%3600;
document.write("Hour = " + hour, " Minute = " + minute)