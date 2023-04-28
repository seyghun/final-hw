export function HW7() {
    console.log("Seventh Homework: ");
    const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
    const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
    const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    function getMyTaxes(salary) {
        const taxes = this.tax * salary
        return taxes
    };

    console.log(getMyTaxes.call(ukraine, 2000));

    function getMiddleTaxes() {
        const middleTax = this.tax * this.middleSalary;
        return middleTax;
    };

    console.log(getMiddleTaxes.call(ukraine));

    function getTotalTaxes() {
        const totalTaxes = this.tax * this.middleSalary * this.vacancies;
        return totalTaxes;
    };

    console.log(getTotalTaxes.call(ukraine));

    function getMySalary(country) {
        let res = {};
        res.salary = randomInteger(1500, 2000);
        res.taxes = +((res.salary * country.tax).toFixed(1));
        res.profit = res.salary - res.taxes;
        console.log(res);
    }
    setInterval(getMySalary, 10000, ukraine);
    setInterval(getMySalary, 10000, latvia);
    setInterval(getMySalary, 10000, litva);
};
