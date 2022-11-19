
import throttle from 'lodash.throttle';
const ref = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
}
// ref.textarea.addEventListener('input', onTextInputTextarea);
const STOREGE_KEY = "value-form"
ref.form.addEventListener('submit', submitComent);
ref.form.addEventListener('input', throttle(onTextInputTextarea, 500));

readLocal();
// const a = JSON.parse(localStorage.getItem(STOREGE_KEY));
// const formData = a ? JSON.parse(localStorage.getItem(STOREGE_KEY)) : {}
let formData = JSON.parse(localStorage.getItem(STOREGE_KEY)) || {};


function onTextInputTextarea (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STOREGE_KEY, JSON.stringify(formData))
} 

function readLocal() {

const val = JSON.parse(localStorage.getItem(STOREGE_KEY));
  console.log(val)
//    ref.textarea.value = val;
if(val) {

//    val.forEach(function (number, index) {
//     console.log(`Індекс ${index}, значення ${number}`);
//   });

const keys = Object.keys(val);
console.log(keys)
keys.forEach(x => {

if(x === 'email' )  ref.form.email.value = val[x];
if(x === 'message' )  ref.form.message.value = val[x];

});


} 


}


function submitComent(e) {
    e.preventDefault();
    localStorage.removeItem(STOREGE_KEY)
    e.currentTarget.reset();
    console.log("відправка...")
}






