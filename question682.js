// 682. Baseball Game

// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

 

// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.


var calPoints = function(operations) {
    let stack = [] //stack implemented with an array to store the scores

    for(let i = 0; i < operations.length; i++){ //loop through the operations array

        if(operations[i] === 'C'){ 
            //for the C operation pop the last element in the stack
            stack.pop()
        }else if(operations[i] === 'D'){
            //for the D operation add the last element of the stack multiplied by 2 to the stack 
            stack.push(stack[stack.length - 1] * 2)
        }else if(operations[i] === '+'){
            //for the + operation add the last two elements in the stack and push the sum to the stack
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        }else if(parseInt(operations[i])){
            //for integers the add the Number value of the string to the stack
            stack.push(parseInt(operations[i]))
        }
    }
 
    // return the sum of the stack using the reduce method
    return stack.reduce((acc, curr) => {
        acc += curr
        return acc
    }, 0)
};