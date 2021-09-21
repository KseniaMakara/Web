let x = +prompt("Enter number of month = ", " ");
function season(x){
    if (x>=3 && x<=5)
    return " Spring"
    else if (x>=6 && x<=8)
    return " Summer" 
    else if (x>=9 && x<=11)
    return " Fall"
    else (x==12 && x==1 && x==2 )
    return " Winter"
}
alert(season(x))