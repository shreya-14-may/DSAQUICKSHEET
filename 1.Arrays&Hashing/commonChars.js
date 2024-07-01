// https://leetcode.com/problems/find-common-characters/description/

/*

Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

*/

/*

Initialize the Minimum Frequency Array: Create an array to keep track of the minimum frequency of each character across all strings.
Update Frequency Counts: Iterate through each string and update the minimum frequency array.
Construct the Result: Use the minimum frequency array to construct the list of common characters.

*/



/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {

    let minFrequency = new Array(26).fill(Infinity);
    
    // Function to get the character index (0 for 'a', 1 for 'b', ..., 25 for 'z')
    const getCharIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);


    // Update the minimum frequency array for each word

    for(word of words){
        let charFreq = new Array(26).fill(0);
        for(let char of word){
            charFreq[getCharIndex(char)]++
        }

        for(let i=0; i<26 ;i++){
            minFrequency[i] = Math.min(minFrequency[i],charFreq[i])
        }
    }

    //constructing common char result

    let res = [];

    for(let i=0 ; i < 26 ;i++){
        for(j = 0; j < minFrequency[i]; j++){
            res.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        }
    }

    return res;

    
};
