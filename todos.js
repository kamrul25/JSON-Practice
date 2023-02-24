function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}
function displayTodos(todos){
    const todosContainer = document.getElementById("todos-container");
    for(const todo of todos){
        const div = document.createElement('div');
        div.classList.add('todo');
        div.innerHTML = `
        <h2>User:-${todo.userId}</h2>
        <p>Title:-${todo.title}</p>
        <p>Complete:-${todo.completed === true ? 'It is completed' : 'It is not completed'}</p>
        `;
        todosContainer.appendChild(div);
    }
}
loadTodos();