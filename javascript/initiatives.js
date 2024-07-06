// Typewriting Animation

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Our Initiatives🤝";
    }, 0);
    setTimeout(() => {
        text.textContent = "What Can We Do?";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Scroll Down To Find Out More!👇";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);