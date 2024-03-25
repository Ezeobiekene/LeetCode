// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


var isValid = function(s) {
    //an object of pairs
    let obj = {
          '{': '}',
          '(':')',
          '[':']'   
    }

    //stack to keep track of the parentheses
        let stack = []
        
        //convert string to array of characters
        s = s.split('')

        //if the length of the array is an odd number we return false 
       if (s.length % 2 === 1) return false

       //if the array starts with a closing perentheses we return false 
       if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false

       //if the array ends with an opening parentheses we return false
       if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false

       //for every char in the array s
        for (let char of s){
            //if char is an opening parentheses ...
            if(char === '{' || char === '(' || char === '['){
                //then push the char to the stack
                stack.push(char)
            }else if (char !== obj[stack.pop()]){ //else if char is not the pair of the last element in the stack return  false
                return false
            }
        }
        //when the entire stack has been processed and popped and no false is found, return true
        return stack.length === 0 
};