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

//Problem 11
function middleChar(string) {
    let midLength = Math.floor(string.length / 2);
    if (string.length % 2 !== 0) {
        return string[midLength]
    } else {
        return string.substr(midLength - 1, 2)
    }
}
console.log(middleChar('A'));
console.log('__________________________');

//Problem 12
function likes(arr) {
    if (arr.length === 0) {
        return 'no one likes this';
    } else if (arr.length === 1) {
        return arr[0] + ' likes this'
    } else if (arr.length === 2) {
        return arr[0] + ' and ' + arr[1] + ' like this';
    } else if (arr.length === 3) {
        return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
    } else {
        return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
    }
}
console.log(likes(['imran', 'masud', 'nazmul', 'saad', 'taijul']));
