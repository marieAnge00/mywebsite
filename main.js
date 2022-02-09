const form = document.getElementById('form');
const firstname = document.getElementById('name');
const lastname = document.getElementById('namee2');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const modal,fade = document.getElementById('modal');

form.addEventlistener('submit', e => {
    e.preventDefault() ;

    validateInputs() ;
});

const setError = (Element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(' .error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}