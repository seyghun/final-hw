const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
    "Диференційне рівняння",
    "Теорія автоматів",
    "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function add(...arguments) {
    return [...arguments];
}

const getPairs = (students) => {
    let girls = [];
    let boys = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].endsWith("а")) {
            girls.push(students[i])
        } else {
            boys.push(students[i])
        }
    }
    const pairs = [];
    for (let i = 0; i < boys.length; i++) {
        pairs.push([boys[i], girls[i]]);
    }
    return pairs;
};

const studentsPaired = getPairs(students);
console.log(studentsPaired);

const getThemes = (studentsPaired, themes) => {
    const getThemesForPairs = [];
    for (let i = 0; i < studentsPaired.length; i++) {
        getThemesForPairs.push([studentsPaired[i].join(" i "), themes[i]]);
    }
    return getThemesForPairs;
}

const getThemeForPairs = getThemes(studentsPaired, themes);
console.log(getThemeForPairs);

const getMarks = (students, marks) => {
    let arr = [];
    for (let i = 0; i < students.length; i++) {
        arr.push([students[i], marks[i]]);
    }
    return arr;
}
const studentsMarks = getMarks(students, marks);
console.log(studentsMarks);

const getPairMarks = (getThemeForPairs) => {
    let arr = [];
    for (let i = 0; i < getThemeForPairs.length; i++) {
        arr.push([getThemeForPairs[i], (randomIntFromInterval(1, 5))]);
    }
    return arr;
}

const MarksForPairs = getPairMarks(getThemeForPairs);
console.log(MarksForPairs);