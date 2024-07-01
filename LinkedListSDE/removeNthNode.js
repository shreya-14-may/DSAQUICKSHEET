// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

var removeNthFromEnd = function(head, n) {

    let temp = new ListNode(0);
    temp.next = head;
    let first = temp, second = temp;

    for(let i=0 ; i<=n ;i++){
        first = first.next;
    }
    while(first !=null){
        first = first.next; 
        second = second.next;
    }

    second = second.next.next;
    return temp.next;


}