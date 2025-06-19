//time - O(n^2)
var largestRectangleArea = function(heights) {
    let n = heights.length;
    let max = 0;
    for(let i=0;i<n;i++){
        let height = heights[i];
        let area = height;
        let width = 1;
        max = Math.max(max,area);
        for(let j=i+1;j<n;j++){
          width = j-i+1;
         height = Math.min(height,heights[j]);
         area = width * height;
         max = Math.max(area,max);
        }
    }
    return max;
};