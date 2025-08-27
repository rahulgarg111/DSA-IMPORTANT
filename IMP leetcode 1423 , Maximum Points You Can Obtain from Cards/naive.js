    /**
    * @param {number[]} cardPoints
    * @param {number} k
    * @return {number}
    */
//dp solution can't give better time complexity than O(n^2). So its ruled out.

    var maxScore = function(cardPoints, k) {
        let n = cardPoints.length;
        let mem = new Map();
        function help(i,j,k){
            let key = `${i},${j},${k}`;
            if(mem.has(key))return mem.get(key);

            if(k===0){
                return 0;
            }
            if(i>j)return 0;

            let ans1 = cardPoints[i] + help(i+1,j,k-1);
            let ans2 = cardPoints[j] + help(i,j-1,k-1);
            mem.set(key, Math.max(ans1,ans2) );
            return mem.get(key);
        }
            return help(0,n-1,k);
    };