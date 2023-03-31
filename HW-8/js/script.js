class Student {
    #studentMarks = [5, 4, 4, 5];
    #isDismissed = false;
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }

    getInfo() {
        return console.log(`Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`);
    }

    getAverageMark() {
        return this.#studentMarks.reduce((a, b) => a + b, 0) / this.#studentMarks.length;
    }

    dismiss() {
        this.#isDismissed = true;
        console.log(`Студент виключений з ${this.university}`);
    }
    recover() {
        this.#isDismissed = false;
        console.log(`Студент поновлений в ${this.university}`);
    }
    get marks() {
        if (this.#isDismissed) {
            return null;
        } else { return this.#studentMarks; }

    }
    set marks(mark) {
        if (this.#isDismissed) {
            return console.log("Виключений з університету, не можна поставити оцінки");
        } else {
            this.#studentMarks.push(mark);
        }
    }
};

let student1 = new Student('ХНУ м.Хмельницький', 2, 'Біленький Олександр Олександрович');
student1.marks = 5;
console.log(student1.marks);
student1.getInfo();
student1.dismiss();
console.log(student1.marks);
student1.recover();
console.log(student1.marks);