var firstint = getElementById("first");
var secondint = getElementById("second");
var action = getElementById("action");
var submit = getElementById("submit");
var itog = getElementById("itog");

// Define the actions
const addAction = (num1, num2) => {
  // Perform the add operation and update the result
  const result = num1 + num2;
  return result;
}

const subtractAction = (num1, num2) => {
  // Perform the subtract operation and update the result
  const result = num1 - num2;
  return result;
}

const multiplyAction = (num1, num2) => {
  // Perform the multiply operation and update the result
  const result = num1 * num2;
  return result;
}

const rasdelitAction = (num1, num2) => {
  // Perform the multiply operation and update the result
  const result = num1 / num2;
  return result;
}

submit.addEventListener("submit",function(event) {
  event.preventDefault();
  if (action.value == "+") {
    itog.innerHTML = "<b>" + parseString(addAction(parseFloat(firstint.value),parseFloat(secondint.value))) + "</b>"
  } else if (action.value == "*") {
    itog.innerHTML = "<b>" + parseString(multiplyAction(parseFloat(firstint.value),parseFloat(secondint.value))) + "</b>"
  } else if (action.value == "-") {
    itog.innerHTML = "<b>" + parseString(substractAction(parseFloat(firstint.value),parseFloat(secondint.value))) + "</b>"
  } else if (action.value == "/" {
    itog.innerHTML = "<b>" + parseString(rasdelitAction(parseFloat(firstint.value),parseFloat(secondint.value))) + "</b>"
})
