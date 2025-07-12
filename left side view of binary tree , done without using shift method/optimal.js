class Solution {
    leftView(root) {
        if (!root) return [];
        
        let res = [];
        let queue = [root];
        
        while (queue.length > 0) {
            let currSize = queue.length;
            let nextQueue = [];
            //not using shift 
            for (let i = 0; i < currSize; i++) {
                let currNode = queue[i];
                
                // First node of each level is the leftmost
                if (i === 0) {
                    res.push(currNode.data);
                }
                
                if (currNode.left) {
                    nextQueue.push(currNode.left);
                }
                if (currNode.right) {
                    nextQueue.push(currNode.right);
                }
            }
            
            queue = nextQueue;
        }
        
        return res;
    }
}