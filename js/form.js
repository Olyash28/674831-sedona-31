const btnForm = document.querySelector(".btn-brown");
const form = document.querySelector(".hotel-search-form");

form.classList.add("hotel-search-form-hide");

btnForm.addEventListener("click", function () {
  form.classList.toggle("hotel-search-form-hide");
});
