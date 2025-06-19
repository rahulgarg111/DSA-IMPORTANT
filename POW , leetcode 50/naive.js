//time complexity - O(n)

function positivePow(x,n){
    if(n==0)return 1;
    return positivePow(x,n-1)*x;
}

var myPow = function(x, n) {
    if(n<0){
        return positivePow(1/x,Math.abs(n))
    }
    return positivePow(x,n);
};