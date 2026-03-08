//write a function that returns the count of digits in a number 


function countofDigit(n)
{
if(n==0) return 1;

//converting negative numbers to positive
    n=Math.abs(n);

let count = 0;
while (n>0)
    { // it will run till the number is greater than 0    
    n = Math.floor(n/10);  //divide the number increase the count and run again 
    count++;

    }
    return count;
}

let num = 259;

let result = countofDigit(num);

console.log(result);

//math.floor will round 10.9 to 10 it downgrade it or if the value is 11.2 then using math.floor it 
// will be 11
///////////////////////
259 || count is 
259/10= 25   0
25/10=2      1
2/10=0        2
0/10= 0        3
