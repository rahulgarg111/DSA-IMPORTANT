//dp solution can't give better time complexity than O(n^2). So its ruled out.

//SLIDING WINDOW -
//TIME - O(N)
//SPACE - O(1)

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
function summ(arr){
    let n = arr.length;
    let res = 0;
    for(let a of arr){
        res += a;
    }
    return res;
}


var maxScore = function(cardPoints, k) {
    let n = cardPoints.length;
    let beg = 0;
    let min = Infinity;
    let end;
    let sum = 0;
    for(end =0;end<n-k;end++){
        sum += cardPoints[end];
    }
    min = Math.min(min,sum);
    for(end=end;end<n;end++){
        sum -= cardPoints[beg];
        beg++;
        sum += cardPoints[end];
        min = Math.min(min,sum); 
    }
    return summ(cardPoints) - min;
    
};