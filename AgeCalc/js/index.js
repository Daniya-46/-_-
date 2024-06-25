document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");

  const calcHeading = document.createElement("h1");
  calcHeading.innerText = `Age
    Calculator`;
  root.appendChild(calcHeading);

  const inputContainer = document.createElement("div");
  inputContainer.className = "inputContainer";

  const inputCard = document.createElement("div");
  inputCard.className = "inputCard";

  const input = document.createElement("input");
  input.className = "input";
  input.type = "date";
  input.placeholder = "Enter your date of birth";
  inputContainer.appendChild(input);
  inputCard.appendChild(inputContainer);

  const submitButton = document.createElement("button");
  submitButton.innerText = "Calculate Age";
  submitButton.addEventListener("click", function () {
    const dob = new Date(input.value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dob.getDate())
    ) {
      age--;
    }

    const resultContainer = document.createElement("div");
    resultContainer.className = "result";
    resultContainer.innerText = `Your age is ${age} years.`;

    const existingResult = root.querySelector(".result");
    if (existingResult) {
      existingResult.remove();
    }

    inputCard.appendChild(resultContainer);
  });

  inputCard.appendChild(submitButton);
  root.appendChild(inputCard);
});
