// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


function groupAnagrams(strs) {
    if(strs.length === 0) return [];

    const anagramMap = {};
    for(let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');
        if(!anagramMap[sorted]) {
            anagramMap[sorted] = [];
        }
        anagramMap[sorted].push(strs[i]);
    }

    return Object.values(anagramMap);
}

function groupAnagrams_Sol2(strs) {
    const anagramMap = new Map();
    for (const str of strs) {
        const charArr = new Array(26).fill(0);
        for (const char of str) {
            charArr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = charArr.join('#');
        if (!anagramMap.has(key)) anagramMap.set(key, []);
        anagramMap.get(key).push(str);
    }
    return Array.from(anagramMap.values());
}

console.log(groupAnagrams_Sol2(["eat","tea","tan","ate","nat","bat"]));