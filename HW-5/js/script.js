export function HW5() {
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    function getRandomArray(length, min, max) {
        let array = []
        for (let i = 0; i < length; i++) {
            array.push(randomInteger(min, max));
        }
        return array;
    };

    // const numbers = [1, 2, 3, 4, 5, 6,]
    // const filterEvenNumbers = numbers.filter((number) => {
    //     return number % 2 == 1
    // })

    function filterEvenNumbers(...numbers) {
        return numbers.filter(num => num % 2 !== 0)
    };

    function countPositiveNumber(...numbers) {
        return numbers.filter(num => num > 0).length;
    };

    function getDividedByFive(...numbers) {
        return numbers.filter(num => num % 5 == 0)
    };

    function replaceBadWords(string) {
        const badWords = ["shit", "fuck"];
        const phrase = string.split(" ");
        const newWords = phrase.map((curVal) => {
            badWords.forEach((word) => {
                curVal = curVal.replace(word, '****');
            });
            return curVal;
        });
        return newWords.join(' ');
    }

    function getAverage(...numbers) {
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((prevValue, item) => prevValue + item);
        return sum / numbers.length;
    }

    console.log("Fifth Homework: ");
    console.log(getRandomArray(15, 1, 100));
    console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6,));
    console.log(countPositiveNumber(1, -2, 3, -4, -5, 6));
    console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
    console.log(replaceBadWords("Are you fucking kidding?"));
    console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
};
