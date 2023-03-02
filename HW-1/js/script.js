let Apple = 15.678;
let Pear = 123.965;
let Cherry = 90.2345;

const max_price = Math.max(Apple, Pear, Cherry);
const min_price = Math.min(Apple, Pear, Cherry);
const all_prices = Apple + Pear + Cherry;
const floor_prices = Math.floor(Apple) + Math.floor(Pear) + Math.floor(Cherry);
const rounded_to_100 = Math.round(all_prices / 100) * 100;
const boolean_prices = Math.floor(all_prices);
const boolean_func = boolean_prices % 2 ? false : true;
const rest_amount = 500 - all_prices;
const average_prices = (all_prices / 3).toFixed(2);
const discount = Math.floor(Math.random() * 51);
const discount_price = (all_prices - ((all_prices * discount) / 100)).toFixed(2);
const purchase_prices = all_prices / 2;
const profit = (discount_price - purchase_prices).toFixed(2);

const prices =
    `Максимальне ціна: ${max_price},
Мінімальна ціна: ${min_price},
Сума усіх цін: ${all_prices},
Сума всіх товарів без копійок: ${floor_prices},
Сума товарів округлена до сотень: ${rounded_to_100},
Сума товарів округлена в меншу сторону: ${boolean_prices},
Округлена сума усіх товарів парна: ${boolean_func},
Сума решти при оплаті всіх товарів: ${rest_amount},
Середнє значення цін, округлене до другого знаку після коми: ${average_prices},
Знижка: ${discount}%,
Сума до сплати після знижки: ${discount_price},
Прибуток: ${profit}`;

console.log("Максимальне ціна: ", max_price);
console.log("Мінімальна ціна: ", min_price);
console.log("Сума усіх цін: ", all_prices);
console.log("Сума всіх товарів без копійок: ", floor_prices)
console.log("Сума товарів округлена до сотень: ", rounded_to_100)
console.log("Сума товарів округлена в меншу сторону: ", boolean_prices);
console.log("Округлена сума усіх товарів парна: ", boolean_func);
console.log("Сума решти при оплаті всіх товарів: ", rest_amount);
console.log("Середнє значення цін, округлене до другого знаку після коми: ", average_prices);
console.log("Знижка: ", discount, "%");
console.log("Сума до сплати після знижки: ", discount_price);
console.log("Прибуток: ", profit);
document.writeln(prices);


