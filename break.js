console.log("\n\n5.8 (b)");

let output = "";
let skipThis = 7;
for (let i = 0; i < 10; i++) {
 if (i === skipThis) {
 break;
 }
 output += i;
}
console.log(output);