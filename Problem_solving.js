
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
console.log(countVowels("Hi, I am Ariful Islam, a Full Stack Web Developer. I love to work with React js, Javascript, MongoDB, Express js, Node, Tailwind CSS, Bootstrap, React Bootstrap, and modern HTML. I have already done some projects about services, teaching, review, etc. I love to explore new technologies and work with them. I can work under pressure."));


















// function timesTwo(params) { return params * 2 } function timesTwo(params) {
//     return params * 2
// }
// timesTwo(4);  // 8

// var timesTwo = params => params * 2

// timesTwo(4);  // 8
