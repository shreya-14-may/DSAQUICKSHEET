
// https://www.geeksforgeeks.org/problems/maximum-occuring-character-1587115620
/*
Given a string str of lowercase alphabets. The task is to find the maximum occurring character in the string str. If more than one character occurs the maximum number of time then print the lexicographically smaller character.

*/


//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let s = input_line[0];
        let obj = new Solution();
        let ans = obj.getMaxOccuringChar(s);
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} str
 * @returns {string}
*/
class Solution 
{
    //Function to find the maximum occurring character in a string.
    getMaxOccuringChar(str)
    {
        // code here
        let map = new Map();
        let ans;
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            let charCount = (map.get(str[i]) || 0) + 1;
            map.set(str[i], charCount);
            if (charCount > count || (charCount === count && str[i] < ans)) {
                ans = str[i];
                count = charCount;
            }
        }
        return ans;
    }
}