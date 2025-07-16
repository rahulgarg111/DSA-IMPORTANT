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

//PROBLEM LINK - https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1

class Solution {
    // Function to return a list containing the bottom view of the given tree.
    bottomView(root) {
        if (!root) return [];
        if (!root.left && !root.right) return [root.data];

        //node , horizontal 
        let queue = [[root, 0]];

        // horizontal : node 
        let map = new Map();
        let front = 0;
        while (front < queue.length) {
            let [currNode, currhoridistance] = queue[front++];
            map.set(currhoridistance, currNode.data);

            if (currNode.left) {
                queue.push([currNode.left, currhoridistance - 1]);
            }
            if (currNode.right) {
                queue.push([currNode.right, currhoridistance + 1]);
            }
        }

        let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
        let res = sortedKeys.map(key => map.get(key));
        return res;
    }
}