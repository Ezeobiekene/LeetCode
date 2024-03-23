var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val){
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

//SOLUTION
var removeElement = function(nums, val) {
    let index = 0;

    //loop through the array
    for (let i = 0; i < nums.length; i++) {
        //if the current element is not the same as the given val
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    }

    //index would be the number of elements in the array that are not the val
    return index;
};