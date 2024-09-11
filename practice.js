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