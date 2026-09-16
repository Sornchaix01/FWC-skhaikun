const newButton = document.getElementById("newButton");
const ftList = document.getElementById("ft_list");

newButton.addEventListener("click", function () {

    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text);
        saveTodos();
    }

});

function createTodo(text) {

    const todo = document.createElement("div");

    todo.className = "todo-item";
    todo.textContent = text;

    todo.addEventListener("click", function () {

        const answer = confirm("Do you want to remove this TO DO?");

        if (answer) {
            todo.remove();
            saveTodos();
        }

    });

    ftList.prepend(todo);
}

function saveTodos() {

    const todos = document.querySelectorAll(".todo-item");

    const list = [];

    todos.forEach(function (todo) {
        list.push(todo.textContent);
    });

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(list)) +
        "; path=/";
}

function loadTodos() {

    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {

        cookie = cookie.trim();

        if (cookie.startsWith("todos=")) {

            const data = cookie.substring(6);

            const list = JSON.parse(
                decodeURIComponent(data)
            );

            for (let i = list.length - 1; i >= 0; i--) {
                createTodo(list[i]);
            }
        }
    }
}

loadTodos();