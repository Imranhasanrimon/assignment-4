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

//Problem 10
function findOdd(arr) {
    let obj = {};
    for (let i of arr) {
        if (!obj.hasOwnProperty(i)) {
            obj[i] = 1;
        } else {
            obj[i] += 1;
        }
    }
    console.log(obj);

    for (let prob in obj) {
        if (obj[prob] % 2 !== 0) {
            return prob
        }
    }
}
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));