const logarButton = document.querySelector('.submit-button');
const pwdInput = document.querySelector('[name=pwd]');
const loginInput = document.querySelector('[name=login]');
function formSubmit(event) {
  event.preventDefault();
  if (pwdInput.value === '123456' && loginInput.value === 'tryber@teste.com') {
    window.alert('Olá, Tryber!');
  }
  window.alert('Login ou senha inválidos.');
}
logarButton.addEventListener('click', formSubmit);

function trybeRating() {
  const labelRate = document.querySelector('#trybe-rating');
  for (let i = 1; i <= 10; i += 1) {
    const createLabel = document.createElement('label');
    const createElement = document.createElement('input');
    createLabel.className = 'form-check-label';
    createElement.className = 'form-check-input';
    createElement.type = 'radio';
    createElement.name = 'rate';
    createElement.value = [i];
    createElement.id = [i];
    createLabel.for = [i];
    createLabel.innerText = i;
    createLabel.prepend(createElement);
    labelRate.appendChild(createLabel);
  }
}

// requisito 18
const agree = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
agree.addEventListener('change', () => {
  if (agree.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// requisito 20
const textArea = document.querySelector('textarea');
const counter = document.querySelector('#counter');
textArea.addEventListener('input', () => {
  const contador = 500 - textArea.value.length;
  counter.innerText = contador;
  if (contador < 100) {
    counter.style.color = 'red';
  } else {
    counter.style.color = 'black';
  }
});

// requisito 21
function subjectPrint(element) {
  const support = [];
  for (let i = 0; i < element.length; i += 1) {
    support.push(element[i].value);
  }
  return support;
}

function constructorDiv(inputs, names, form) {
  inputs.forEach((element, idx) => {
    const inputDiv = document.createElement('div');
    if (idx === 0) {
      const texto = `${names[idx]}: ${element}`;
      inputDiv.innerText = texto;
      form.appendChild(inputDiv);
    } else if (idx === 4) {
      const array = subjectPrint(element);
      const texto = `${names[idx]}: ${array.join(', ')}`;
      inputDiv.innerText = texto;
      form.appendChild(inputDiv);
    } else {
      const texto = `${names[idx]}: ${element.value}`;
      inputDiv.innerText = texto;
      form.appendChild(inputDiv);
    }
  });
}
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.querySelector('#evaluation-form');
  const name = document.querySelector('#input-name');
  const lastName = document.querySelector('#input-lastname');
  const fullName = `${name.value} ${lastName.value}`;
  const email = document.querySelector('#input-email');
  const house = document.querySelector('#house');
  const family = document.querySelector('input[name="family"]:checked');
  const subject = document.querySelectorAll('input[name="conteudo"]:checked');
  const rate = document.querySelector('input[name="rate"]:checked');
  const obs = document.querySelector('#textarea');
  const array = [fullName, email, house.options[house.selectedIndex], family, subject, rate, obs];
  const names = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  form.innerHTML = '';
  constructorDiv(array, names, form);
});

window.onload = () => {
  trybeRating();
};
