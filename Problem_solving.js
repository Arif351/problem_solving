// 1. Leap Year
const leapYear = (year) => {
    if ((year % 400 === 0 || year % 4 === 0) && (year % 100 !== 0)) {
        console.log(`${year} is Leap year`);
    }
    else {
        console.log(`${year} is not leap year`);
    }
}
leapYear(2020)

// 2. Counting Vowel
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

const countVowels = sentences => {
    let count = 0;
    const letters = Array.from(sentences);
    letters.forEach(letter => {
        if (vowels.includes(letter)) {
            count++;
        }
    });
    return count;
}
console.log(countVowels("Hi, I am Ariful Islam, a Full Stack Web Developer."));


//  3. Find duplicate and unique numbers from array
// duplicate
const numbers = [1, 2, 3, 4, 2, 8, 4, 3, 9, 4, 5, 2, 6, 3, 4, 3, 4, 3, 3, 5, 4]

const duplicates = numbers.filter((duplicateNumber, index, array) => {
    return array.indexOf(duplicateNumber) !== index
})
console.log(duplicates);

// unique
const uniqueNumbers = numbers.filter((uniqueNumber, i, array) => {
    return array.indexOf(uniqueNumber) === i;
})
console.log(uniqueNumbers);


// 4. find random number

// const min = 2;
// const max = 8;
const getRandomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumbers(1, 9));


// 5. classification name with Alpabetic letter

const studentsName = ["Samir", "Arif", "Babar", "Tamim", "Kamal", "Choton", "Galib", "Yamin"]
console.log(studentsName.sort());


// 6. Classification Number with serial

const rollNumbers = [2, 4, 1, 6, 3, 6, 9, 5, 8, 7]

console.log(rollNumbers.sort(function (a, b) {
    // [for ascending]
    return a - b;

    // [for decending]
    // return b - a;
}));

















// ---------------------------------------------------------------

// function timesTwo(params) { return params * 2 } function timesTwo(params) {
//     return params * 2
// }
// timesTwo(4);  // 8

// var timesTwo = params => params * 2

// timesTwo(4);  // 8
