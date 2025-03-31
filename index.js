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
// Write a function that counts the number of words in a given string.
function  wordCoun(str) {
    return str.trim().split(/\s+/).length;
}
console.log( wordCoun('hello world')); 
//Write a function that converts a string to snake_case
function toSnakeCase(str) {
    return str.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();
}
console.log(toSnakeCase('Hello Classification')); 
// Write a function that converts a string to camelCase.

function toCamelCase(str) {
    return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}
console.log(toCamelCase('hello_classification')); 