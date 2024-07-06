// Typewriting Animation

const text = document.querySelector(".sec-text");
const texts = ["Sustainability @ SP", "What Has SP Done?", "Scroll Down To Find Out More!👇"];
let index = 0;

const textLoad = () => {
    text.textContent = texts[index];
    index = (index + 1) % texts.length;
}

// Initial call to display the first text
textLoad();
// Changes text every 4 seconds
setInterval(textLoad, 4000);