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


// Check if all numbers are divisible by 5
const allDivisibleBy5 = [n1, n2, n3, n4].every(num => num % 5 === 0);
console.log(`All numbers divisible by 5: ${allDivisibleBy5}`);

// Check if the first number is larger than the last
const firstLargerThanLast = n1 > n4;
console.log(`First number larger than the last: ${firstLargerThanLast}`);

// Arithmetic chain
const arithmeticChainResult = ((n2 - n1) * n3) % n4;
console.log(`Arithmetic chain result: ${arithmeticChainResult}`);

// Change the way isOver25 calculates
function isOver25(value) {
    return value > 25;
}

// Example usage of isOver25
const sum = n1 + n2 + n3 + n4;
const over25 = isOver25(sum);
console.log(`Sum is over 25: ${over25}`);


// Part 2

const tripDistance = 1500; // Total distance in miles
const fuelBudget = 175; // Fuel budget in dollars
const fuelCostPerGallon = 3; // Cost of fuel per gallon in dollars

// Fuel efficiency at different speeds (in miles per gallon)
const fuelEfficiency = {
    55: 30,
    60: 28,
    75: 23
};

// Function to calculate fuel needed for the trip
function calculateFuelNeeded(distance, mpg) {
    return distance / mpg;
}

// Function to calculate fuel cost for the trip
function calculateFuelCost(gallons, costPerGallon) {
    return gallons * costPerGallon;
}

// Function to calculate trip duration
function calculateTripDuration(distance, speed) {
    return distance / speed;
}

// Function to compare results at different speeds
function compareSpeeds(speeds) {
    speeds.forEach(speed => {
        const gallonsNeeded = calculateFuelNeeded(tripDistance, fuelEfficiency[speed]);
        const fuelCost = calculateFuelCost(gallonsNeeded, fuelCostPerGallon);
        const tripDuration = calculateTripDuration(tripDistance, speed);
        const budgetSufficient = fuelCost <= fuelBudget;

        console.log(`At ${speed} mph:`);
        console.log(`  Gallons of fuel needed: ${gallonsNeeded.toFixed(2)} gallons`);
        console.log(`  Fuel cost: $${fuelCost.toFixed(2)}`);
        console.log(`  Is budget sufficient? ${budgetSufficient}`);
        console.log(`  Trip duration: ${tripDuration.toFixed(2)} hours`);
        console.log(); 
    });
}

// Compare results at 55, 60, and 75 mph
compareSpeeds([55, 60, 75]);

// Traveling at 60 is the most efficient