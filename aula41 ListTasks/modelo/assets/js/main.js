function meuEscopo() {
    const inputTarefa = document.querySelector(".input-tarefa");
    const btnTarefa = document.querySelector(".btn-tarefa");
    const tarefas = document.querySelector(".tarefas");

    btnTarefa.addEventListener("click", function () {
        if (!inputTarefa.value) return;

        criarTarefa(inputTarefa.value);
    });

    //Key press tecla pressionada, keyup quando você está pressionado e solta
    inputTarefa.addEventListener("keypress", function (e) {
        // Nesse contexto cada tecla que você pressionar vai retornar um keycode o 13 é relativo ao espaço
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;

            criarTarefa(inputTarefa.value);
        }
    });

    // Function para limpar o input
    function limpaInput() {
        inputTarefa.value = "";
        // Evento html para ficar focado no elemento
        inputTarefa.focus();
    }

    // Function para criar uma LI
    function criaLi() {
        const li = document.createElement("li");

        return li;
    }

    // Function para criar uma tarefa
    function criarTarefa(textInput) {
        const li = criaLi();
        const textElement = document.createTextNode(textInput);

        li.appendChild(textElement);

        tarefas.appendChild(li);
        // Limpar o input
        limpaInput();
        // criar botao de apagar
        criaBotaoApagar(li);
        // Salvar tarefa
        salvarTarefas();
    }

    // funções para criar uma butão
    function criaBotaoApagar(li) {
        // Da um espaço do botão e do texto
        li.innerText += " ";
        const botaoApagar = document.createElement("button");
        botaoApagar.innerText = "Apagar";
        // setar atributo
        botaoApagar.setAttribute("class", "apagar");
        botaoApagar.setAttribute("title", "Apagar essa tarefa");
        li.appendChild(botaoApagar);
    }

    document.addEventListener("click", function (e) {
        const el = e.target;

        if (el.classList.contains("apagar")) {
            // Apagando o pai do nosso elemento
            el.parentElement.remove();
            salvarTarefas();
        }
    });

    // Salvar as tarefas no local storage
    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll("li");
        const listaTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaText = tarefa.innerText;
            // substituindo a palavra apagar para nada e tirando os espaços com trim
            tarefaText = tarefaText.replace("Apagar", "").trim();
            listaTarefas.push(tarefaText);
        }

        // JSON é um tipo de texto que utilizamos para salvar dados entre sistemas
        const tarefasJSON = JSON.stringify(listaTarefas);
        // Esse é um local no navegador onde você pode salvar coisas, nesse caso vamos salvar uma string
        // Você só pode salvar strings e o primeiro parametro é o nome que você vai utilizar para recuperar e o segundo as strings
        localStorage.setItem("tarefas", tarefasJSON);
    }

    // função para ler as tarefas e jogar elas de novo na lista
    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem("tarefas");
        // Converte de volta para um objeto JS
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas) {
            criarTarefa(tarefa);
        }
    }

    adicionaTarefasSalvas();
}

meuEscopo();
