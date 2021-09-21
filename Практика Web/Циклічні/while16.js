var hare  = 1+Math.floor((10)*Math.random());
var shoot = +prompt("Enter shot position ", " ");
var patrons = +prompt("Enter amount of patrons = ", " ");
for (patrons; patrons>0; patrons--)
    {
        if (shoot == hare)
        alert("Poor hare")
    else if (shoot!=hare){
        shoot = +prompt("Enter new position = ", "  ")
        var hare  = 1+Math.floor((10)*Math.random());
    }
    else if(patrons=0)
        alert ("Looser!")
    }