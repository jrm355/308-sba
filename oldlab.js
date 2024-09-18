
//Part 1 Refactoring Code ()
//Part 1
// Part1 Fizzbuzz
// prefferred method
// for (let i = 0; i < 101; i++)

// if ((i % 3 ==0) && (i%5==0)) {
//     console.log ("fizzbuzz")
// } else if (i % 5 ==0) {
//     console.log ("Buzz")
// } else if (i % 3 ==0 ) {
//     console.log ("fizz")
// } else {
//     console.log (i)
// }

// part 2 prime numbers
// preferred ethod
// for (let n =6 ; n < 60; n++)
// //statement does not work for numbers under 7, if not divisible of current variables it also 
// //does not work, so this would be very long to get to the larger numbers
//     if (n % 2 ==0) {
//         console.log (n)
//     } else if (n % 3 == 0) 
//         {
//         console.log (n)
//     } else if (n % 4 == 0 ) {
//         console.log (n)
//     } else if (n % 5 == 0 ) {
//         console.log (n)
//     } else if (n % 6 == 0) {
//         console.log (n)
//     } else if (n % 7 == 0 ) {
//         console.log (n)
//     } else {
//         console.log ("prime")
//         break
//     }

//part 3

// const str =`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// ''

// console.log(str)
// //after console log, and adding quotations and commas

// let CSV = ['ID,Name,Occupation,Age',
// '42,Bruce,Knight,41',
// '57,Bob,Fry Cook,19',
// '63,Blaine,Quiz Master,58',
// '98,Bill,Doctor’s Assistant,26']

// //each name cateregorized by index (top row is 0,1,2,3,4)

// CSV.forEach((CSV, i) => {
// 	console.log(i + ') ' + CSV);
// });

// console.log(CSV[0])
// //Store each “cell” of data in a variable.

// let cell0 = CSV[0]
// let cell1 = CSV[1]
// let cell2 = CSV [2]
// let cell3 = CSV [3]
// let cell4 = CSV [4]
// console.log(cell0, cell1, cell2, cell3, cell4)
//console.log (object.keys(CSV).length) // 4 cells per row

//part 2 expanding functionality
// can use logic
// Declare a variable that stores the number of columns in each row of data within the CSV.
//Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
  
const CSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// breaking the text into substrings using split function and into rows
const rows = CSV.split('\n');

const csvarray = []
//input into 2d array
for (let i=0; i<rows.length; i++) {

    const columns = rows[i].split(',');
    // rows are split into columns and stored in 2d array
    csvarray.push(columns);
}
// see results
console.log(csvarray)


//part 3 Transforming Data
//


// For each row of data in the result array produced by your code above, 
//      create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
//making headers into lowercase

// Input 2D array

// put headers into lowercase 
const headers = csvarray[0].map(header => header.toLowerCase());

//new array
const array2 = [];

// iteration and creation of object
for (let i = 1; i < csvarray.length; i++) {
    const row = csvarray[i];

    // new object
    const rowObject = {};
    for (let x = 0; x < headers.length; x++) {
        rowObject[headers[x]] = row[x];
    }

    // Add the object to the result array in the original order
    array2.push(rowObject);
}

// Print the result array
console.log(array2);

//part 4
//Remove the last element from the sorted array.
    let oldnames = array2.pop();
    console.log(oldnames)
    //Insert the following object at index 1:
    const newname = { id: '48', name: 'Barry', occupation: 'Runner', age: '25' };
    
    array2.splice(1, 0, newname);

   // Add the following object to the end of the array: pushing towards the end
    array2.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }
    )
    console.log(array2)
    //Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

    //new variable for age sum
let sum = 0;

// looping array to get the total of ages
for (let i= 0; i <array2.length; i++) {
    sum += Number(array2[i].age)
}

// dividing age by length of array
const avg = sum / array2.length;
console.log (avg)

//part 5
//As a final task, transform the final set of data back into CSV format.

const header = Object.keys(array2[0]);

// making new rows
const newrows = array2.map(obj => {
  return headers.map(header => obj[header]).join(",");
});

// combining headers and rows
const csv = [headers.join(","), ...rows].join("\n");
console.log(csv)


let result = []

try {
    
} catch (error) {
    
}