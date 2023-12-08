console.log("\n\n5.5");

const grid = [];
const cells = 64;
let Counter = 0;
let Row;
for (let x = 0; x < cells + 1; x++) {
 if (Counter % 8 == 0) {
 if (row != undefined) { 
 grid.push(Row);
 }
 Row = [];
 }
 Counter++;
 let temp = Counter;
 Row.push(temp);
}
console.table(grid);