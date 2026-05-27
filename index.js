let a = 3;
let b = 5;
let c ='';

let expressions = `
    a + b =  ${a + b};
    a - b = ${a - b};
    a * b = ${a * b};
    a / b = ${a / b};
    a % b = ${a % b};
    a += b = ${a += b};
    a -= b = ${a -= b};
    a *= b = ${a *= b};
    a /= b = ${a /= b};
    a %= b = ${a %= b};
    a == b = ${a == b};
    a != b = ${a != b};
    a > b = ${a > b};
    a < b = ${a < b};
    !a && !c = ${!a && !c};
    !a || !c = ${!a || !c}; 

`;

console.log(expressions);

let first_name = 'Rozit';
let last_name = 'Code';
let email = 'alei009@algonquinlive.com';
let output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

console.log(output);