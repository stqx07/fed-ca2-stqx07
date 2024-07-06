// Typewriting Animation

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Sustainability @ SP";
    }, 0);
    setTimeout(() => {
        text.textContent = "What Has SP Done?";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Scroll Down To Find Out More!👇";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);