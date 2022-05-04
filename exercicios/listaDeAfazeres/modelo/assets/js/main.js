function meuEscopo() {
    const listaAfazeres = document.querySelector(".listaAfazeres");
    const inputTarefa = document.querySelector(".textList");

    document.addEventListener("click", function (e) {
        const element = e.target;

        if (element.classList.contains("addTarefa")) {
            if (!inputTarefa.value) return;

            adicionaTarefa(inputTarefa.value);
        }

        if (element.classList.contains("btnDelete")) {
            element.parentElement.remove();
            SalvaTarefa();
        }
    });

    inputTarefa.addEventListener("keypress", function (e) {
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;

            adicionaTarefa(inputTarefa.value);
        }
    });

    function LimpaCampo() {
        inputTarefa.value = "";

        inputTarefa.focus();
    }

    function criaLi() {
        const liElement = document.createElement("li");

        return liElement;
    }

    function adicionaTarefa(textInput) {
        const liCreate = criaLi();
        const textNodeElement = document.createTextNode(textInput);

        liCreate.appendChild(textNodeElement);
        listaAfazeres.appendChild(liCreate);
        LimpaCampo();
        criaBotaoDelete(liCreate);
        SalvaTarefa();
    }

    function criaBotaoDelete(li) {
        const btnDelete = document.createElement("button");
        btnDelete.setAttribute("class", "btnDelete");
        btnDelete.setAttribute("title", "Apagar Tarefa");

        btnDelete.innerText = "apagar";
        li.innerText += " ";

        li.appendChild(btnDelete);
    }

    function SalvaTarefa() {
        const elementList = listaAfazeres.querySelectorAll("li");
        const listElements = [];

        for (let task of elementList) {
            let taskText = task.innerText;

            taskText = taskText.replace("apagar", "").trim();
            listElements.push(taskText);
        }

        // trasformando em JSON
        const listElementJSON = JSON.stringify(listElements);

        // Colocando no local Storage
        localStorage.setItem("tasks", listElementJSON);
    }

    function addTaskFromStorage() {
        const tasksLocal = localStorage.getItem("tasks");
        let tasksLocalArr = JSON.parse(tasksLocal);

        for (let task of tasksLocalArr) {
            adicionaTarefa(task);
        }
    }

    addTaskFromStorage();
}

meuEscopo();
