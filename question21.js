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

    let dummyNode = new ListNode()
    const dummy = dummyNode

    while(list1 && list2){
        if(list1.val < list2.val){
            head = list1
            dummyNode.next = list1
            list1 = list1.next
        }else{
            head = list2
            dummyNode.next = list2
            list2 = list2.next
        }
        dummyNode = dummyNode.next
    }
    if (list1) {
       dummyNode.next = list1;
    }
    if (list2) {
         dummyNode.next = list2;
    }

    return dummy.next
};