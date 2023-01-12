let addToDoButton = document.getElementById('anadir');
let toDoContainer = document.getElementById('lista_tareas');
let inputField = document.getElementById('campo');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('tareas');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('completada');
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
