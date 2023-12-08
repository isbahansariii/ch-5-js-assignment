console.log("\n\n5.8 (a)");

let Output = ""; 
let skip_this = 7; 
for (let i = 0; i < 10; i++) { 
 if (i === skip_this) { 
 continue; 
 } 
 Output += i; 
} 
console.log(Output);