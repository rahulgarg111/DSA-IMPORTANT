//OPTIMAL RECURSIVE CODE
//time complexity - O(logn)
function positivePow(x,n){
    if(n==0)return 1;
    if(n%2!==0){
        return positivePow(x,n-1)*x;
    }
    else {
        let half = positivePow(x,n/2);
        return half*half;
    }
}

var myPow = function(x, n) {
    if(n<0){
        return positivePow(1/x,Math.abs(n))
    }
    return positivePow(x,n);
};