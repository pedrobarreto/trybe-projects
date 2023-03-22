// variáveis
let sendButton = document.getElementById('criar-tarefa');
const inputItem = document.getElementById('texto-tarefa')
let olTasks = document.getElementById('lista-tarefas'); 
let eraseButton = document.getElementById('apaga-tudo');
let completedButton = document.getElementById('remover-finalizados');
let selectedItemButton = document.getElementById('remover-selecionado');
const saveItenButton = document.getElementById('salvar-tarefas');
const list = document.getElementById('lista-tarefas');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');

// Event Listeners
sendButton.addEventListener ( 'click', tasksList );
olTasks.addEventListener ( 'click', itemClick );
olTasks.addEventListener ( 'click', itemCompletedCheck );
eraseButton.addEventListener ( 'click', eraseList);
completedButton.addEventListener ( 'click', eraseCompleted);
selectedItemButton.addEventListener ( 'click', eraseSelectedItem);
saveItenButton.addEventListener ( 'click', addItensToLocalStorage);
upButton.addEventListener ( 'click', moveItensUp);
downButton.addEventListener ( 'click', moveItensDown);


// Funções
//Coloca os itens criados em lista
function tasksList() {
  olTasks.innerHTML += '<li>' + inputItem.value + '</li>'
  inputItem.value =  '';
}

// Marca o item selecionado com uma cor
function itemClick(x) {
  let colorSelected = document.querySelectorAll('.selected');
  for(let i = 0; i < colorSelected.length  ; i += 1) { 
    colorSelected[i].classList.remove('selected');
}
x.target.classList.add('selected'); 
}

// Risca os itens completados e desmarca o item caso clique 2 vezes
function itemCompletedCheck(x) {
 
  if ( x.target.classList.contains('completed') ) { 
    olTasks.addEventListener("dblclick", itemCompletedRemove);
    function itemCompletedRemove(y) {
      y.target.classList.remove('completed'); 
      }
    } else if ( x.target.classList.contains('selected') ) { 
    olTasks.addEventListener("dblclick", itemCompleted);
    function itemCompleted(z) {
        z.target.classList.add('completed');  
 }
  }
}

// Apaga os itens da lista
function eraseList() {
  olTasks.innerHTML = '';
}

// Apaga os itens finalizados
function eraseCompleted() {
  let completed = document.querySelectorAll('.completed');
 for(let i = 0; i < completed.length; i += 1) { 
  olTasks.removeChild(completed[i]);
}
}

//Apaga somente o item selecionado
function eraseSelectedItem() {
  let selected = document.querySelector('.selected');
    olTasks.removeChild(selected);
  }

  // adiciona os itens ao local storage
    function addItensToLocalStorage() {
      const oldList = JSON.parse(localStorage.getItem('itens'));
      const classList = JSON.parse(localStorage.getItem('class'));
      const itensText = inputItem.value;
      const itensClass = inputItem.id;
      oldList.push(itensText);
      classList.push(itensClass);
      localStorage.setItem('itens', JSON.stringify(oldList));
      localStorage.setItem('itensClass', JSON.stringify(classList));
      insertListInDOM();
    };

    // adiciona os itens ao DOM
    function insertListInDOM() {
      const itensList = JSON.parse(localStorage.getItem('itens'));
      const listLength = itensList.length - 1;
      const itensText = itensList[listLength];
      const itens = document.createElement('li');
      itens.innerText = itensText;
      list.appendChild(itens);
    };
  
    // Renderiza os itens no local storage
    function initialRenderization() {
      if (localStorage.getItem('itens') === null) {
        localStorage.setItem('itens', JSON.stringify([]));
      } else {
        const itensList = JSON.parse(localStorage.getItem('itens'));
        const listLength = itensList.length - 1;
        for (let index = 0; index <= listLength; index += 1) {
          const listElement = document.createElement('li');
          listElement.innerText = itensList[index];
          list.appendChild(listElement);
        };
      };
    };

    //função inicial para buscar itens salvos no local storage
    window.onload = function() {
      initialRenderization();
    };

//mover tarefas para cima e baixo 
// Aprendi lendo em: https://stackoverflow.com/questions/46724542/javascript-move-elements-up-and-down-in-the-list
 function moveItensUp() {
      let selected = document.querySelector('.selected')

          if( selected !== null && selected.previousElementSibling)
          selected.parentNode.insertBefore(selected, selected.previousElementSibling);
        }

        function moveItensDown() {
          let selected = document.querySelector('.selected')
    
              if( selected !== null && selected.nextElementSibling)
              selected.parentNode.insertBefore(selected.nextElementSibling, selected);
            }