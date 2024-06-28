// https://neetcode.io/problems/products-of-array-discluding-self


    var productExceptSelf = (nums) => {
        let res =[];
        let prefix = 1;
        let postfix =1 ;

        for(let i =0 ; i <nums.length ; i++){
            res[i] = prefix;
            prefix *= nums[i];
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            postfix *= nums[i+1];
            res[i] *= postfix;
        }
        return res;

    }


console.log(productExceptSelf([1,2,3,4]))