let n = +prompt(" Enter n ")
let m = +prompt(" Enter m ")
function table(n,m){
    for (let i = 0; i <n; i++){
        document.write(`
        <table border="2px">
         <tr>`)
        //-----------------------------
            for (let j = 0; j<m; j++){
                document.write(`<td> SHEINZOOOOO SASAGEYOOOOO </td>`)
            }
        }
    //---------------------------
    document.write(`
      </tr>
    </table>    
    `)
}
table(n,m)
