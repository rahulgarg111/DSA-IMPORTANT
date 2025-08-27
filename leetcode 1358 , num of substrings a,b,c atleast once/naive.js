/**
 * @param {string} s
 * @return {number}
 */
//time - O(n^2)
//space - O(1)

var numberOfSubstrings = function(s) {
    let n = s.length;
    let count = 0;
    for(let i=0;i<=n-3;i++){//i represents start of subarray
        let flag1,flag2,flag3;
        for(let j=i;j<n;j++){//j represents end of subarray
        
            if(s[j]==='a'){
                flag1 = true;
            }
            else if(s[j]==='b'){
                flag2 = true;
            }
            else {
                flag3 = true;
            }
            
            if(flag1&&flag2&&flag3){
            count += n-j;
            break;
        }

        }
    }
    return count;
};