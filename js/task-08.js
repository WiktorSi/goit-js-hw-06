const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event){
  event.preventDefault();
  const {
    elements: { email, password}
  } = event.currentTarget;
  if(email.value === "" || password.value === ""){
    alert("Wszystkie pola muszą być uzupełnione!!!");
    return;
  }
  
  const myFormData = new FormData(event.target);

   const formDataObj = {
  email: email.value,
  password: password.value,
}
  event.currentTarget.reset();
}
