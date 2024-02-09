document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {};
    for (const input of loginForm.elements) {
      if (input.name) {
        formData[input.name] = input.value;
      }
    }
    const isEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );
    if (isEmpty) {
      alert("Toate câmpurile trebuie completate!");
    } else {
      console.log(formData);
      loginForm.reset();
    }
  });
});
