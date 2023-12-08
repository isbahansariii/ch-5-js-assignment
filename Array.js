/*
Objective:
The objective of this JavaScript code is to create and populate an array (myWork) with objects representing lessons. Each lesson object contains a name property in the format "Lesson i" and a status property determined by whether the lesson number is odd or even. The resulting array is then displayed in the console, providing a structured representation of lesson information with corresponding statuses.
*/
console.log("\n\n5.3");

// creating an array
const myWork = [];
for (let i = 0; i < 10; i++) {
    let status = i % 2 ? true : false;
    let temp = { name: `Lesson ${i}`, status: status };
    myWork.push(temp);
}

for (let i = 0; i < 10; i++) {
    console.log(myWork[i]);
}