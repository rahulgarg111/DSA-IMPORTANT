//can refer main acc claude chat - https://claude.ai/chat/f0852398-27be-4359-9687-eb7fb22a2e1d

//step1 and step2 starts
class Bucket {
    constructor(freq) {
        this.freq = freq;
        this.set = new Set();
        this.next = null;
        this.prev = null;
    }
}

var AllOne = function () {
    this.map1 = new Map();
    this.map2 = new Map();

    //VERY IMPORTANT , DUMMY POINTERS , GENIUS->

    // we are making a dummy head , to avoid a lot of edge cases check , as now with this 
    // dummy head we know the min will always be at .next of this dummy head.
    //head of dll tracks min , so when we call getMin , we look at head.next of dll
    this.head = new Bucket(0);

    // we are making a dummy tail, to avoid a lot of edge cases check, as now with this 
    // dummy tail we know the max will always be at .prev of this dummy tail.
    // tail of dll tracks max, so when we call getMax, we look at tail.prev of dll
    this.tail = new Bucket(Infinity);

    this.head.next = this.tail;
    this.tail.prev = this.head;
};
//step1 and step2 ends

//step3 starts
//creating a new bucket , given the prevBucket and the freq for this current bucket which we have 
//to create
AllOne.prototype.addBucket = function (prevBucket, freq) {
    let bucket = new Bucket(freq);
    bucket.prev = prevBucket;
    bucket.next = prevBucket.next;
    if (prevBucket.next) {
        prevBucket.next.prev = bucket;
    }
    prevBucket.next = bucket;
    //setting map2 with freq and bucket
    this.map2.set(freq, bucket);
}
//step3 ends

//step4 starts
AllOne.prototype.removeBucket = function (currBucket) {
    if (currBucket.set.size === 0) {
        //empty set , remove the bucket
        currBucket.prev.next = currBucket.next;
        currBucket.next.prev = currBucket.prev;
        currBucket.prev = null;
        currBucket.next = null;
        this.map2.delete(currBucket.freq);
    }
}
//step4 ends

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
    //step5 starts

    this.map1.set(key, (this.map1.get(key) || 0) + 1);
    let currfreq = this.map1.get(key);

    if (currfreq === 1) {//new key added 
        if (this.map2.has(1)) {
            this.map2.get(1).set.add(key);
        }
        else {
            this.addBucket(this.head, 1);
            this.map2.get(1).set.add(key);
        }
    }
    else {//currfreq>1
        if (this.map2.has(currfreq)) {
            this.map2.get(currfreq).set.add(key);
        }
        else {
            this.addBucket(this.map2.get(currfreq - 1), currfreq);
            this.map2.get(currfreq).set.add(key);
        }
        //remove key from currfreq-1 set , and if that set gets empty remove the bucket as well 
        this.map2.get(currfreq - 1).set.delete(key);
        this.removeBucket(this.map2.get(currfreq - 1));
    }
    //step5 ends
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
    //step6 starts
    let oldfreq = this.map1.get(key);
    this.map1.set(key, (this.map1.get(key)) - 1);
    let currfreq = this.map1.get(key);
    if (currfreq === 0) this.map1.delete(key);

    //add to new bucket
    if (currfreq > 0) {
        if (!this.map2.has(currfreq)) {
            this.addBucket(this.map2.get(oldfreq).prev, currfreq);//IMP LINE 
        }
        this.map2.get(currfreq).set.add(key);
    }

    //clear old freq from set
    this.map2.get(oldfreq).set.delete(key);
    if (this.map2.get(oldfreq).set.size === 0) {
        this.removeBucket(this.map2.get(oldfreq));
    }
    //step6 ends
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
    //If no keys exist, return an empty string
    if (this.tail.prev === this.head) {
        return '';
    }
    else {
        return this.tail.prev.set.values().next().value;//imp set method
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {

    //If no keys exist, return an empty string
    if (this.head.next === this.tail) {
        return '';
    }

    else {
        return this.head.next.set.values().next().value;//imp set method
    }

};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */