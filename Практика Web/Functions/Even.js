var x = +prompt("Enter first digit = ", " ");
var y = +prompt("Enter second digit = ", " ");
var z = +prompt("Enter third digit = ", " ");
function even_numbers(x, y, z){
    if ((x%2==0 && y%2!=0 && z%2!=0)||(x%2!=0 && y%2==0 && z%2!=0)|| (x%2!=0 && y%2!=0 && z%2==0)){
        return 1;
    }
    else if (x%2==0 && y%2==0 && z%2==0){
        return 3;
    }
    else if ((x%2===0 && y%2===0 && z%2!==0)||(x%2!=0 && y%2===0 && z%2===0)|| (x%2===0 && y%2!==0 && z%2===0)){

       return  2;
    }
    return 0;

}
alert(even_numbers(x, y, z));