// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


var majorityElement = function(nums) {

    //use the reduce method to count the frequecy of the elements in the nums array
    let counter = nums.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    },{})

    //decider is the nums length divided by two
    let decider = nums.length / 2

    //for each element in the counter obj, return the first one that occurs more times than the decider
    for(let ele in counter){
        if(counter[ele] > decider){
            return ele
        }
    }
};