const root = document.getElementById("root");

function TodoForm(add) {
    const conteiner = document.createElement("form")

    conteiner.innerHTML = `
    <input type= "text" />
    <button>Add</button>
    `;
    conteiner.addEventListener("submit", (e) => {
        e.preventDefault(); // նշանակում է որ որևէ բան մի արա
        const value = conteiner.querySelector("input").value;
        add(value)
    })

    return conteiner;
}

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

function TodoFooter(todos) {
    const conteiner = document.createElement("div");

    const completed = todos.filter(todo => todo.completed === true).length;

    conteiner.innerHTML = `
    <span> ${completed} / ${todos.length} Completed </span>
    <button>Clear Completed</button>

    `;
    return conteiner;
}

function App() {

    let todos = [
        { label: "Learn HTML", completed: false },
        { label: "Learn CSS", completed: false },
        { label: "Learn JS", completed: false }
    ];
    const conteiner = document.createElement("div");

    function render() {
        conteiner.innerHTML = "";
        conteiner.appendChild(TodoForm(function (newText) {
            todos.push({
                label: newText,
                completed: false
            })
            render();
        }));
        conteiner.appendChild(List(todos));
        conteiner.appendChild(TodoFooter(todos))
    }
    render();

    return conteiner;
}

root.appendChild(App())