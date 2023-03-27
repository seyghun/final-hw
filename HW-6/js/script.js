const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

const getSub = (student) => {
    const sub = Object.keys(student.subjects);
    return sub.map((sub) =>
        sub.charAt(0).toLocaleUpperCase() + sub.slice(1).replace("_", " ")
    );
};

console.log(getSub(students[1]));

const getAvgMark = (student) => {
    const subjects = Object.values(student.subjects);
    const marks = subjects.flat();
    const sumup = marks.reduce((old, cur) => old + cur, 0);
    const avg = sumup / marks.length;
    return avg.toFixed(2);
};

console.log(getAvgMark(students[1]));


const getStudentInfo = (student) => {
    const { name, course } = student;
    const avgMark = getAvgMark(student);
    return {
        name,
        course,
        avgMark,
    }
};

console.log(getStudentInfo(students[0]));


const getStudentNames = (student) => {
    return students
        .map((student) => student.name)
        .sort();
};

console.log(getStudentNames(students));

const getBestStudent = (students) => {
    let bestS = '';
    let bestAvgMark = 0;

    students.forEach((student) => {
        const avgMark = getAvgMark(student);
        if (avgMark > bestAvgMark) {
            bestAvgMark = avgMark;
            bestS = student.name;
        }
    });

    return bestS;
};

console.log(getBestStudent(students));

const calculateWordLetters = (word) => {
    const letters = {};

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (letters[letter]) {
            letters[letter]++;
        } else {
            letters[letter] = 1;
        }
    }

    return letters;
};

console.log(calculateWordLetters("трактор"));