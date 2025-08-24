/**
 * @param {number[]} nums
 * @return {number}
 */
//time - O(n)
//space - O(n)
var subArrayRanges = function(nums) {
    let n = nums.length;
    let res = 0;

    // PART 1: Calculate MAX contributions (where nums[i] is the maximum)
    
    // NGE - Next Greater Element (or equal)
    let nge = new Array(n).fill(-1); 
    let st1 = [];
    for(let i=n-1;i>=0;i--){
        while(st1.length>0 && nums[st1[st1.length-1]]<=nums[i]){
            st1.pop();
        }
        if(st1.length===0){
            nge[i]=n;
        }
        else{
            nge[i]=st1[st1.length-1];
        }
        st1.push(i);
    }

    // PGE - Previous Greater or Equal Element
    let pge = [];
    let st2 = [];
    for(let i=0;i<n;i++){
        while(st2.length>0 && nums[st2[st2.length-1]]<nums[i] ){
            st2.pop();
        }
        if(st2.length===0){
            pge.push(-1);
        }
        else {
            pge.push(st2[st2.length-1]);
        }
        st2.push(i);
    }

    // Add max contributions
    for(let i=0;i<n;i++){
        res += nums[i]* (nge[i]-i)* (i-pge[i]) ;
    }

    // PART 2: Calculate MIN contributions (where nums[i] is the minimum)

    // NLE - Next Less Element (or equal)
    let nle = new Array(n).fill(-1);
    let st3 = [];
    for (let i = n - 1; i >= 0; i--) {
        while (st3.length > 0 && nums[st3[st3.length - 1]] >= nums[i]) {
            st3.pop();
        }
        if (st3.length === 0) {
            nle[i] = n;
        } else {
            nle[i] = st3[st3.length - 1];
        }
        st3.push(i);
    }

    // PLE - Previous Less or Equal Element
    let ple = [];
    let st4 = [];
    for(let i=0;i<n;i++){
        while(st4.length>0 && nums[st4[st4.length-1]]>nums[i] ){
            st4.pop();
        }
        if(st4.length===0){
            ple.push(-1);
        }
        else {
            ple.push(st4[st4.length-1]);
        }
        st4.push(i);
    }

    // Subtract min contributions
    for(let i=0;i<n;i++){
        res -= nums[i] * (nle[i] - i ) * ( i - ple[i]);
    }

    return res;
};