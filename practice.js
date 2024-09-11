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