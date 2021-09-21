var months =+prompt("Months = ", " ");
var years = Math.floor(months/12)+"  years";
var new_m = months%12 + "  months";
document.write("Years = " + years, "  Months = "+new_m)