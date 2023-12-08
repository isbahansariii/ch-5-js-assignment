console.log("\n\n5.4");

const Table = [];
let row=4, column=7;
let count = 0;

// crarting a table
for(let i=1; i<=row; i++){
    let tempTable = [];
    for(let j=1; j<=column; j++){
        count++;
        tempTable.push(counter);
    }
    Table.push(tempTable);
}
console.table(Table);