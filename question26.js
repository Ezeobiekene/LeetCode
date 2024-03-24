
// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.


//This is better for the language JavaScript
var removeDuplicates = function(nums) {

//looping through the array 
    for(let i = 1; i < nums.length; i++){
        //since the array is sorted then if any number is the same as the number before it then it is a duplicate
        if(nums[i] === nums[i-1]){
            //remove the duplicate
            nums.splice(i, 1)

            //decreament to reset the index counter because we removed an element
            i--
        }
    }

    return nums.length
};



//This is more accurate to the question
var removeDuplicates = function(nums) {
    //initialize the index variable
    let index = 1

    //loop through the array
    for(let i = 1; i < nums.length; i++){

        //if the current element is not the same as the previous element then it is not a duplicate
        if(nums[i] !== nums[i-1]){

            //set the current element to be in the index position
            nums[index] = nums[i]
            //increament the index for each unique element
            index++
        }
    }

    return index
};