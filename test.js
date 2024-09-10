function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0) {
        return "Invalid Input";
    }

    const netIncome = income - expenses;
    const tax = netIncome * .20;

    if (tax < 0) {
        return "Invalid Input";
    }
    return tax;

}

function sendNotification(email) {

    if (!email.includes('@')) {
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

    if (typeof obj !== 'object') {
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

    let totalwaitingTimes = 0;

    for (let i of waitingTimes) {
        totalwaitingTimes += i;
    }

    const avgTime = totalwaitingTimes / waitingTimes.length
    console.log(Math.round(avgTime));
}
console.log(waitingTime([3, 5, 7, 11, 6], 10));