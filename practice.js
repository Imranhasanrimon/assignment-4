function waitingTime(waitingTimes, serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || waitingTimes.length <= 0) {
        return "Invalid Input";
    }

    let totalwaitingTimes = 0;

    for (let i of waitingTimes) {
        totalwaitingTimes += i;
    }

    const avgTime = Math.round(totalwaitingTimes / waitingTimes.length);
    const mySerial = serialNumber - 1;
    const remainingCandidate = mySerial - waitingTimes.length
    const requiredTime = avgTime * remainingCandidate;

    return requiredTime;
}

function calculateFinalScore(obj) {

    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }

    let ffScore = 0;
    if (obj.isFFamily === true) {
        ffScore = 20;
    }

    const totalScore = obj.testScore + obj.schoolGrade + ffScore;

    if (totalScore >= 80) {
        return true
    } else {
        return false
    }

}

// today's payable 
function todayPayable() {
    const biriyani = 180;
    const ghol = 25;
    const transportationCost = 50;
    const totalCost = biriyani + ghol + transportationCost;
    return totalCost;
}
console.log(todayPayable());

//occurrance of a specific element
function occurrance(target) {
    const arr = [20, 30, 20, 50, 40, 60, 50]
    let count = 0;
    for (let i of arr) {
        if (i === target) {
            count++;
        }
    }
    return count;
}
console.log(occurrance(20));

// removing space of a string
function spaceRemove(string) {
    const strArr = string.split(' ').join('')
    return strArr;
}
console.log(spaceRemove('imran hasan rimon'));

//average price 
function findAveragePhonePrice(arr) {
    let totalPrice = 0;
    for (let i of arr) {
        totalPrice += i.price
    }
    const avg = totalPrice / arr.length
    return avg
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 5000 },
    { model: "PhoneB", brand: "Samsung", price: 4000 },
    { model: "PhoneC", brand: "Oppo", price: 6000 },
    { model: "PhoneD", brand: "Nokia", price: 5000 },
    { model: "PhoneE", brand: "Iphone", price: 5000 },
    { model: "PhoneF", brand: "HTC", price: 8000 },
];

console.log(findAveragePhonePrice(phones));

//generating random number
const randomNum = Math.floor((Math.random() * 10) + 11)
console.log(randomNum);

function sendNotification(email) {
    let count = 0;

    for (let i of email) {
        if (i === '@') {
            count++;
        }
    }

    if (!email.includes('@') || count > 1) {
        return "Invalid Email";
    }

    const indexOfAdd = email.indexOf('@');
    const userName = email.slice(0, indexOfAdd);
    const domainName = email.slice(indexOfAdd + 1);
    const message = `${userName} sent you an email from ${domainName}`;

    return message;

}

function checkDigitsInName(name) {

    if (typeof name !== 'string') {
        return "Invalid Input"
    }

    let output = false;

    for (let i of name) {

        if (!isNaN(i)) {
            output = true;
            break;
        }

    }

    return output;

}