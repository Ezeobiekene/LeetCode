
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