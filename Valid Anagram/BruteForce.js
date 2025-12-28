// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

//Time Complexity: O(n^2) Space Complexity: O(1)
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    for(let char of s) {
        const index = t.indexOf(char);
        if (index === -1) {
            return false;
        }
        t = t.slice(0, index) + t.slice(index + 1);
    }
    return true;
}