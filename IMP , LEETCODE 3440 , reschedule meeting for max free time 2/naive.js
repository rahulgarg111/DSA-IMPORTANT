/**
 time - O(n^2)
 space - O(n)
 */
var maxFreeTime = function(eventTime, startTime, endTime) {
    let n = startTime.length;
    let freetime = [];
    let i=1;
    let j=0;
    let freewindow = [0,startTime[0]];
    freetime.push(freewindow);
    while(i<n){
     freewindow = [endTime[j],startTime[i]];
     freetime.push(freewindow);
     i++;
     j++;
    }
    freewindow = [endTime[j],eventTime];
    freetime.push(freewindow);
    let max = 0;
    for(let i=0;i<freetime.length;i++){
    max = Math.max(max, (freetime[i][1]-freetime[i][0]) );
    }
    //max = 3;
    for(let i=0;i<n;i++){
        let flag = false;
        for(let j=0;j<freetime.length;j++){
            if(j===i  || j-1===i)continue;
             if(freetime[j][1]-freetime[j][0] >= endTime[i]-startTime[i]){
                flag = true;
                break;
             }
        }
        if(flag){
            max = Math.max(max , freetime[i][1]-freetime[i][0] + endTime[i]-startTime[i] + freetime[i+1][1]-freetime[i+1][0]);
        }
        else {
            max = Math.max(max , freetime[i][1]-freetime[i][0] + freetime[i+1][1]-freetime[i+1][0] );
        }
    }
    return max;
};