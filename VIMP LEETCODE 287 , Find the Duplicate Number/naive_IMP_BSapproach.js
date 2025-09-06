/**
 * @param {number[]} nums
 * @return {number}
 */
 /* APPROACH-
we know if length of nums is n+1 , then max integer present in nums is n and min is 1 , but as length is n+1 and only 1->n 
integers so not all integers appear just once , we are given that ONLY ONE of the integers from 1-n can appear more than once , so if n=5 , nums could be -> 1,2,3,4,4 or it could also be 4,4,4,4,4 (no minimum freq fixed for other integers)

SO NOW , we search for answer one by one in the possible answer array 1->n (using bs on answers) , catch - if mid is the number which appears more than once then sum of freq of others should be <=n-2 (think on it to get it) , but if mid aint it
we check freq of more vs supposed freq of more (if all the numbers greater than mid couldnt have come more than once) else 
the repeat number must be less than mid.
AND DONE!
 */
 //TIME - O(NlogN) -> choosing logn elements (due to bs) but doing n work for each
 //SPACE - O(1)
function count(nums,k){
    let n = nums.length;
    let less = 0;
    let more = 0;
    for(let num of nums){
        if(num>k)more++;
        else if(num<k)less++;
        else continue;
    }
    return more+less<=n-2 ? 0 : more>=n-k ? 1 : -1;
}

var findDuplicate = function(nums) {
    let n = nums.length-1;
    let low = 1;
    let high = n;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        let ans = count(nums,mid);
        if(ans===0)return mid;
        else if(ans===1){
            low = mid+1;
        }
        else {
            high = mid-1;
        }
    }
};