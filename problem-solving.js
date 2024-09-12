// Problem 4
function greetings(name) {
    return `Hello, ${name} How are you doing todat?`
}
console.log(greetings("Imran"));

// problem 5
function whatCentury(year) {
    return Math.ceil(year / 100)
}
console.log(whatCentury(2021));

//Problem 6
function waterLtr(hours) {
    let perHourWater = 0.5;
    return Math.floor(perHourWater * hours)
}
console.log(waterLtr(12.3));

//Problem 7
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else return false;
}
console.log(isDivisible(12, 3, 4));

//Problem 9
function disEmvowel(string) {
    let newString = ''
    for (let i of string) {
        if (!'aeiou'.includes(i.toLowerCase())) {
            newString += i;
        }
    }
    return newString
}
console.log(disEmvowel('This website is for losers LOL!'));