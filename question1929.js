// 1929. Concatenation of Array

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.


var getConcatenation = function(nums) {
    //to duplicate the nums array by adding it to itself
    let ans = nums.concat(nums)

    //return the doubled array
    return ans
};



//This is the more accurate method for the question
var getConcatenation = function(nums) {
    let ans = []
    let n = nums.length 

    //for the length of the nums array add ans[i + n] = nums[i] and ans[i] = nums[i]
    for(let i = 0; i < n; i++){
        ans[i + n] = nums[i]
        ans[i] = nums[i]
    
    }
    //return the new array
    return ans
};