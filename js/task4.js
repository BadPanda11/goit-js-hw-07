const counterRef = document.querySelector('#counter');
const valueRef = document.querySelector('#value');

const decrementRef = counterRef.firstElementChild;
const incrementRef = counterRef.lastElementChild;

let counterValue = Number(valueRef.textContent);

decrementRef.addEventListener('click', decrementHandler);
incrementRef.addEventListener('click', incrementHandler);

function decrementHandler() {
  counterValue -= 1;
  return (valueRef.textContent = counterValue);
}
function incrementHandler() {
  counterValue += 1;
  return (valueRef.textContent = counterValue);
}
