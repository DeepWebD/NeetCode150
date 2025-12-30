
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    const isAlphaNum = (ch) => {
        const code = ch.charCodeAt(0);
        return (code >= 48 && code <= 57) || // 0-9
               (code >= 65 && code <= 90) || // A-Z
               (code >= 97 && code <= 122);  // a-z
    };

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;
        if (left < right) {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }
    }
    return true;
};
console.log(isPalindrome("0P"));