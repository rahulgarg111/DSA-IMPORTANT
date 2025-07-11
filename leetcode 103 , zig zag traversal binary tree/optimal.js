/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//TIME - O(N) , SPACE - O(N)

var zigzagLevelOrder = function(root) {
    if(!root)return [];
    let res = [];
    let queue = [root];
    let flag = true;
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
        if(!flag){
            res.push(currLevel.reverse());
        }
        else {
        res.push(currLevel);
        }
        flag = !flag;
    }
    return res;
};