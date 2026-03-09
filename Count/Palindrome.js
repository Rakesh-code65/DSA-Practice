//palindrome means 121 if we reverse then 121 so its a palindrome
//suppose 143 is the number so its not a palindrome
//let take the number as 1234 

var palindrome = function(n){
 if(n < 0) return false;
 
    let nCopy = n;
let rev=0;

while (n>0){  1234
    rem= n%10;                  //1234%10= 4 || 123%10=3 ||  12%10=2 || 1%10=1
    rev=(10*rev) + rem;         //10*0+4 = 4 || 10*4+3=43 || 10*43+2=432 || 432*10+1=4321
    n=Math.floor(n/10);                     //1234/10= 123  ||123/10= 12 || 12/10=1 || 1/10=1

}
if(rev==nCopy){  // if reverse is equal to original number then its a palindrome number
    return true;
}
else {
    return false;
}
// return rev == nCopy;
};
let n=121;
console.log(palindrome(n));


//last digit = n%10;                we will get the remainder
//remove digit = n/10;              we will the dividend value 