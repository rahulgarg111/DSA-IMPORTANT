//time - O(n)->n is num of nodes, space->O(n)
function levelOrder(root){
    if(!root)return [];
    let res = [];
    let queue = [root];
    while(queue.length>0){
        let currSize = queue.length;
        let currLevel = [];
        for(let i=0;i<currSize;i++){
            let currNode = queue.shift();
            currLevel.push(currNode.val);
            if(currNode.left){
                queue.push(currNode.left);
            }
            if(currNode.right){
                queue.push(currNode.right);
            }
        }
        res.push(currLevel);
    }
    return res;
}