var start =1+Math.floor((100)*Math.random());
var end =1+Math.floor((100)*Math.random());

var digit = +prompt("Enter digit " , " ");

if (digit>start && digit <end || digit >start-10 && digit <end+10) 
    document.write("You won!")
else 
    document.write("Loose!")