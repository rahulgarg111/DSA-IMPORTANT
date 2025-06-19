    // # Intuition

// in brute force we were checking all possible AREAS which could be made with two bars
// (could be same bars) , which would require us to look at all possible beginning and 
// ending of a rectangle and takes n work for each element making n^2 time complexity.
// So instead we think what can be the possible heights of the rectangles which can be 
// made using these bars , the answer is n different rectangles with diff widths
//  (as if no bar's height is 4 we can never make a rectangle of height 4) 

// # Approach

// so for each bar considering it to be the height of my this rectangle we try to maximize
//  the width of this rectangle (we can only expand rectangle
//   if the height of the next - (towards right or left) is greater or equal to height
//    of current bar ) so we make two more arrays storing indexes for nearest shorter
//     on right of my current bar and nearest shorter on left of my current bar ,
//      that way i know exactly how many elements can be included in current rectangle on 
//      left and right sides

// # Complexity
// - Time complexity:

// making nearest shorter on right and left take O(n) each , and then looking for final 
// max area takes O(n) , so total is O(3n) or we can say O(n).

// - Space complexity:

// O(n)

// # Code

var largestRectangleArea = function(heights) {
    let  n = heights.length;
    //nearest shorter on right
let sr =[];
let ar = new Array(n).fill(0);
for(let i=n-1;i>=0;i--){
    while(sr.length!==0 && heights[i]<=heights[sr[sr.length-1]]){
        sr.pop();
    }
    if(sr.length==0){
        ar[i] = -1;
    }
    else {
      ar[i] = sr[sr.length-1];
    }
    sr.push(i);
}

    //nearest shorter on left
    let sl = [];
    let al = [];
    for(let i=0;i<n;i++){
        while(sl.length!==0 && heights[i]<=heights[sl[sl.length-1]]){
            sl.pop();
        }
        if(sl.length==0){
            al.push(-1);
        }
        else {
            al.push(sl[sl.length-1]);
        }
        sl.push(i);
    }
    let maxarea = -1;
    let area =0;
    let maxleftwidth = 0;
    let maxrightwidth = 0;
    let maxwidth =0;
    for(let i=0;i<n;i++){
        if(ar[i]==-1){
           maxrightwidth = n-1-i;
        }
        else {
            maxrightwidth = ar[i]-i-1;
        }
         if(al[i]==-1){
            maxleftwidth = i+1;
         }
         else {
            maxleftwidth = i - al[i];
         }
         maxwidth = maxrightwidth + maxleftwidth;
         area = heights[i] * maxwidth;
         maxarea = Math.max(maxarea , area);
    }
    return maxarea;
};
