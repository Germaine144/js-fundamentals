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
//Write a function that finds the longest word in a given string.
function longestWord(str) {
    return str.split(' ').reduce((longest, current) => (current.length > longest.length)? current : longest, '');
}
console.log(longestWord(' laid out')); 
// Write a function that counts the number of times a specific letter appears in a string

function countLetter(str, letter) {
    return str.toLowerCase().split(letter.toLowerCase()).length - 1;
}
console.log(countLetter('umuhire', 'u')); 
// Array Transformations
//Write a function that doubles every number in an array.
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}
console.log(doubleNumbers([1, 2, 3, 4])); 
//Write a function that filters out even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2!== 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); 
//Write a function that calculates the sum of all numbers in an array

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(`Sum of all numbers in an array ${sumArray([1, 2, 3, 4, 5,30,40])}`);
// Write a function that calculates the average of all numbers in an array

function averageArray(arr) {
    return sumArray(arr) / arr.length;
}
console.log(`Average of all numbers in an array ${averageArray([1, 2, 3, 4, 5,30,40])}`);
// Write a function that returns the largest number in an array

function findMax(arr) {
    return Math.max(...arr);
}
console.log(`Largest number in an array ${findMax([1, 2, 3, 4, 5,30,40])}`);
// Write a function that returns the smallest number in an array.

function findMin(arr) {
    return Math.min(...arr);
}
console.log(`Smallest number in an array ${findMin([1, 2, 3, 4, 5,30,40])}`);
//– Write a function that removes duplicate values from an array

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5])); 
//Write a function that returns the index of a given value in an array (or -1 if not found)

function findIndex(arr, value) {
    return arr.indexOf(value);
}
console.log(findIndex([1, 2, 3, 4, 5], 3)); 
//Object Transformations
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
console.log(fullName({ firstName: 'John', lastName: 'Doe' })); 
//. isAdult(person) – Write a function that checks if a person is 18 or older (given property age).
function isAdult(person) {
    return person.age >= 18;
}
console.log(isAdult({ age: 25 })); 
// filterByAge(people, minAge) – Write a function that filters an array of person objects to keep only those who are at least minAge years old.
function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}
console.log(filterByAge([{ age: 12 }, { age: 25 }, { age: 30 }] ,18)); 
// Write a function that adds a new property to an object.
function addProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}
console.log(addProperty({}, 'name', 'new vision'));
// Write a function that checks if an object has a specific property.

function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}
const person = { name: "Alice", age: 25, city: "New York" };

console.log(hasProperty(person, "age")); 
console.log(hasProperty(person, "gender")); 

// deleteProperty(obj, key) – Write a function that deletes a specific property from an object.
function deleteProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
        delete obj[key];
        return true; // Property was deleted
    }
    return false; // Property didn't exist
}
const persons = { name: "Alice", age: 25, city: "New York" };

console.log(deleteProperty(persons, "age"));  // Output: true
console.log(persons); // Output: { name: "Alice", city: "New York" }

console.log(deleteProperty(persons, "gender")); // Output: false (property doesn't exist)
//countProperties(obj) – Write a function that returns the number of properties in an object

function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(countProperties({ name: "Alice", age: 25, city: "New York" })); // Output: 3
//Function Composition & Higher-Order Functions

