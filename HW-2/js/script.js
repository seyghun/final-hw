export function HW2() {
    let num_N = +prompt("Введіть число N :");
    let num_M = +prompt("Введіть число M :");
    let paired_num = confirm("Чи потрібно проспускати парні числа?");
    let total = 0;

    while (!(Number.isInteger(num_N)) || num_N < 0) {
        num_N = +prompt("Число N не підходить , спробуйте ще раз");
    }
    while (!(Number.isInteger(num_M)) || num_M < 0) {
        num_M = +prompt("Число M не підходить , спробуйте ще раз");
    }
    while (num_M < num_N) {
        alert("Операція неможлива");
        num_N = +prompt("Введіть число N :");
        num_M = +prompt("Введіть число M :");
        paired_num = confirm("Чи потрібно проспускати парні числа?");
    }

    if (paired_num == true) {
        for (let i = num_N; i <= num_M; i++) {
            if (i % 2 == 0) continue;
            total = total + i;
        }

    } else {
        for (let i = num_N; i <= num_M; i++) {
            total = total + i;
        }
    }
    console.log("Second Homework: ");
    document.writeln("Second Homework:", "<br></br>");
    document.writeln("Початкове число : ", num_N, "<br></br>");
    document.writeln("Кінцеве число : ", num_M, "<br></br>");
    document.writeln("Результат : ", total);
    console.log("Початкове число : ", num_N);
    console.log("Кінцеве число : ", num_M);
    console.log("Чи потрібно пропускати парні числа : ", paired_num);
    console.log("Результат : ", total);

};