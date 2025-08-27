/**
 * @param {string} s
 * @return {number}
 */
//time - O(n)
//space - O(1)

var numberOfSubstrings = function(s) {
    let n = s.length;
    let beg = 0;
    let count1 = 0; // a
    let count2 = 0; // b
    let count3 = 0; // c
    let res = 0;
    let end = 0;
    
    for (beg = 0; beg < n; beg++) {
        // Expand end until we have all three characters
        while (end < n && (count1 < 1 || count2 < 1 || count3 < 1)) {
            if (s[end] === 'a') count1++;
            else if (s[end] === 'b') count2++;
            else count3++;
            end++;
        }
        
        // If we found a valid window, all substrings from here to end are valid
        if (count1 >= 1 && count2 >= 1 && count3 >= 1) {
            res += n - end + 1;
        }
        
        // Remove the character at beg as we'll move to next starting position
        if (s[beg] === 'a') count1--;
        else if (s[beg] === 'b') count2--;
        else count3--;
    }
    
    return res;
}