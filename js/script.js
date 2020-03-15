var link = document.querySelector(".reserve-button");
var popup = document.querySelector(".popup-form");

var form = popup.querySelector("form");
var datein = popup.querySelector("[name=date-check-in]");
var dateoff = popup.querySelector("[name=date-check-off]");




link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-form-close");
  popup.classList.remove("popup-form-shake");
});

form.addEventListener("submit", function(evt) {
  if (!datein.value || !dateoff.value) {
    evt.preventDefault();
    console.log("Нужно ввести даты въезда и выезда");
    popup.classList.remove("popup-form-shake");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-form-shake");
  }
});
