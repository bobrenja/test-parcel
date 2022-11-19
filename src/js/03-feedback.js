const ref = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
}
ref.textarea.addEventListener('input', onTextInputTextarea);
ref.form.addEventListener('submit', submitComent);
const STOREGE_KEY = ""
readLocal();

function onTextInputTextarea (e) {
    const val = e.currentTarget.value

localStorage.setItem('textarea-message', val)
} 

function readLocal() {
   const val =  localStorage.getItem('textarea-message');
   ref.textarea.value = val;
}


function submitComent(e) {
    e.preventDefault();
    localStorage.removeItem('textarea-message')
    e.currentTarget.reset();
    console.log("відправка...")
}