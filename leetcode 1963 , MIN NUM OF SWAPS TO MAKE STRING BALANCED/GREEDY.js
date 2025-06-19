var minSwaps = function(s) {
    let n = s.length;
    let swaps =0;
    let openNeeded=0;
    let extraOpen=0;
    for(let i=0;i<n;i++){
        if(s[i]=='['){
            extraOpen++;
        }
        else {
            if(extraOpen==0){
                openNeeded++;
            }
            else {
                extraOpen--;
            }
        }
        if(openNeeded-extraOpen>0){
            swaps+=1;
            openNeeded--;
            extraOpen++;
        }
    }
      return swaps;
};