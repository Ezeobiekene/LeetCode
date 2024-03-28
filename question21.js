// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


// Example 2:
// Input: list1 = [], list2 = []
// Output: []


// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]


var mergeTwoLists = function(list1, list2) {

    //dummy node to act as the first node in the list
    let dummyNode = new ListNode()

    //head pointer to easily locate the first Node of the list
    const head = dummyNode

    //while list one and two .next is not pointing to null perform the operations in the parenthese
    while(list1 && list2){
        //if list1 value is less than the list2 value
        if(list1.val < list2.val){
            //add list1 to the end of the dummyNode
            dummyNode.next = list1

            //move to the next node in list one for the next comparison
            list1 = list1.next
        }else{
        //else add list12 to the end of the dummyNode
            dummyNode.next = list2

        //move to the next node in list one for the next comparison
            list2 = list2.next
        }
        
        //move to the recently added node 
        dummyNode = dummyNode.next
    }
    if (list1) {
       //if there are still nodes left in list one then add them to the end of the dummyNode
       dummyNode.next = list1;
    }
    if (list2) {
         //if there are still nodes left in list two then add them to the end of the dummyNode
         dummyNode.next = list2;
    }

    // return the list excluding the head 
    return head.next
};