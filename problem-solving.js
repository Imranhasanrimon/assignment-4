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

//Problem 13
function phoneNum(numArr) {
    const formate = `(${numArr.slice(0, 3).join('')}) ${numArr.slice(3, 6).join('')}-${numArr.slice(6).join('')}`
    return formate;
}
console.log(phoneNum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));


//Problem 14
function squareDigits(int) {
    const intString = int.toString();
    let output = '';
    for (let i of intString) {
        let square = parseInt(i) ** 2;
        output += square.toString();
    }
    return output

}
console.log(squareDigits(3212));

//Problem 15
function isSquare(int) {
    // return Math.sqrt(int) % 1 === 0;
    const sqrt = Math.sqrt(int)
    return sqrt === Math.floor(sqrt)
}
console.log(isSquare(26));

//Problem 16
function highAndLow(stringNum) {
    const strNumArr = stringNum.split(' ');
    let highNum = strNumArr[0];
    let lowNum = strNumArr[0];
    for (let i of strNumArr) {
        if (highNum < parseInt(i)) {
            highNum = i;
        }

        if (lowNum > parseInt(i)) {
            lowNum = i;
        }
    }

    return `${highNum} ${lowNum}`
}
console.log(highAndLow('0 -214 542'));

//Problem 19
function spinWords(string) {
    const strArr = string.split(' ');
    const newArr = [];
    for (let i of strArr) {
        if (i.length >= 5) {
            const wordArr = i.split('');
            let newWordArr = [];
            for (let i of wordArr) {
                newWordArr.unshift(i);
            }
            newArr.push(newWordArr.join(''))

        } else {
            newArr.push(i)
        }
    }
    return newArr.join(' ')
}

console.log(spinWords('This is another test'));


//Problem 20
function findShort(text) {
    const textArr = text.split(' ');
    let smallestWord = textArr[0];
    for (let i of textArr) {
        if (i.length < smallestWord.length) {
            smallestWord = i;
        }
    }
    return smallestWord.length;
}
console.log(findShort('i want to travel the world writing code one day'));
//Problem 22
function XO(string) {
    let totali = '';
    let totalx = '';
    for (let i of string) {
        if (i.toLowerCase() === 'o') {
            totali += i;
        } else if (i.toLowerCase() === 'x') {
            totalx += i;
        }
    }
    return totali.length === totalx.length;
}
console.log(XO('xo'));

//Problem 28
function isIsogram(string) {
    let newString = '';
    for (let i of string) {
        if (newString.includes(i.toLowerCase())) {
            return false;
        } else {
            newString += i;
        }
    }
    return true;
}
console.log(isIsogram(''));

//Problem 30
function duplicateCout(string) {
    const obj = {};
    for (let i of string) {
        if (!obj.hasOwnProperty(i.toLowerCase())) {
            obj[i.toLowerCase()] = 1;
        } else {
            obj[i.toLowerCase()] += 1;
        }
    }
    let multiple = '';
    for (let prop in obj) {
        if (obj[prop] >= 2) {
            multiple += prop;
        }
    }
    return multiple.length
}
console.log(duplicateCout('Indivisibilities'));

console.log('__________________________');
//Problem 31
function dupEncode(string) {
    let encode = '';

}