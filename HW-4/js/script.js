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

function getPairs(couple) {
    let Arr = [];
    Arr.push(add(couple[0], couple[2]));
    Arr.push(add(couple[1], couple[3]));
    Arr.push(add(couple[4], couple[5]));
    return Arr;
}

function PairAndThemes(couple, theme) {
    let Arr = [];
    Arr.push(add(couple[0] + " i " + couple[2], theme[0]));
    Arr.push(add(couple[1] + " i " + couple[3], theme[1]));
    Arr.push(add(couple[4] + " i " + couple[5], theme[2]));
    return Arr;
}
function getMarks(couple, mark) {
    let Arr = [];
    Arr.push(add(couple[0], mark[0]));
    Arr.push(add(couple[1], mark[1]));
    Arr.push(add(couple[2], mark[2]));
    Arr.push(add(couple[3], mark[3]));
    Arr.push(add(couple[4], mark[4]));
    Arr.push(add(couple[5], mark[5]));
    return Arr;
}
function getPairMarks(couple, theme) {
    let Arr = [];
    Arr.push(add(couple[0] + " i " + couple[2], theme[0], randomIntFromInterval(1, 5)));
    Arr.push(add(couple[1] + " i " + couple[3], theme[1], randomIntFromInterval(1, 5)));
    Arr.push(add(couple[4] + " i " + couple[5], theme[2], randomIntFromInterval(1, 5)));
    return Arr;
}
const pairs = getPairs(students);
const pair_and_theme = PairAndThemes(students, themes);
const student_marks = getMarks(students, marks);
const pair_marks = getPairMarks(students, themes);
console.log(pairs);
console.log(pair_and_theme);
console.log(student_marks);
console.log(pair_marks);