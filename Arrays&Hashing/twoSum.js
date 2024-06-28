// https://neetcode.io/problems/two-integer-sum
// https://leetcode.com/problems/two-sum/description/


var twoSum = function(nums, target) {
    let ans = new Map();
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if(ans.has(diff)) {
            return [ans.get(diff), i];
        }
        ans.set(nums[i], i);
    }
};