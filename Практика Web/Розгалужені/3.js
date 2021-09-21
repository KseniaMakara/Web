/*var amount = +prompt("ENter amount of ships = ", " ");
var position  = 1+Math.floor((5)*Math.random());
var ship_number = +prompt("ENter position = ", " ");
if (ship_number==position)
    document.write("You killed that shit ")
if (ship_number==position+1 && ship_number==position-1)
    document.write("Wound! ")
if (ship_number!=position)
    var new_position = 1+Math.floor((5)*Math.random())
    var new_ship_number = +prompt("Enter new position")
    if (new_ship_number==new_position)
        alert("2nd try you killed it")
    else
        document.write("Looser!")
*/
var ship_number  = 1+Math.floor((5)*Math.random());
var position = +prompt("ENter position = ", " ");
if (ship_number==position)
    document.write(" C You killed that shit ")
if (ship_number==position+1 && ship_number==position-1)
    document.write("CWound! ")
if (ship_number!=position)
    var new_ship_number = 1+Math.floor((5)*Math.random())
    var new_position = +prompt("Enter new position")
    if (new_ship_number==new_position)
        alert("Computer 2nd try")
    else
        document.write("CLooser!")