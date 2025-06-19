//PROBLEM LINK - https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1
/*
The Key Insight
Always choose the meeting that ends earliest.
This makes intuitive sense because:

If we select a meeting that ends earlier, we leave more time available for potential future meetings.
By freeing up the room as quickly as possible, we maximize our options for scheduling additional meetings.

Why Sort by End Time?
Imagine two meetings:

Meeting A: starts at 1:00 and ends at 2:00
Meeting B: starts at 1:30 and ends at 4:00

If we chose Meeting B first (which ends later), we'd block the time until 4:00 and could only have one meeting.
If we chose Meeting A first (which ends earlier), we finish at 2:00 and could potentially schedule more meetings after that.
The Step-by-Step Logic

Sort by end time: This prioritizes meetings that free up the room quickly.
In case of identical end times: We sort by meeting index (as specified in the problem), but this is somewhat arbitrary—any tie-breaking rule would work.
The greedy selection: After sorting, we iterate through the meetings and select the first valid one (that starts after our room becomes free), then the next valid one, and so on.
Time complexity: O(n log n) due to the sorting operation.
*/

maxMeetings(start, end){
        // code here
        let n = start.length
        let x = []
        for(let i=0;i<n;i++){
            x.push([start[i],end[i],i+1])
        }
        x.sort((a,b)=>{
            if(a[1]==b[1]){
                return a[2]-b[2]
            }
            return a[1]-b[1]
        });
        let freeTime = -1
        let result = 0
        for(let i=0;i<n;i++){
            if(x[i][0]>freeTime){
                result++
                freeTime = x[i][1]
            }
        }
        return result
    }