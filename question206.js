// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]


// Example 3:
// Input: head = []
// Output: []


var reverseList = function(head) {

    //variable to store the previous node
    let prev = null;

    //curr to store the working variable
    let curr = head;

    /*
   while current is not null, set curr.next to the prev to make it point to the node before it
    then set prev to curr and set curr to the next node stored in nextTemp
   */
    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};