//https://leetcode.com/problems/is-subsequence/description/


/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


*/




var isSubsequence = function(s, t) {
    if(s.length == 0) return true;
    let x =0;

    for(let i=0 ; i< t.length; i++){
        if(s.charAt(x) == t.charAt(i)){
            x++
        }
        if(x == s.length) return true;
    }
    return false;
    
};

/*()

x=0; s[0] === t[0] === a increment x &t
x=1;s[1]!= t[1]   increment only t
x=1, s[1] = t[2] ==b  increment x &t
x=2 , s[2] != t[3] increment only t
x=2 , s[2] != t[4] increment only t
x=2 , s[2]==t[5] ==c  increment x &t
x=3 ,t-6
x = s.length =3 so return true;
*/





let s = "abc";
let t = "ahbgdc";


console.log(isSubsequence(s,t))
