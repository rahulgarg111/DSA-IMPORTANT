/**
 * @param {Node} root
 * @returns {number[]}
 */
/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
    leftView(root) {
        // your code here
        if(!root)return [];
        let res = [];
        let queue = [root];
        while(queue.length>0){
            let currSize = queue.length;
            let currLevel = 0;
            for(let i=0;i<currSize;i++){
                let currNode = queue.shift();
                if(i===0){
                    currLevel = (currNode.data);
                }
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
}