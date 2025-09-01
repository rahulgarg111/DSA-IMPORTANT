//IMP TO REDO

//step2 start
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
//step2 end

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    //step1 start
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.size = 0;
    //step1 end
};

//step5 start

LRUCache.prototype.addToFront = function (node) {
    if (!this.head) {
        this.head = node;
        this.tail = node;
        node.next = null;
        node.prev = null;
    }
    else {
        node.next = this.head;
        node.prev = null;
        this.head.prev = node;
        this.head = node;
    }
}

LRUCache.prototype.removeNode = function (node) {

    if (!node.prev && !node.next) {
        this.head = null;
        this.tail = null;
    }
    else if (!node.prev && node.next) {
        this.head = node.next;
        this.head.prev = null;
        node.next = null;
    }
    else if (node.prev && !node.next) {
        this.tail = node.prev;
        this.tail.next = null;
        node.prev = null;
    }
    else {// node.prev && node.next
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
    }
}
//step5 end

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    //step3 start
    if (!this.map.has(key)) return -1;
    //step3 end

    //step6 start
    let node = this.map.get(key);
    this.removeNode(node);
    this.addToFront(node);
    return node.value;
    //step6 end
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    //step4 start

    //adding new key , when capacity hasnt reached

    if (!this.map.has(key) && this.size < this.capacity) {

        const NewNode = new Node();
        NewNode.prev = null;
        if (!this.head) {
            NewNode.next = null;
            this.tail = NewNode;
        }
        else {
            NewNode.next = this.head;
            this.head.prev = NewNode;
        }
        this.head = NewNode;
        NewNode.key = key;
        NewNode.value = value;
        this.map.set(key, NewNode);
        this.size += 1;
    }
    //step4 end

    //step8 start
    else if (!this.map.has(key) && this.size === this.capacity) {
        //first delete the lru key from map and its node from dll
        let nodeToDel = this.tail;
        let keyToDel = nodeToDel.key;
        this.map.delete(keyToDel);
        this.removeNode(nodeToDel);

        this.size--;//size updated

        const NewNode = new Node();
        NewNode.prev = null;
        if (!this.head) {
            NewNode.next = null;
            this.tail = NewNode;
        }
        else {
            NewNode.next = this.head;
            this.head.prev = NewNode;
        }
        this.head = NewNode;
        NewNode.key = key;
        NewNode.value = value;
        this.map.set(key, NewNode);
        this.size += 1;
    }
    //step8 end

    //step 7 start
    //handling put when key already exists
    else {//map.has(key)===true , so we update the value of the key here
        let node = this.map.get(key);
        node.value = value;
        //now update the node's position in dll
        this.removeNode(node);
        this.addToFront(node);
    }

    //step7 end
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */