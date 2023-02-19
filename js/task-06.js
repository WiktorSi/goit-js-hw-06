const input = document.querySelector("#validation-input");
const currentLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", (event)=>{
  if (event.currentTarget.value.length === currentLength)
  {
  input.classList.add("valid");
    input.classList.remove("invalid")
  }
  else {
     input.classList.add("invalid");
    input.classList.remove("valid");
  }
})