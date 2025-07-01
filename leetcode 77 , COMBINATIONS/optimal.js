var combine = function(n, k) {
    const res = [];
    const curr = [];
    
    function backtrack(start) {
        if (curr.length === k) {
            res.push([...curr]); // Only copy when we have a valid combination
            return;
        }
        
        // Pruning: stop if not enough numbers left
        for (let i = start; i <= n - (k - curr.length) + 1; i++) {
            curr.push(i);
            backtrack(i + 1);
            curr.pop();
        }
    }
    
    backtrack(1);
    return res;
};