const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = '20px';

inputRef.value = Number.parseInt(textRef.style.fontSize);
inputRef.addEventListener('input', () => {
  textRef.style.fontSize = `${inputRef.value}px`;
});
