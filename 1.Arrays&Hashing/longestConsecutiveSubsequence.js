// https://neetcode.io/problems/longest-consecutive-sequence

/*
Given an array of integers nums, return the length of the longest consecutive sequence of elements.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

You must write an algorithm that runs in O(n) time.

*/



/*kartikey solution
https://www.youtube.com/watch?v=vB-WJGM53Mo&t=2834s
hour 1 hour time
*/

longestConsecutive(nums) {
        let n = nums.length;
        if( n == 0) return 0;
        const numHash = new Map();
        
        for(let num of nums){
            numHash.set(num,true)
        }
        for(let i = 0 ; i< n ; i++){
            let diff = nums[i]-1;
            if(numHash.has(diff)){
                numHash.set(nums[i],false);
            }
        }
        let ans =1;
        for(let i=0 ; i < n ; i++){
            let val = numHash.get(nums[i]);
            if(val == true){
                let tempAns = 1;
                let key = nums[i];
                while(numHash.has(key+1)){
                    tempAns++;
                    key++
                }
                ans = Math.max (ans,tempAns)
            }
        }
        return ans;

    }
}
