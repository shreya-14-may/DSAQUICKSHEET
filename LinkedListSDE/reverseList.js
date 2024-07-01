// https://leetcode.com/problems/reverse-linked-list/description/


//withspace complexity
var reverseList = function(head) {
    let prev =null;
    let current = head;
    let next = null;

    while(current !== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

//without space complexity
//recursively

var reverseList = function(head) {
    let stack =[];

    

}