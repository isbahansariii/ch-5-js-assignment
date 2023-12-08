/*
Objective:
Increment the `counter` variable by `steps` in a do-while loop, logging the current value to the console until `counter` exceeds 100. Demonstrates the use of a do-while loop for controlled iteration.
*/
console.log("\n\n5.2");

let counter = 0;
let steps = 5;
do{
    console.log(counter);
    counter += steps;
}
while(counter <= 100);