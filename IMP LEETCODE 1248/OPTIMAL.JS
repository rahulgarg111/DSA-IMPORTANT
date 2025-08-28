//TIME-O(N), SPACE-O(1)

//optimal explanation(NEETCODE) - https://www.youtube.com/watch?v=4zNK0rhFfcA

var numberOfSubarrays = function(nums, k) {
    let n = nums.length;
    let l = 0;//left pointer
    let m = 0;//mid pointer
    let r;//right pointer
    let count = 0;//for tracking num of odd elements in the subarray
    let res = 0;//count of total nice subarrays

    for(r=0;r<n;r++){
        if(nums[r]%2!==0)count++;
        if(count===k){
            while(m<=r && nums[m]%2===0){
                m++;
            }
            break;
        }
    }
    //check if did we even get a valid first window
    if(count<k)return 0;

    //once we know we did find some valid window , we update res
    res += m-l+1;

    for(r=r+1;r<n;r++){
        if(nums[r]%2===0){
            res += m-l+1;
        }
        else { //now count has become k+1
            l=m+1;
            m++;
            while(m<=r && nums[m]%2===0){
                m++;
            }
            res += m-l+1;
        }
    }
    return res;
};