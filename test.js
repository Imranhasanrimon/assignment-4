function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }

    const netIncome = income - expenses;
    const tax = netIncome * .20;

    return tax;

}

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


console.log(waitingTime([7, 8, 3, 4, 5], "9"));