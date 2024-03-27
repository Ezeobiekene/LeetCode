// 155. Min Stack

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2


var MinStack = function() {
    //create two stacks, one for operations and the other to keep track of the min value
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    //the push method will add the val to the main stack and add the min value at that time to the minStack
    this.stack.push(val)

    //this minStack is not empty and the val is greater or equals to the last element in the min stack then push the last element of the minstack into the min stack
    // else push the val into the min stack
    if(this.minStack.length !== 0 && val >= this.minStack[this.minStack.length - 1] ){
        this.minStack.push(this.minStack[this.minStack.length - 1])
    }else{
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */

//pop from both stacks
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
//top returns the last element in the main stack
MinStack.prototype.top = function() {
   return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
//getMin returns the last element in the minStack
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};
