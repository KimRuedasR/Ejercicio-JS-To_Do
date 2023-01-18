let addToDoButton = document.getElementById('anadir');
let toDoContainer = document.getElementById('lista_tareas');
let inputField = document.getElementById('campo');

addToDoButton.addEventListener('click', function(){
    var parrafo = document.createElement('p');
    parrafo.classList.add('tareas');
    parrafo.innerText = inputField.value;
    toDoContainer.appendChild(parrafo);
    inputField.value = "";
    
    parrafo.addEventListener('click', function(){
        parrafo.classList.add('completada');
    })
    parrafo.addEventListener('dblclick', function(){
        toDoContainer.removeChild(parrafo);
    })
})