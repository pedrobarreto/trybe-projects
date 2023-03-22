//inicio do script

//função seleciona primeira box de cor 
window.onload = function () {
  let mainColor = document.getElementById('black');
  mainColor.classList.add('selected');
}

//Cor randomica
let randomColor1 = '#' +  Math.ceil(Math.random() * 6000 );
let randomColor2 = '#' +  Math.ceil(Math.random() * 6000 );
let randomColor3 = '#' +  Math.ceil(Math.random() * 6000 );
let black = document.getElementById('black');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
black.style.backgroundColor = '#000'
color1.style.backgroundColor = randomColor1;
color2.style.backgroundColor = randomColor2;
color3.style.backgroundColor = randomColor3;

//função criar quadrados de pixel inicial
let pixelBoard = document.querySelector('#pixel-board');
for (i=0; i < 5; i += 1) {
  let pixelsRow = document.createElement('div') 
  pixelsRow.id = 'pixelRow'
  pixelBoard.appendChild(pixelsRow);
  for (let index = 0; index < 5; index += 1) {
    let pixels = document.createElement('div');;
  pixels.className = 'pixel';
  pixelBoard.appendChild(pixels);
  }
}

//função criar quadrados de pixel dinamicamente
function SquarePixel() {
let vqvButton = document.getElementById('generate-board');
vqvButton.addEventListener('click', function() {
let pixelBoard = document.querySelector('#pixel-board');  
let input = document.getElementById('board-size').value;
pixelBoard.innerHTML = '';
if ( input <= 0 ) {
window.alert('Board inválido!') 
} else {
for ( iR = 0; iR < input; iR += 1) {
  if ( input <= 4  ) {
    input = 5 }
    else if ( input >= 50 ) {
      input = 50; }
   let pixelsRow = document.createElement('div') 
  pixelsRow.id = 'pixelRow'
  pixelBoard.appendChild(pixelsRow);
for (let index = 0; index < input; index += 1) {
 let pixels = document.createElement('div') 
 pixels.className = 'pixel';
 pixelBoard.appendChild(pixels);
} }
}});
}
SquarePixel();

//função de selecionar cores 
function colorPicker() {
  let colorSelected = document.getElementsByClassName('selected');
  addEventListener('click', function(event) {
    let alvo = event.target
    for(let i = 0; i < colorSelected.length; i += 1) {
      if( alvo.className === 'color') { 
      colorSelected[i].classList.remove('selected');
      alvo.classList.add('selected');   
      } else if ( alvo.className === 'pixel') {
      alvo.style.backgroundColor = colorSelected[i].style.backgroundColor
      }}
      })
    };
  
colorPicker();

//função do botão limpar
function clearButton() {
  let clear = document.getElementById('clear-board');
  let pixelSelect = document.getElementsByClassName('pixel');
  clear.addEventListener('click', function(event) {
    for(let i =0; i < pixelSelect.length; i += 1) {
    pixelSelect[i].style.backgroundColor = '#fff'  
    }
      })
    };
clearButton();