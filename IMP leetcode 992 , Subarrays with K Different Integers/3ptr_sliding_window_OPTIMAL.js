//time - O(N)
//space - O(N)  
//explanation (Neetcode) - https://www.youtube.com/watch?v=etI6HqWVa8U

var subarraysWithKDistinct = function (nums, k) {
    let n = nums.length;
    let l = 0;
    let m = 0;
    let res = 0;
    let map = new Map();

    for (let r = 0; r < n; r++) {
        map.set(nums[r], (map.get(nums[r]) || 0) + 1);

        //keeps map size under check
        while (map.size > k) {
            map.set(nums[m], (map.get(nums[m])) - 1);
            if (map.get(nums[m]) === 0) map.delete(nums[m]);
            m++;
            l = m;
        }

        //we maintain m such that only min possible freq of each num is present to keep 
        //window as small as possible
        while (map.get(nums[m]) > 1) {
            map.set(nums[m], (map.get(nums[m])) - 1);
            m++;
        }

        if (map.size === k) {
            res += m - l + 1;
        };

    }

    return res;

}