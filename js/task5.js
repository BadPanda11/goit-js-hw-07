const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
console.dir(inputRef);

inputRef.addEventListener('input', () => {
  spanRef.textContent = inputRef.value;
  if (inputRef.value === '') {
    spanRef.textContent = `незнакомец`;
  }
});
