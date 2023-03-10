const correctName = function (name) {
    const mas = name.toLowerCase();
    return mas.charAt(0).toUpperCase() + mas.slice(1);
};

const numberInRange = function getRandomIntInRange(N, M) {
    return Math.floor(Math.random() * (M - N + 1)) + N;
};

function passwordGen(len) {
    let password = '';
    for (let i = 0; i < len; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
};
function palindromeFunc(str) {
    str = str.toLowerCase().replace(/[\W_.,]/g, '');
    return str == str.split('').reverse().join('');
}

function getMaxDigit(num) {
    let maxDigit = 0;
    const dig = num.toString().split('');
    dig.forEach(dig => {
        if (+dig > maxDigit) {
            maxDigit = +dig;
        }
    });
    return maxDigit;
}
function letterRepetition(word, letter) {
    let amount = 0;
    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) == letter) {
            amount = amount + 1;
        }
    }
    return amount;
};

document.writeln(
    "Function №1 : (нІКіТа) -> " + correctName("нІКіТа") + "<br><br>" +
    "Function №2 : Діапазон випадкового числа (5 , 25) , число - " + numberInRange(5, 25) + "<br><br>" +
    "Function №3 : Випадковий пароль з 6 цифр - " + passwordGen(6) + "<br><br>" +
    "Function №4 : Перевірка на паліндромність рядку 'Я несу гусеня' - " + palindromeFunc("Я несу гусеня") + "<br><br>" +
    "Function №5 : Найбільша цифра числа '57381' - " + getMaxDigit(57381) + "<br><br>" +
    "Function №6 : Кількість повторень букви 'р' в слові 'Трактор'  - " + letterRepetition("Трактор", "р")
);