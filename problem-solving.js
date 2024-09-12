function greetings(name) {
    return `Hello, ${name} How are you doing todat?`
}
console.log(greetings("Imran"));

// problem two
function whatCentury(year) {
    return Math.ceil(year / 100)
}
console.log(whatCentury(2021));

//Problem three
function waterLtr(hours) {
    let perHourWater = 0.5;
    return Math.floor(perHourWater * hours)
}
console.log(waterLtr(12.3));