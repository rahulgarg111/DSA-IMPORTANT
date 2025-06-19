//IMP PROBLEM (GREEDY)
var checkValidString = function(s) {
    let min = 0;
    let max = 0
    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            min++
            max++
        }
        else if(s[i]=='*'){
            min--
            max++
        }
        else {
            min--
            max--
        }
        if(min<0)min=0
        if(max<0)return false
    }
    return min==0
};