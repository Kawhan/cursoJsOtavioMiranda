let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

let varAcopy = 'A';
let varBcopy = 'B';
let varCcopy = 'C';

varA = varBcopy;
varB = varCcopy;
varC = varAcopy;

// [varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);