//Numbers
const one = 1;

//Strings
const email = "williamrshepherd@gmail.com";

//Booleans
const t = true;

//Arrays
const arr = ["William", "Wanjun"];
const firstItem = arr[0];

//Objects
const obj = {
  key: "Value",
  "favorite Color": "blue"
};

//Accessing properties on objs
obj["favorite Color"]; /*?*/
obj.key; /*?*/

//Functions

//named function
function foo() {
  return "TypeScript";
}

//anonymous function
const bar = function(a: number, b: number): number {
  return a | b;
};

bar(5, 2); /*?*/

const bar2 = (a: number, b: number) => a | b;

bar2(8, 3); /*?*/
