//TIME AND SPACE - O(N)
var rotate = function(nums, k) {
//TRICK - the element at ith index will go to (i+k)%n index after rotation
    let n = nums.length;
    let ans = new Array(n).fill(0);
    for(let i=0;i<n;i++){
        ans[((i+k)%n)]=nums[i];
    }
    for(let i=0;i<n;i++){
        nums[i]=ans[i]
    }
    return nums
    };