// Typewriting Animation

const text = document.querySelector(".sec-text");
const texts = ["Feedback🙂", "What Can Be Improved?🤔", "Your Feedback Is Important!🤗"];
let index = 0;

const textLoad = () => {
    text.textContent = texts[index];
    index = (index + 1) % texts.length;
}

textLoad(); // Initial call to display the first text
setInterval(textLoad, 4000); // Changes text every 4 seconds

// Feedback Form Validation

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()