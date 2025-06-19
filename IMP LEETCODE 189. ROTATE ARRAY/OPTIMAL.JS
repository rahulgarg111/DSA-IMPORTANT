//TIME-O(N) , SPACE-O(1)
function reverseHelp(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
    return arr;
 }
var rotate = function(nums, k) {
    let n = nums.length;
    k=k%n;//takes care if k>n
    reverseHelp(nums,0,n-1);//reversing all n elements(n-1-0+1)
    reverseHelp(nums,0,k-1);//reversing first k elements(k-1-0+1)
    reverseHelp(nums,k,n-1);//reversing remaining n-k elements(n-1-k+1)
    return nums;

};