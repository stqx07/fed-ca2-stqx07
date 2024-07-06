// Typewriting Animation

// const text = document.querySelector(".sec-text");

// const textLoad = () => {
//     setTimeout(() => {
//         text.textContent = "About Me🙋‍♂️";
//     }, 0);
//     setTimeout(() => {
//         text.textContent = "Values🙂";
//     }, 4000);
//     setTimeout(() => {
//         text.textContent = "Personality😆";
//     }, 8000);
//     setTimeout(() => {
//         text.textContent = "Interests🤗";
//     }, 12000);
// }

// textLoad();
// setInterval(textLoad, 16000);

// Typewriting Animation

const text = document.querySelector(".sec-text");
const texts = ["About Me🙋‍♂️", "Values🙂", "Personality😆", "Interests🤗"];
let index = 0;

const textLoad = () => {
    text.textContent = texts[index];
    index = (index + 1) % texts.length;
}

textLoad(); // Initial call to display the first text
setInterval(textLoad, 4000); // Changes text every 4 seconds


// Circular Progress Bar Animation

var circularProgressArray = document.getElementsByClassName("circular-progress");
var progressValueArray = document.getElementsByClassName("progress-value");
var maxValueArray = [67, 83, 53, 61, 51];

for (let i = 0; i < circularProgressArray.length; i++) {
  let progressInterval;
  progressInterval = setInterval(() => {
    let spanText = parseFloat(progressValueArray[i].innerText);
    spanText++;
    progressValueArray[i].innerText = `${spanText}%`;
    circularProgressArray[i].style.background = `conic-gradient(#7d2ae8 ${
      spanText * 3.6
    }deg, #ededed 0deg)`;
    if (spanText >= maxValueArray[i]) {
      clearInterval(progressInterval);
    }
  }, 12);
}
