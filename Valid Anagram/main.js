// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false


var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const myArray = Array(26).fill(0)

    for(let i = 0; i < s.length; i++) {
        myArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        myArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for(let count of myArray) {
        if(count !== 0) {
            return false;
        }
    }
    return true;
}