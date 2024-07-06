// Typewriting Animation

const text = document.querySelector(".sec-text");
const texts = ["Our Initiatives🤝", "What Can We Do?", "Scroll Down To Find Out More!👇"];
let index = 0;

const textLoad = () => {
    text.textContent = texts[index];
    index = (index + 1) % texts.length;
}

textLoad(); // Initial call to display the first text
setInterval(textLoad, 4000); // Changes text every 4 seconds