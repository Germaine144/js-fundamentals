//Write a function that capitalizes the first letter of a string.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('hello world')); // Output: Hello World
