function* createIdGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const idGenerator = createIdGenerator();
const generateButton = document.getElementById("generate_button");
generateButton.addEventListener("click", () => { console.log(idGenerator.next().value) });


///////////////SECOND_FUNCTION///////////////////////

function* infiniteGenerator(initialFontSize) {
    let initialFS = initialFontSize;
    for (let i = 0; i < Infinity; i++) {
        const key = yield initialFS;
        if (key === "increase") {
            initialFS += 2;
            textElement.style.fontSize = initialFS + "px";
        }
        if (key === "decrease") {
            initialFS -= 2;
            textElement.style.fontSize = initialFS + "px";
        }
    };
};

const fontGenerator = infiniteGenerator(14);
const increaseButton = document.getElementById("increase_button");
const decreaseButton = document.getElementById("decrease_button");
const textElement = document.querySelector("p");

increaseButton.addEventListener("click", () => { fontGenerator.next("increase") });
decreaseButton.addEventListener("click", () => { fontGenerator.next("decrease") });

