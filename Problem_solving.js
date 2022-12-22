
// Leap Year
const leapYear = (year) => {
    if ((year % 400 === 0 || year % 4 === 0) && (year % 100 !== 0)) {
        console.log(`${year} is Leap year`);
    }
    else {
        console.log(`${year} is not leap year`);
    }
}
leapYear(2020)

// Vowel





















// function timesTwo(params) { return params * 2 } function timesTwo(params) {
//     return params * 2
// }
// timesTwo(4);  // 8

// var timesTwo = params => params * 2

// timesTwo(4);  // 8
