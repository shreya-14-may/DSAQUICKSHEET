// https://neetcode.io/problems/duplicate-integer
// https://leetcode.com/problems/contains-duplicate/description/
/*
Duplicate Integer
Solved 
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashMap = new Map();
        for(let num of nums){
            if(hashMap.has(num)){
                hashMap.set(num , hashMap.get(num)+1);
                return true;
            }else{
                hashMap.set(num , 1)
            }
        }
        return false;
    }
}
