
function compareNumber (a, b) {
    if (a>b) {return 1};
    if (a<b) {return -1};
    return 0;
    //а можна просто return a-b
    }
    var arr = [1,2,15,36,305];
    arr.sort (compareNumber);
    alert (arr); // 1, 2, 15, 36, 305
    