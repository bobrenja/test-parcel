const e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};e.textarea.addEventListener("input",(function(e){const t=e.currentTarget.value;localStorage.setItem("textarea-message",t)})),e.form.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("textarea-message"),e.currentTarget.reset(),console.log("відправка...")}));!function(){const t=localStorage.getItem("textarea-message");e.textarea.value=t}();
//# sourceMappingURL=03-feedback.2d75f10e.js.map
