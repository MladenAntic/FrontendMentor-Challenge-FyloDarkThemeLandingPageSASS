const email = document.getElementById("email");
const submit = document.getElementById("submit");

const errorMessage = document.querySelector(".newsletter__error");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!email.checkValidity()) {
    email.style.outline = "1px solid hsl(0, 100%, 63%)";
    errorMessage.style.display = "block";
  } else {
    email.style.outline = "none";
    errorMessage.style.display = "none";
  }
});
