var n = +prompt("Enter N = ", " ");
var k = 10;
var count = 0;
while (n/k>0)
{
    if (n%k==n%k*10)
         count++;
   n=n/k;
   k*=10;
}
alert(count)
