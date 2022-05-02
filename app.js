//Section 1
// ? Question 1:Multi dimensional Arrays

var arr = [[1, 2, 3],[4, 5, 6],7,8,9,[[10, 11, 12, [13, 4, 112]], 136, 14],];
var arr1 = arr[5][0][0];
var arr2 = arr[3];
var arr3 = arr[5][0][3][0];
var arr4 = arr[5][1];
var arr5 = arr[1][0];
var array = [arr1,arr2,arr3,arr4,arr5]
// *print out these numbers (10,8,13,136 and 4)from the array provided above
console.log(array);



//?Question2: Fill in the blank spaces with the elements in the sentence array
// *I am a ______ developer at ________ and i love ______________
var sentence = ["javascript", "web", "Capacity Bay"];
var display = ("I am a "+ sentence[1] + " developer at " + sentence[2] + " and I love " + sentence[0]);
console.log(display);



// ?Question 3 : Use the bracket notation to print out 4th to the last character of "Generalization"
let char = "Generalization";
let lastFour = char.slice(3);
console.log(lastFour);



// ? Question 4 : Create an array and populate it with these strings
let fruits =["orange", "apple", "guava", "lemon"];
// Add these strings at the beginning of the array you created above
fruits.unshift("pea", "banana");
console.log (fruits);
// Add these strings at the end of the array you created above.
fruits.push("Avocado", "mango");
console.log(fruits);


// Section 2: Fizz Buzz Game
// Section 2 is in my HTML