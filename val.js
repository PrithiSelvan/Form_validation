const form = document.querySelector('#form');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const phonenumber = document.querySelector('#phone');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    if (validateInputs()) {
        window.location.href = "message.html";
    }
});

const setError = (element, message) => {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
};

const setSuccess = (element) => {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
};

const validateInputs = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phonenumberVal = phonenumber.value.trim();
    let success = true;

    if (usernameVal === '') {
        setError(username, 'Username is required');
        success = false;
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
        success = false;
    } else {
        setSuccess(email);
    }

    if (phonenumberVal === '') {
        setError(phonenumber, 'Phone number is required');
        success = false;
    } else if (phonenumberVal.length !== 10 || isNaN(phonenumberVal)) {
        setError(phonenumber, 'Phone number must be exactly 10 digits long');
        success = false;
    } else {
        setSuccess(phonenumber);
    }

    return success; 
};
