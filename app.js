/*
    Author: Diego Portella
    Desc: Working with functions
    Date: 12/14/2023
*/

/**
 * @description Log anything to the console
 * @param {*} obj The object to write to the console
 */

function l(obg) {
    console.log(obg);
}

l('Diego');

/**
 * This is a declarative function example with no parameters
 */

function doThings() {
    l('I do sttuf but have nothing to contribute or accept');
}

doThings();

let anothersum = add(4, 5);

l(anothersum);

/**
 * Add two Numbers
 * @param {number} value1 The first value
 * @param {number} value2 The second value
 * @returns {number} The answer value1 added to value2
 */

function add(value1, value2) {
    return parseFloat(value1) + parseFloat(value2);
}

let sum = add(2, 3);

l(sum);

/**
 * Subtract two numbers
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 * @returns {number} the difference between value1 and value2
 */
const subtract = function (value1, value2) {
    return value1 - value2;
}

let diff = subtract(11, 5);

l(diff)

/**
 * Multiplies two values
 * @param {number} value1 the second value
 * @param {number} value2 the second value
 * @returns {number} the product of value1 and value2
 */
const multiply = (value1, value2) => {
    return value1 * value2;
}

l(multiply(5,6));