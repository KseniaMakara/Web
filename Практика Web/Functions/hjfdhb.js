function getAverageScore(score1,score2,score3) {
    let sum=score1+score2+score3
    return sum/3
}
//----------------
let sc1=parseFloat(prompt("Score1="))
let sc2=parseFloat(prompt("Score2="))
let sc3=parseFloat(prompt("Score3="))
let avg=getAverageScore(sc1,sc2,sc3)

document.write(`Average = ${avg.toFixed(2)}`)
