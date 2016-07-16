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
		console.log("The value of i is: ", i, "and the value at Index is: ", valarray[i]);
		// console.log("The value at Index is: ", valarray[i]);
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


/*
`isNapTime`
Declare a variable named `isNapTime`. Set it to `false`

Declare a variable named `napSchedule`. Set it's value to be an `Array` with the values `[false, false, true, false, true, true]`

Declare a function named `nap`. This function takes in a single parameter called `schedule`

- If `schedule` is `true` then use `console.log` to display the message `ZzZzZzZz`
- otherwise if `schedule` is `false` use `console.log` to display the message `Gotta get to work!` and then change the value of `isNapTime` to `true`

Now, Write a FOR loop that iterates through the `napSchedule` array and runs the function `nap` while passing in the value at the current position of `napSchedule` into the `nap` function.

exmaple of output:

![example-2](https://s3.amazonaws.com/uploads.hipchat.com/54891/1222770/mpHi
*/

console.log("Excersise #6");

var isNapTime = false;
var napSchedule = [false, false, true, false, true, true];

function nap(schedule) {
	if (schedule === true) {
			console.log("ZzZzZzZz");
		}else{
			console.log("Gotta get to work!");
			isNapTime = true;
		}
}
for (var i = 0; i < napSchedule.length; i++) {
	nap(napSchedule[i]);
	// console.log(i, ": ", napSchedule[i]);
}
console.log("isNap", isNapTime);


/*
 `CopyArray - clone array values`
Declare a variable named `copyOfValuesArray` and set it's value to be an empty array, `[]`.

Declare a variable named `valuesArray` and set it's value to be an array, `[99, 66, 829, 1941, 8, 76]`.

Declare a function named `copyArray` which takes two arguments: `originArray` and `destinationArray`. 

Inside of this function you will loop through the contents of `originArray` and push each value into 
`destinationArray`.

To get started, below your function declaration, call your function and pass in the two variables, 
`valuesArray` and `copyOfValuesArray`. After that, use `console.log` to to inspect the values of `valuesArray` 
and `copyOfValuesArray` to make sure they have the same values (which means your function worked!).

*/

console.log("Excersise #7");

var copyOfValuesArray = [];
var valuesArray = [99, 66, 829, 1941, 8, 76];

function copyArray (originArray,destinationArray) {

	for (var i = 0; i < originArray.length; i++) {
		destinationArray.push(originArray[i]);
	}
}

copyArray(valuesArray,copyOfValuesArray);
console.log("source: ",valuesArray);
console.log("target: ",copyOfValuesArray);


/*
*
Final Boss

![final-boss](https://s3.amazonaws.com/uploads.hipchat.com/54891/2015941/zamX8AqbgYw0QJ8/giphy.gif)

## Stage 1 - Only String Values
Declare a variable named `miscStorage` set it's value to be: 
`[ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ]`

Declare a function named `generateArrayOfStrings` which takes a single argument `storage`. 
This function returns a new Array with only `String` values inside of it.

## Final Form - Change values of objects stored within an Array
It's that time again, we need to graduate the current class of students and start enrollment for the next class.

Declare a variable named `currentClass` and set it's value to be this 
[array found here](https://gist.github.com/sgnl/e40879b2249e06ca7811).

Declare a function named `graduateAndSetNewClass`, it takes a single argument called `class`.

Your function will iterate through the `class` argument and check each student's `enrolled` property.

If the `enrolled` property is set to `true` then change that student's `graduated` property to `true`. 
Otherwise, if `enrolled` is set to `false` then change `enrolled` to `true` leaving `graduated` alone 
and unchanged.

*/

console.log("Excersise #Final Boss - Stage 1");

var miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ];
var newArray = [];

function generateArrayOfStrings (storage) {
	for (var i = 0; i < storage.length; i++) {
		if ( typeof storage[i] === "string" ) {
			newArray.push(storage[i]);
		}
	}
}

generateArrayOfStrings(miscStorage);

console.log("source array: ", miscStorage);
console.log("array of string only: ", newArray);


console.log("Excersise #Final Boss - ");


var currentClass = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];

console.log("original objects: ", currentClass);

function graduateAndSetNewClass (classvalue) {
	for (var i = 0; i < classvalue.length; i++) {
		if (classvalue[i].enrolled === true) {
			classvalue[i].graduated = true;
		}else{ 
			classvalue[i].enrolled = true;
		}
	}
	// return currentClass;
}

graduateAndSetNewClass(currentClass);

console.log("overrided objects: ", currentClass);













































