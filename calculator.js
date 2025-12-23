const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

//  Button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleInput(button.innerText);
  });
});

//  Keyboard support (Enter key)
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleInput("=");
  } else if (event.key === "Backspace") {
    handleInput("DEL");
  } else if (event.key === "Escape") {
    handleInput("AC");
  } else {
    
    const allowedKeys = ["0","1","2","3","4","5","6","7","8","9",".","+","-","*","/","%"];
    if (allowedKeys.includes(event.key)) {
      handleInput(event.key);
    }
  }
});


function handleInput(value) {
  if (value === "AC") {
    currentInput = "";
    display.value = "";
  } 
  else if (value === "DEL") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } 
  else if (value === "=") {
    try {
      let result = eval(currentInput);

    
      if (result === Infinity || result === -Infinity || isNaN(result)) {
        display.value = "Not Defined";
        currentInput = "";
      } else {
        currentInput = result.toString();
        display.value = currentInput;
      }
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  } 
  else {
    currentInput += value;
    display.value = currentInput;
  }
}