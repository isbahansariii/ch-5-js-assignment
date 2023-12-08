// Math multiplication table

console.log("\n\nProject");

const multiplicationTable = [];
const num = 10;
for(let i=0; i<num; i++){
    const temp= [];
    for(let j=0; j<num; j++){
        temp.push(i*j);
    }
    multiplicationTable.push(temp);
}
console.table(multiplicationTable);