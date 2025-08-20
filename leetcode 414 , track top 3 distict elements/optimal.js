var thirdMax = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    
    for (let num of nums) {
        // Skip if it's a duplicate of existing max values
        if (num === max1 || num === max2 || num === max3) {
            continue;
        }
        
        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }
    }
    
    // If we don't have three distinct values, return the maximum
    return max3 === -Infinity ? max1 : max3;
};