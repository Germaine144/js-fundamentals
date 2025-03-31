//Write a function that capitalizes the first letter of a string.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('hello world')); // Output: Hello World
//Write a function that reverses a given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello world')); 
//Write a function that checks if a string is a palindrome

function isPalindrome(str) {
    return str === reverseString(str);
}
console.log(isPalindrome('racecars')); 
