var scoresCount = parseInt(prompt("Enter amount of scores= ", "5"))
var scores  = new Array(scoresCount)
for (var i=0; i<scores.length; i++){
    scores[i] = parseInt(prompt("Score №"+(i+1) , "0"));
}
function three(x, i, scores){
    if (x[i]==3){
        return "Three"
    }
}
function two(x, i, scores){
    if (x[i]==2){
        return "Two"
    }
}
scores.some(three)
alert(scores)