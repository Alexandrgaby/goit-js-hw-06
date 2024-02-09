const nameInput = document.getElementById("name-input");
const nameOutut = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
  const inputVale = nameInput.value;
  if (inputVale === "") {
    nameOutut.textContent = "Anonymous";
  } else {
    nameOutut.textContent = inputVale;
  }
});
