$("#newButton").click(function () {

    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text);
        saveTodos();
    }
});

function createTodo(text) {

    const todo = $("<div></div>");

    todo.addClass("todo-item");
    todo.text(text);

    todo.click(function () {

        const answer = confirm("Do you want to remove this TO DO?");

        if (answer) {
            todo.remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function saveTodos() {

    const list = [];

    $(".todo-item").each(function () {
        list.push($(this).text());
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