/*
IMP METHOD - map.keys().next().value; 
gives the value of the key in map as per insertion order in O(1) time.
MORE ON - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
*/

var isNStraightHand = function (hand, groupSize) {
    let n = hand.length;
    if (n % groupSize !== 0) return false;
    let arr = hand.sort((a, b) => a - b);
    let map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }
    let count = 0;
    let prev;
    while (count < n) {
        if (count % groupSize === 0) {
            prev = map.keys().next().value;
            count++;
            map.set(prev, (map.get(prev) || 0) - 1);
            if (map.get(prev) === 0) {
                map.delete(prev);
            }
        }
        else {
            if (!map.has(prev + 1)) return false;
            else {
                map.set(prev + 1, (map.get(prev + 1) || 0) - 1);
                if (map.get(prev + 1) === 0) {
                    map.delete(prev + 1);
                }
                count++;
                prev++;
            }
        }

    }
    return true;
};
