import JavaScript from './java-script';
import DynamicStyling from './dynamic-styling';
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from './todo/todo-item';
import TodoList from './todo/todo-list';

function Assignment3() {
    return (
        <div>
            <h1>Assignment 3</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <DynamicStyling/>
            <JavaScript />
        </div>
    );
}
export default Assignment3;
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);
const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);
const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);
let loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2)



var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped, blockScoped,
    constant1, numberArray1, stringArray1
];
console.log(
    "Working with Arrays\n" +
    "numberArray1 = " + variableArray1[3].join('') + "\n" +
    "stringArray1 = " + variableArray1[4].join('') + "\n" +
    "variableArray1 = " + variableArray1[0] + variableArray1[1] + variableArray1[2] + variableArray1[3].join('') + variableArray1[4].join('')
);

