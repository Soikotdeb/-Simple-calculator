
let result = document.getElementById("result");

function appendInput(input) {
  result.value += input;
}

function clearResult() {
  result.value = "";
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = "Error";
  }
}
