const root = document.getElementById("root");

function ListItem(todo) {
    const conteiner = document.createElement("div");

    conteiner.innerHTML = `
    <label>
        <input type= "checkbox" />
        ${todo.label}
    </label>
    `;
    return conteiner;
}
function List(todos) {
    const conteiner = document.createElement("div");

    todos.map(todo => {
        return ListItem(todo);
    }).forEach(element => {
        conteiner.appendChild(element)
    });

    return conteiner;
}

function App() {

    let todos = [
        { label: "Learn HTML", completed: false },
        { label: "Learn CSS", completed: false },
        { label: "Learn JS", completed: false }
    ]
    const conteiner = document.createElement("div")

    conteiner.appendChild(List(todos));

    return conteiner
}

root.appendChild(App())