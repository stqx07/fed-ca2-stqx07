// Typewriting Animation

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Contact Me!☎️";
    }, 0);
    setTimeout(() => {
        text.textContent = "Fill Up Your Details!";
    }, 4000);
    setTimeout(() => {
        text.textContent = "I Will Get Right Back To You!🤗";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

// Contact Me Form Validation

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