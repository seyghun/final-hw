export function HW11() {
    console.log("Eleventh Homework: ");
    function getRandomChinese(length) {
        const start = Date.now();
        return new Promise((resolve) => {
            let result = '';
            let i = 0;
            while (i < length) {
                const now = Date.now();
                const sign = now.toString().slice(-5);
                result += String.fromCharCode(sign);
                i++;
            }
            const timeTaken = Date.now() - start;
            if (timeTaken < length * 50) {
                setTimeout(() => resolve(result), length * 50 - timeTaken);
            }
        });
    }

    getRandomChinese(4).then((result) => console.log(result));
};
