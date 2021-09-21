 var x = +prompt("Enter first digit = ", " ");
 var y = +prompt("Enter second digit = ", " ");
 var z = +prompt("Enter third digit = ", " ");
 var f = +prompt("Enter fourth digit = ", " ");
function four_sum(x,y,z,f){
     let sum = x+y+z+f;
     return sum;
}
 function mult(x,y,z,f){
    let mult = x*y*z*f;
    return mult;
}
function arifmetical(x,y,z,f){
    let arifm = (x+y+z+f)/4;
    return arifm;
}
function maxim(x,y,z,f){
   let max = Math.max(x,y,z,f)
    return max;
}
let summ = four_sum(x,y,z,f)
let m = mult(x,y,z,f)
let ar = arifmetical(x,y,z,f)
let mxx = maxim(x,y,z,f)
document.write(  `Summa = ${four_sum(x,y,z,f)}, Mult  = ${mult(x,y,z,f)}, Arifm = ${arifmetical(x,y,z,f)}, Max = ${maxim(x,y,z,f)},`   )