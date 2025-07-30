/*
NOTION LINK , COMPLETE NOTES - 
https://www.notion.so/LEETCODE-3440-GOOD-GREEDY-QUESTION-2401c67a6c93803d90dad926dba2f93e?source=copy_link
*/
//TIME - O(N)
//SPACE - O(N)

/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, startTime, endTime) {
    let n = startTime.length;
    let freetime = [];
    let i = 1;
    let j = 0;
    let freewindow = [0, startTime[0]];
    freetime.push(freewindow);
    while (i < n) {
        freewindow = [endTime[j], startTime[i]];
        freetime.push(freewindow);
        i++;
        j++;
    }
    freewindow = [endTime[j], eventTime];
    freetime.push(freewindow);
    let max = 0;
    for (let i = 0; i < freetime.length; i++) {
        max = Math.max(max, (freetime[i][1] - freetime[i][0]));
    }

    //VIMP-

    //"what's the largest interval up to this point?"
    let prefixMax = new Array(freetime.length).fill(0);
    prefixMax[0] = freetime[0][1] - freetime[0][0];
    for (let i = 1; i < freetime.length; i++) {
        let curr = freetime[i][1] - freetime[i][0];
        prefixMax[i] = Math.max(prefixMax[i - 1], curr);
    }

    //what's the largest interval from this point onward
    let suffixMax = new Array(freetime.length).fill(0);
    suffixMax[freetime.length - 1] = freetime[freetime.length - 1][1] - freetime[freetime.length - 1][0];
    for (let i = freetime.length - 2; i >= 0; i--) {
        let curr = freetime[i][1] - freetime[i][0];
        suffixMax[i] = Math.max(suffixMax[i + 1], curr);
    }
    /*
    With these precomputed values, checking if meeting i can fit becomes a constant-time operation:
    
    Look up the maximum interval in the range [1 to i-1] using our prefix array
    Look up the maximum interval in the range [i+2 to n+1] using our suffix array
    Take the larger of these two values
    Check if the meeting length fits in this maximum available interval
    */
    for (let i = 0; i < n; i++) {
        let maxfromprefix = (i > 0) ? prefixMax[i - 1] : 0;
        let maxfromsuffix = (i + 2 < freetime.length) ? suffixMax[i + 2] : 0;

        if (Math.max(maxfromprefix, maxfromsuffix) >= endTime[i] - startTime[i]) {
            max = Math.max(max, freetime[i][1] - freetime[i][0] + endTime[i] - startTime[i] + freetime[i + 1][1] - freetime[i + 1][0]);
        }
        else {
            max = Math.max(max, freetime[i][1] - freetime[i][0] + freetime[i + 1][1] - freetime[i + 1][0]);
        }
    }
    return max;
};