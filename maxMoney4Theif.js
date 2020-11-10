// This Problem has been solved.
// Rule: Thief will always start from 0th house

function maximizeMoney(){
    n = 15; 
    k = 1000;

    if(n%2==0){ //If number of house is even
        maxAmt = (n/2)*k;
        return maxAmt;
    }
    else(n%2!==0)   //If number of house is odd
        maxAmt = (((n-1)/2)+1)*k;
        return maxAmt;
    }
console.log(maximizeMoney());