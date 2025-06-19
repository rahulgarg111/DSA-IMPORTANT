//Naive solution - linear search - O(n) time 
/*
we have to search in an array in logn time , lets divide it into halfs and search-
how to do that - BINARY SEARCH
*/
var findPeakElement = function(nums) {
    let n = nums.length
    //base case
    if(n==1)return 0 //at index -1 and n we have -Infinity
    //edge case , case (-1)
    if(nums[0]>nums[1])return 0
    if(nums[n-1]>nums[n-2])return n-1

    let low = 1
    let high = n-2
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        //case 0
        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]){//mid is peak
            return mid
        }
        //case 1
        if(nums[mid]>nums[mid-1] && nums[mid]<nums[mid+1]){//ex - 7 8 9 , right of 9 - -Infinity , >9 or <9 - if - Infinity or <9 then 9 is peak , if >9 then continue the search rightwards , anyway we definately find a peak in right subarray
            low = mid+1
        }
        //case 2
        if(nums[mid]<nums[mid-1] && nums[mid]>nums[mid+1]){//similar logic as case 2
            high = mid-1
        }
        //case 3
        if(nums[mid]<nums[mid-1] && nums[mid]<nums[mid+1]){//peak exists in both sides - plateau case
          high = mid-1
        }
    }
};