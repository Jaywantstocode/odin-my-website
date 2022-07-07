let x = 120

const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  if (name != null){
    alert(`Hello ${name}, nice to see you!`);
  }else{
    alert(`whats your name 😒`);
  }
//   if works like java i guess
}

button.addEventListener('click', greet);
