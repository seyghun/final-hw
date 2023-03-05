let num_N = +prompt("Введіть число N :");
let num_M = +prompt("Введіть число M :");
let paired_num = confirm("Чи потрібно проспускати парні числа?");
let total = 0;

if (!(Number.isInteger(num_N))) {
    alert("Число N не підходить");
} else if (!(Number.isInteger(num_M))) {
    alert("Число M не підходить");
} else if (num_M < num_N) {
    alert("Операція неможлива");
}

if (paired_num == true) {
    for (i = num_N; i <= num_M; i++) {
        if (i % 2 == 0) continue;
        total = total + i;
    }

} else {
    for (i = num_N; i <= num_M; i++) {
        total = total + i;
    }
}

document.writeln("Початкове число : ", num_N, "<br></br>");
document.writeln("Кінцеве число : ", num_M, "<br></br>");
document.writeln("Результат : ", total);
console.log("Початкове число : ", num_N);
console.log("Кінцеве число : ", num_M);
console.log("Чи потрібно пропускати парні числа : ", paired_num);
console.log("Результат : ", total);

