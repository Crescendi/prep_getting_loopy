// Do your work here

// Excersise Presidents - Accessing values in an Array

/*
* Declare a variable named `presidents` which contains the first 5 presidents' last names: `Washington`, `Adams`, `Jefferson`, `Madison`, `Monroe`.
*
* Now write a _FOR_ loop which iterates through this Array.
*
* Within the _FOR_ loop, use `console.log` to:
*
* - Log the value of `i`. Use a message like `Value of i is: ` and append the value of `i` to this String
* - Log what is at index `i` in the array. Use a message like `Value at Index is: ` and append the value stored within the Array at that index.
*
*`console.log` is a great tool to give you feed back about your loops and the data that you're working with. When all else fails use `console.log` to inspect and debug your code.
*
*Example:
*
*![example-1](https://s3.amazonaws.com/uploads.hipchat.com/54891/1222770/P3RrynvNpFvrlmr/upload.png)
*
**bonus:** could you take the code inside of this FOR loop and encapsulate it inside of a function called `printContent` and still achieve the same result? This new function should accept two parameters.
*/

var presidents = ["Washington","Adams","Jefferson","Madison","Monroe"];

console.log("Excersise #1");
for (var i = 0; i < presidents.length; i++) {
	console.log("The value of i is: ", i);
	console.log("The value at Index is: ", presidents[i]);
	}


// using function inside the for loop

var presidents = ["Washington","Adams","Jefferson","Madison","Monroe"];
var position = 0;
var valueAtPosition = "";


function printContent(valarray){
	console.log("Bonus: ");
	for (var i = 0; i < valarray.length; i++) {
		console.log("The value of i is: ", i);
		console.log("The value at Index is: ", valarray[i]);
	}
	return position,valueAtPosition;
}

printContent(presidents);


/*
* Declare a variable named stringOfNumbers and set it's value to '' (an empty String).
*
* Then write a FOR loop that appends a Number value to that string starting from 10 all the way up to and including 20.
*
* After the FOR loop, use console.log to inspect your variable. In the end your String should look like this 1011121314151617181920
*
* bonus: could you take the code inside of this FOR loop and encapsulate it inside of a function called appendToString and still achieve the same result?
*
*/


var stringOfNumbers = "";

console.log("Excersise #2");
for (var i = 10; i <= 20; i++) {
	stringOfNumbers = stringOfNumbers + i;
}

console.log(stringOfNumbers);



var stringOfNumbers = "";

console.log("Bonus: ");
function appendToString (numberFrom,numberTo) {
	for (var i = numberFrom; i <= numberTo; i++) {
	stringOfNumbers = stringOfNumbers + i;
}
	return stringOfNumbers;
}

console.log("Bonus string: ",appendToString(21,30));


/*
 *`Add only even numbrs to an array`
*  Declare a variable named `evenNumberArray`.
*
*  Use a _FOR_ loop to add only even numbers to an Array. Add `50` even numbers to the `evenNumberArray` starting with the value `0`.
*/


console.log("Excersise #3");
var evenNumberArray = [];

function pushEven (endval) {
	for (var i = 0; i < endval; i++) {
		if (i%2 === 0) {
			evenNumberArray.push(i);
		}
	}
	return evenNumberArray;
}

console.log("push even number to array: ", pushEven(11));


/*
`Accessing only the odd indexes of an Array - 'Not Even Brah'`
Someone forgot to fill out this array! Oh noes...

Declare a new variable named `oopsArray` set it's value to be: `[ 'turn' , , 'down' , , 'for' , , 'what' ]`

using a _FOR_ loop, add the string `'nope'` to every odd index.

Example result should look like:

```javascript
`[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]`
```

*/


console.log("Excersise #4");
var oopsArray = ["turn", ,"down", ,"for", ,"what"];

function addNope(valarray) {
	for (var i = 0; i < valarray.length; i++) {
		if (i%2 === 1) {
			valarray[i] = "nope";
			// ?valarray.splice(i,"Nope");
		}
	}
	return valarray;
}

console.log(addNope(oopsArray));

// var testArray = ["turn","nope","down","nope","what"];

// for (var i = 0; i < testArray.length; i++) {
// 	console.log(testArray[i]);
// }


/*

## 
console.log(`Going backw);ards?!`
Using a _FOR_ loop, iterate through the Array stored at `oopsArray` **backwards**. `console.log` each value in the Array.

example output:
```
what
nope
for
nope
down
nope
turn
*/

console.log("Excersise #5");

for (var i = oopsArray.length; i >= 0; i--) {
	console.log(oopsArray[i]);
}



















