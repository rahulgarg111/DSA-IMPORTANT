//time - O(n)
//space - O(1)

var canJump = function (nums) {
    let goodPosition = nums.length - 1
    for (let i = nums.length - 2; i >= 0; i--) {
        if (goodPosition - i <= nums[i]) {
            goodPosition = i
        }
    }
    return goodPosition == 0
};