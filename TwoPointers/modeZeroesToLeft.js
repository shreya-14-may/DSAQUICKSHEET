var moveZeroesLeft = function(nums) {
    let n = nums.length;
    let l = n-1;
    for(let right = n-1  ;right >=0  ; right --){
        if(nums[right] !==0){
            [nums[right],nums[l]] = [nums[l],nums[right]];
            l--
        }
    }
    return nums;
};

console.log(moveZeroesLeft([0,2,1,0,0,3,4,0,0]))

/* Dry Run

[0,2,1,0,0,3,4,0,0]
n = 9
lef = 8
rigt 8 , 

since arr[8] ==0 , [0,2,1,0,0,3,4,0,0]
right --

since arr[7] ==0 , [0,2,1,0,0,3,4,0,0]
right --    
now right = 6 , since again arr[6] != 0 , so swap arr[6] <=> arr[8]
o/p: [0,2,1,0,0,3,0,0,4]
right --  
left --
now right = 5 , left = 7, now arr[5 != 0] so swap arr[5] <=> arr[7]
o/P : [0,2,1,0,0,0,0,3,4]
right --  
left --

now right = 4 , left = 6 arr[4] ==0  , so same [0,2,1,0,0,0,0,3,4]
right --
now right = 3 , left = 6,  arr[4] ==0  , so same [0,2,1,0,0,0,0,3,4]
right --
now right = 2 , left = 6, arr[2]!= 0 so arr[2] <=> arr[6] , o/p: [0,2,0,0,0,0,1,3,4]
right --  
left --
now right = 1 , left = 5,arr[1]!= 0 so arr[1] <=> arr[5] , o/p: [0,0,0,0,0,2,1,3,4]
right --  
left --
now right = 0 , left = 4 , loops terminates


 Dry Run*/



 /*
 Pseudocode

 Initialization:

n: Length of the array nums.
l: Index to track the position where non-zero elements should be placed starting from the end of the array.
Loop through Array (from end to beginning):

Iterate through each element right in the array nums, starting from the last element and moving towards the first.
Condition Check:

If nums[right] is not equal to 0, indicating a non-zero element:
Swap nums[right] with nums[l].
Decrement l to move to the previous position where the next non-zero element should go towards the beginning of the array.
Return Result:

After iterating through the array and moving all non-zero elements to the right, while maintaining their relative order, nums will contain all zeroes moved to the left.


*/