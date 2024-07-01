//https://leetcode.com/problems/middle-of-the-linked-list/description/

/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/


var middleNode = function(head) {
    if(!head) return null;
    let p1 = head
    let p2 = head
    while(p2!= null && p2.next != null){
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return p1;
};