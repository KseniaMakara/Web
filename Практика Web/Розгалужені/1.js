var a=1, b=5;
var rnd=a+Math.floor((b-a+1)*Math.random());
var n1  = +prompt("Enter number = ", " ")
var n2 = +prompt("Enter number = ", " ")
if (n1 == rnd)
    document.write("You won!")
else if (n2 == rnd)
    document.write("You won 2nd try!")
else
    document.write("You loose!")



