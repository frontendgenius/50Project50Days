// Select all elements with the class "input" and store them in the "inputs" variable
const inputs = document.querySelectorAll(".input");

// Function to add the "focus" class to the parent element when an input field is focused
const addFocusClass = function () {
  const parent = this.parentNode.parentNode;
  parent.classList.add("focus");
};

// Function to remove the "focus" class from the parent element when an input field loses focus, if the input field is empty
const removeFocusClass = function () {
  const parent = this.parentNode.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
};

// Loop through each input element
inputs.forEach((input) => {
  // Add event listener for "focus" event, calling the addFocusClass function
  input.addEventListener("focus", addFocusClass);

  // Add event listener for "blur" event, calling the removeFocusClass function
  input.addEventListener("blur", removeFocusClass);
});
