function append(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = math.evaluate(display.value);
    display.value = result;
  } catch (err) {
    display.value = 'Error';
  }
}
