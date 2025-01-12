const todolist = [{
    name: 'make dinner',
    duedate: '2022-12-22'
  }, {
    name: 'wash dishes',
    duedate: '2022-12-22'
  }];
renderTodoList();
function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;

    const dateinputElement=document.querySelector('.js-due-date-input');
    const duedate=dateinputElement.value;

    todolist.push({name,duedate});
    
    inputElement.value='';
    renderTodoList();
}
function renderTodoList(){
    let todolistHTML=' ';
    for(let i=0;i<todolist.length;i++){
        const todo=todolist[i];
        //const name=todoObject.name;
        //const duedate=todoObject.duedate;
        const{name,duedate}=todo;
        const html=`
        <div>${name}</div>
        <div>${duedate}</div>
        <button onclick="
        todolist.splice(${i},1);
        renderTodoList();
        ">Delete</button>
        `;
        todolistHTML+=html;
    }
    document.querySelector('.js-todo-list').innerHTML=todolistHTML;
    }
   
