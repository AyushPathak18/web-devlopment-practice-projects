let todolist=[]

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;
    todolist.push(name);

}