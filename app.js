// Part one 

let n1 = 11
let n2 = 13
let n3 = 12
let n4 = 14

// here I console log the resul to make sure it equals to 50  

console.log( n1+n2+n3+n4)

// Here I created a function to check if there's 2 odd numbers

function twoOddNumbers(n1, n2, n3, n4) {
    const numbers = [n1, n2, n3, n4];
    const oddCount = numbers.filter(num => num % 2 !== 0).length;
    return oddCount >= 2;
}

console.log(twoOddNumbers(n1, n2, n3, n4));