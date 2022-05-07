import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

getValueFromLocalstorage();

function onFormInput() {
    const userEmail = refs.input.value;
    const userMessage = refs.textarea.value;
  
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify({email: userEmail, message: userMessage }));
};

function getValueFromLocalstorage() {
    const savedValue = localStorage.getItem(STORAGE_KEY);
    const valuesFromLocalstorage = JSON.parse(savedValue);
    if (savedValue) {
        refs.input.value = valuesFromLocalstorage.email;
        refs.textarea.value = valuesFromLocalstorage.message;
    }
};

function onFormSubmit(e) {
    e.preventDefault();
    e.target.reset();

    const savedValue = localStorage.getItem(STORAGE_KEY);

    console.log(JSON.parse(savedValue));
    localStorage.removeItem(STORAGE_KEY);
  
}

