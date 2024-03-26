// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


var containsDuplicate = function(nums) {

//create an obj that goes through the nums array and keeps a count of how many times each element shows up
    let obj = nums.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})

    //If any number appears more that once the return true else default false
    for(let num in obj){
        if (obj[num] > 1){
            return true
        }
    }
    return false
};