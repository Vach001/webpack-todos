const root = document.getElementById("root");

function TodoForm(add) {
    const container = document.createElement("form")

    container.innerHTML = `
    <input type= "text" />
    <button>Add</button>
    `;
    container.addEventListener("submit", (e) => {
        e.preventDefault(); // նշանակում է որ որևէ բան մի արա
        const value = container.querySelector("input").value;
        add(value)
    })

    return container;
}

function ListItem(todo, onChange) {
    const container = document.createElement("div");

    container.innerHTML = `
    <label>
        <input type="checkbox" ${todo.completed ? "checked" : ""}/>
        ${todo.label}
    </label>
    `;

    const input = container.querySelector("input");
    input.addEventListener("change", (e) => {
        onChange(e.target.checked);
    });

    return container;
}
function List(todos, onChange) {
    const container = document.createElement("div");

    todos.map(todo => {
        return ListItem(todo, (change) => {
            todo.completed = change;
            onChange();
        });
    }).forEach(element => {
        container.appendChild(element)
    });

    return container;
}

function TodoFooter(todos) {
    const container = document.createElement("div");

    const completed = todos.filter(todo => todo.completed === true).length;

    container.innerHTML = `
    <span> ${completed} / ${todos.length} Completed </span>
    <button>Clear Completed</button>

    `;
    return container;
}

function App() {

    let todos = [
        { label: "Learn HTML", completed: false },
        { label: "Learn CSS", completed: false },
        { label: "Learn JS", completed: false }
    ];
    const container = document.createElement("div");

    function render() {
        container.innerHTML = "";

        container.appendChild(TodoForm(function (newText) {
            todos.push({
                label: newText,
                completed: false
            })
            render();
        }));
        container.appendChild(List(todos, () => {
            render();
        }));
        container.appendChild(TodoFooter(todos))
    }
    render();

    return container;
}

root.appendChild(App())