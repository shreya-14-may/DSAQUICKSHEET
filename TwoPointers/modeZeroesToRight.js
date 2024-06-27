var modeZeroesToRight = function(nums) {
    let n = nums.length;
    let l = 0;
    for(let right =0 ;right < n ; right++){
        if(nums[right] !==0){
            [nums[right],nums[l]] = [nums[l],nums[right]];
            l++
        }
    }
    return nums;
};
/*Dry Run
[0,1,0,3,12]
n = 5;
left =0 
right =0 

arr[0] ===0  so no change[0,1,0,3,12]
left ++

now left =0 , right =1 , 
arr[1] != 0 , so arr[1] <=> arr[0] ,  [1,0,0,3,12]
left ++
right++

now left =1, right =2
arr[2] ==0 sp no  change [1,0,0,3,12]

right++

now left =1 , right =3 
arr[3]!= 0 , so arr[3]<=> arr[1] , [1,3,0,0,12]

left ++ 
right++

now left = 2 , right =4

arr[4] != 0 , arr[4]<=> arr[2] , [1,3,12,0,0]
right++
left++

now right =5  loops ends
so o/p : [1,3,12,0,0]


*/

/*
PseudoCode

Initialization:

n: Length of the array nums.
l: Index to track the position where non-zero elements should be placed.
Loop through Array:

Iterate through each element right in the array nums.
Condition Check:

If nums[right] is not equal to 0, indicating a non-zero element:
Swap nums[right] with nums[l].
Increment l to move to the next position where the next non-zero element should go.
Return Result:

After iterating through the array and moving all non-zero elements to the left, while maintaining their relative order, nums will contain all zeroes moved to the right.


*/
